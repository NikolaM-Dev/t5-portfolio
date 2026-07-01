import { createServerFn } from '@tanstack/react-start';
import { getCookie, setCookie } from '@tanstack/react-start/server';
import * as z from 'zod';

const themeModeSchema = z.enum(['auto', 'light', 'dark']);

export type ThemeMode = z.infer<typeof themeModeSchema>;

const THEME_MODE_KEY = 'theme_mode';

export const getThemeModeFn = createServerFn().handler(() => {
  return (getCookie(THEME_MODE_KEY) ?? 'auto') as ThemeMode;
});

export const setThemeModeFn = createServerFn()
  .validator(themeModeSchema)
  .handler(({ data }) => {
    setCookie(THEME_MODE_KEY, data);
  });
