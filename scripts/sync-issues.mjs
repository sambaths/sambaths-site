#!/usr/bin/env node
/**
 * Sync GitHub issue state into local .scratch/ mirrors.
 *
 * Usage: node scripts/sync-issues.mjs <scratch-dir>
 *
 * Reads GitHub issue numbers from local files (GitHub: #N header),
 * fetches current state from GitHub, and updates Status: lines.
 */
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const scratchDir = process.argv[2] || '.scratch';

function findIssueFiles(dir) {
  const results = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findIssueFiles(full));
    } else if (entry.name.endsWith('.md')) {
      const content = readFileSync(full, 'utf-8');
      const match = content.match(/^GitHub: #(\d+)$/m);
      if (match) results.push({ path: full, number: parseInt(match[1]), content });
    }
  }
  return results;
}

try {
  const files = findIssueFiles(scratchDir);
  if (files.length === 0) {
    console.log('No local issue files with GitHub: #N references found.');
    process.exit(0);
  }

  for (const file of files) {
    try {
      const result = execSync(`gh issue view ${file.number} --json state,labels --jq '{state: .state, labels: [.labels[].name]}'`, { encoding: 'utf-8' });
      const { state, labels } = JSON.parse(result);
      const statusLine = labels.find(l => ['ready', 'manual-review', 'needs-triage', 'needs-info', 'wontfix'].includes(l)) || 'needs-triage';
      const updated = file.content
        .replace(/^Status: .+$/m, `Status: ${statusLine}`)
        .replace(/^State: .+$/m, state === 'closed' ? 'State: closed' : 'State: open');
      if (updated !== file.content) {
        writeFileSync(file.path, updated);
        console.log(`Updated #${file.number} → Status: ${statusLine}, State: ${state}`);
      } else {
        console.log(`#${file.number} unchanged`);
      }
    } catch (e) {
      console.error(`Error syncing #${file.number}: ${e.message}`);
    }
  }
} catch (e) {
  console.error('Error:', e.message);
  process.exit(1);
}
