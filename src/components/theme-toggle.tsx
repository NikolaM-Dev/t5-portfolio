import { useTheme } from '#/contexts';

export function ThemeToggle(): React.JSX.Element {
  const { themeMode, onChange } = useTheme();

  return (
    <select
      className="mb-4 self-start px-3 py-1.5 text-flexoki-600"
      aria-label="Toggle theme"
      onChange={onChange}
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
