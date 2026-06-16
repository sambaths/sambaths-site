import { describe, it, expect } from 'vitest';
import { readingTime } from './reading-time';

describe('readingTime', () => {
  it('returns 0 for empty string', () => {
    expect(readingTime('')).toBe(0);
  });

  it('returns 1 for a single word', () => {
    expect(readingTime('hello')).toBe(1);
  });

  it('returns 1 for fewer than 160 words', () => {
    const text = 'word '.repeat(100).trim();
    expect(readingTime(text)).toBe(1);
  });

  it('returns 2 for 161 words', () => {
    const text = 'word '.repeat(161).trim();
    expect(readingTime(text)).toBe(2);
  });

  it('handles long text correctly', () => {
    const text = 'word '.repeat(480).trim();
    expect(readingTime(text)).toBe(3);
  });
});
