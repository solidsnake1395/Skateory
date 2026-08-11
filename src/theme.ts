export type ColorSchemeName = "light" | "dark";

export type AppTheme = {
  background: string;
  surface: string;
  card: string;
  text: string;
  muted: string;
  border: string;
  primary: string;
  secondary: string;
  subtle: string;
  accent: string;
  tabBar: string;
};

export const themes: Record<ColorSchemeName, AppTheme> = {
  light: {
    background: "#F7F7F5",
    surface: "#FFFFFF",
    card: "#F1F1F1",
    text: "#111111",
    muted: "#676767",
    border: "#111111",
    primary: "#111111",
    secondary: "#FFFFFF",
    subtle: "#E7E7E7",
    accent: "#111111",
    tabBar: "#FFFFFF",
  },
  dark: {
    background: "#0D0D0D",
    surface: "#121212",
    card: "#1A1A1A",
    text: "#F5F5F5",
    muted: "#B5B5B5",
    border: "#F5F5F5",
    primary: "#F5F5F5",
    secondary: "#0D0D0D",
    subtle: "#2B2B2B",
    accent: "#FFFFFF",
    tabBar: "#111111",
  },
};

export function getTheme(mode: ColorSchemeName = "light") {
  return themes[mode];
}
