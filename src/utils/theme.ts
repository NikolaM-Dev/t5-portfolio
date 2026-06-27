import type { ThemeMode } from '#/types';

export const MODE_KEY = 'themeMode';

export function getThemeMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'auto';
  }

  const mode = localStorage.getItem(MODE_KEY);
  if (mode === 'light' || mode === 'dark' || mode === 'auto') {
    return mode;
  }

  return 'auto';
}
