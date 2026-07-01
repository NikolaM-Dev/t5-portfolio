import { useRouteContext, useRouter } from '@tanstack/react-router';

import { type ThemeMode, setThemeModeFn } from '#/lib';

export function ThemeToggle(): React.JSX.Element {
  const { themeMode } = useRouteContext({ from: '__root__' });
  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const themeMode = e.target.value as ThemeMode;

    await setThemeModeFn({ data: themeMode });
    await router.invalidate();
  };

  return (
    <select
      className="mb-4 self-start px-3 py-1.5 text-flexoki-600"
      aria-label="Toggle theme"
      onChange={handleChange}
      value={themeMode}
      name="theme"
      id="theme"
    >
      <option value="auto">Auto 💻</option>
      <option value="light">Light 🌝</option>
      <option value="dark">Dark 🌚</option>
    </select>
  );
}
