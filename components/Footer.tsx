"use client";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { currentEra } = useTheme();

  return (
    <footer
      className="py-8 border-t"
      style={{
        backgroundColor: "var(--accent)",
        borderColor: "var(--primary)",
      }}
    >
      <div className="container-swift">
        <div className="text-center">
          <p style={{ color: "var(--primary)" }}>
            HTayTayP: HTTP Codes Explained with Taylor Swift Gifs
          </p>
          <p className="text-sm mt-2" style={{ color: "var(--text)" }}>
            © {new Date().getFullYear()} - Made with 💗 by{" "}
            <a
              href="http://hrshvrdhn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="italic font-medium"
            >
              Harshvardhan
            </a>{" "}
            for Swifties who code
          </p>
          <p
            className="text-xs mt-1 italic"
            style={{ color: "var(--text)", opacity: 0.7 }}
          >
            Currently in{" "}
            {currentEra === "default"
              ? "Eras Tour"
              : currentEra.charAt(0).toUpperCase() + currentEra.slice(1)}{" "}
            Era
          </p>
          <p className="text-xs mt-2">
            Inspired by{" "}
            <a
              href="https://http.cat"
              target="_blank"
              rel="noopener noreferrer"
              className="underline italic"
            >
              http.cat
            </a>
            🐱
          </p>
        </div>
      </div>
    </footer>
  );
}
