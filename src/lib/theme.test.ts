import { describe, it, expect, beforeEach, vi } from 'vitest';
import { cycleTheme, applyTheme, initTheme, THEMES } from './theme';

describe('THEMES', () => {
  it('contains dark, light, contrast', () => {
    expect(THEMES).toEqual(['dark', 'light', 'contrast']);
  });
});

describe('cycleTheme', () => {
  it('cycles dark -> light', () => {
    expect(cycleTheme('dark')).toBe('light');
  });

  it('cycles light -> contrast', () => {
    expect(cycleTheme('light')).toBe('contrast');
  });

  it('cycles contrast -> dark', () => {
    expect(cycleTheme('contrast')).toBe('dark');
  });

  it('defaults to dark for unknown theme', () => {
    expect(cycleTheme('unknown')).toBe('dark');
  });
});

describe('applyTheme', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('data-theme');
    localStorage.clear();
  });

  it('sets data-theme attribute on html element', () => {
    applyTheme('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('writes theme to localStorage', () => {
    applyTheme('contrast');
    expect(localStorage.getItem('theme')).toBe('contrast');
  });
});

describe('initTheme', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('data-theme');
    localStorage.clear();
  });

  it('returns stored theme and applies it', () => {
    localStorage.setItem('theme', 'light');
    const result = initTheme();
    expect(result).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('defaults to dark when no stored theme', () => {
    const result = initTheme();
    expect(result).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
