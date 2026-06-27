import { TanStackDevtools } from '@tanstack/react-devtools';
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { useState } from 'react';

import type { ThemeMode } from '#/types';

import { ThemeContext } from '#/contexts/theme-context';
import { getThemeMode, MODE_KEY } from '#/utils/theme';

import appCss from '../styles/globals.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => getThemeMode());

  const handleChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextThemeMode = e.target.value as ThemeMode;

    localStorage.setItem(MODE_KEY, nextThemeMode);
    setThemeMode(nextThemeMode);
  };

  return (
    <ThemeContext value={{ onChange: handleChangeTheme, themeMode }}>
      <html lang="en" data-theme={themeMode}>
        <head>
          <HeadContent />
        </head>

        <body className="antialiased">
          {children}
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
        </body>
      </html>
    </ThemeContext>
  );
}
