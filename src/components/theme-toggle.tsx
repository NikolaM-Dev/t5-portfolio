import { useTheme } from '#/contexts/theme-context';

export function ThemeToggle(): React.JSX.Element {
  const { themeMode, onChange } = useTheme();

  return (
    <select onChange={onChange} value={themeMode} name="theme" id="theme">
      <option value="auto">💻 Auto</option>
      <option value="light">🌝 Light</option>
      <option value="dark">🌚 Dark</option>
    </select>
  );
}
