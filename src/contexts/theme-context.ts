import { createContext, useContext } from 'react';

import type { ThemeMode } from '#/types';

type ThemeContextProps = {
  themeMode: ThemeMode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  themeMode: 'auto',
  onChange: () => {},
});

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContext');
  }

  return context;
}
