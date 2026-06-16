export const THEMES = ['dark', 'light', 'contrast'] as const;

export function cycleTheme(current: string): string {
  const idx = THEMES.indexOf(current as typeof THEMES[number]);
  if (idx === -1) return 'dark';
  return THEMES[(idx + 1) % THEMES.length];
}

export function applyTheme(theme: string): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

export function initTheme(): string {
  const stored = localStorage.getItem('theme');
  const theme = stored || 'dark';
  applyTheme(theme);
  return theme;
}
