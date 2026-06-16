#!/usr/bin/env node

import { createInterface } from 'readline';
import { stdin as input, stdout as output } from 'process';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function today() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function generateContent(title, type, tags) {
  const date = today();
  const frontmatter = `---
title: "${title}"
date: ${date}
# TODO: Add a compelling description (1-2 sentences)
description: ""
tags:
${tags.map(t => `  - ${t}`).join('\n')}
type: "${type}"
---
`;

  const voiceGuidelines = `<!--
  VOICE GUIDELINES (remove this before publishing):
  - Write in conversational, first-person voice
  - Use self-aware humor (but don't force it)
  - Avoid corporate jargon ("leverage", "synergize", "architect the vision")
  - End with a memorable zinger — something quotable
  - Keep paragraphs short and scannable
  - Code blocks should be clean and runnable
-->
`;

  const template = type === 'strategic'
    ? `\n## The Problem\n\n[Describe the problem your audience faces]\n\n## A Framework\n\n[Introduce the mental model or framework]\n\n## In Practice\n\n[Apply it to a real example]\n\n## The Takeaway\n\n[End with a memorable zinger]\n`
    : `\n## The Problem\n\n[Describe the problem]\n\n## The Naive Approach\n\n[Show the naive solution and its shortcomings]\n\n## A Better Way\n\n[Present the better approach]\n\n\`\`\`\n\n\`\`\`\n\n## Why This Matters\n\n[Explain the broader implications]\n`;

  return frontmatter + '\n' + voiceGuidelines + '\n' + template;
}

function createPost(title, type, tags) {
  const slug = generateSlug(title);
  const filename = `${today()}-${slug}.mdx`;
  const filepath = join(__dirname, '..', 'src', 'content', 'blog', filename);
  const content = generateContent(title, type, tags);
  writeFileSync(filepath, content);
  return filepath;
}

const tty = output.isTTY;

if (tty) {
  console.log('\n📝  New Blog Post\n');
}

const rl = createInterface({ input, output, terminal: tty });

const answers = {};
let step = 0;

const prompts = [
  'Type (strategic/technical): ',
  'Title: ',
  'Tags (comma-separated): ',
];

if (tty) output.write(prompts[0]);

rl.on('line', (line) => {
  if (step === 0) {
    answers.type = line.trim().toLowerCase();
    if (answers.type !== 'strategic' && answers.type !== 'technical') {
      console.error('Error: Type must be "strategic" or "technical"');
      process.exit(1);
    }
    step++;
    if (tty) output.write(prompts[1]);
  } else if (step === 1) {
    answers.title = line.trim();
    if (!answers.title) {
      console.error('Error: Title is required');
      process.exit(1);
    }
    step++;
    if (tty) output.write(prompts[2]);
  } else if (step === 2) {
    answers.tags = line.trim();
    rl.close();
    const tags = answers.tags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);
    const filepath = createPost(answers.title, answers.type, tags);
    console.log(`\nCreated ${filepath}`);
  }
});
