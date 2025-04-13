"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type EraTheme =
  | "default"
  | "debut"
  | "fearless"
  | "speakNow"
  | "red"
  | "1989"
  | "reputation"
  | "lover"
  | "folklore"
  | "evermore"
  | "midnights"
  | "theTorturedPoetsDepartment";
interface ThemeContextType {
  currentEra: EraTheme;
  setCurrentEra: (era: EraTheme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const eraThemeColors = {
  default: {
    primary: "#f8c8dc", // Pink
    secondary: "#a2d2ff",
    accent: "#ffddd2",
    background: "#fff5f8",
    text: "#333333",
    bodyFont: "'Inter', sans-serif",
    headingFont: "'FontErasTour', serif",
  },
  debut: {
    primary: "#5abdb2", // Teal/Bluegreen
    secondary: "#2d8a82",
    accent: "#c2f0ea",
    background: "#e8f7f5",
    text: "#1a4d48",
    bodyFont: "'Inter', sans-serif",
    headingFont: "'FontTaylorSwift', serif",
  },
  fearless: {
    primary: "#e5bc3b", // Gold
    secondary: "#c99b10",
    accent: "#fbefc8",
    background: "#fffaed",
    text: "#664d04",
    bodyFont: "'Inter', sans-serif",
    headingFont: "'FontFearless', serif",
  },
  speakNow: {
    primary: "#7b68ee", // Violet/Indigo
    secondary: "#5a46c5",
    accent: "#dbd4ff",
    background: "#f4f1ff",
    text: "#2d2364",
    bodyFont: "'Inter', sans-serif",
    headingFont: "'FontSpeakNow', serif",
  },
  red: {
    primary: "#d11a2a", // Red
    secondary: "#8a1a1b",
    accent: "#ffd1d1",
    background: "#fff0f0",
    text: "#5a0000",
    bodyFont: "'Inter', sans-serif",
    headingFont: "'FontRed', serif",
  },
  "1989": {
    primary: "#5ac8fa", // Light Blue
    secondary: "#007aff",
    accent: "#d1edff",
    background: "#f0f9ff",
    text: "#003366",
    bodyFont: "'Helvetica Neue', sans-serif",
    headingFont: "'Font1989', sans-serif",
  },
  reputation: {
    primary: "#000000", // Black
    secondary: "#333333",
    accent: "#7d7d7d",
    background: "#1e1e1e",
    text: "#ffffff",
    bodyFont: "'Inter', sans-serif",
    headingFont: "'FontReputation', sans-serif",
  },
  lover: {
    primary: "#ff9ff3", // Pastel Pink
    secondary: "#f368e0",
    accent: "#ffeeff",
    background: "#fff0f7",
    text: "#8e2de2",
    bodyFont: "'Inter', sans-serif",
    headingFont: "'FontLover', sans-serif",
  },
  folklore: {
    primary: "#737373", // Grey/Emerald
    secondary: "#a6a6a6",
    accent: "#f2f2f2",
    background: "#f9f7f5",
    text: "#262626",
    bodyFont: "'Inter', sans-serif",
    headingFont: "'FontFolkEvermore', serif",
  },
  evermore: {
    primary: "#b76e79", // Burnt Orange/Tan
    secondary: "#976152",
    accent: "#f2e5d7",
    background: "#f8f5f0",
    text: "#5c3d2e",
    bodyFont: "'Inter', sans-serif",
    headingFont: "'FontFolkEvermore', serif",
  },
  midnights: {
    primary: "#1a1a4a", // Navy Blue
    secondary: "#0e0e2d",
    accent: "#c2c2e0",
    background: "#0c0024",
    text: "#e0d4ff",
    bodyFont: "'FontMidnights', sans-serif",
    headingFont: "'Inter', sans-serif",
  },
  theTorturedPoetsDepartment: {
    primary: "#405160", // Slate Blue
    secondary: "#2a3641",
    accent: "#d6dde4",
    background: "#f2f4f7",
    text: "#1c252e",
    bodyFont: "'Inter', sans-serif",
    headingFont: "'FontTTPD', sans-serif",
  },
};

export function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [currentEra, setCurrentEra] = useState<EraTheme>("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const theme = eraThemeColors[currentEra];

    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--secondary", theme.secondary);
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty(
      "--background",
      theme.background
    );
    document.documentElement.style.setProperty("--text", theme.text);
    document.documentElement.style.setProperty("--body-font", theme.bodyFont);
    document.documentElement.style.setProperty(
      "--heading-font",
      theme.headingFont
    );

    document.documentElement.setAttribute("data-theme", currentEra);

    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
    document.body.style.fontFamily = theme.bodyFont;

    if (currentEra === "reputation" || currentEra === "midnights") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [currentEra, mounted]);

  return (
    <ThemeContext.Provider value={{ currentEra, setCurrentEra }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
