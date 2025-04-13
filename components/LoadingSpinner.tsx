"use client";
import { useTheme } from "../context/ThemeContext";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
}

export default function LoadingSpinner({ size = "md" }: Readonly<LoadingSpinnerProps>) {
  const { currentEra } = useTheme();

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-20 h-20",
  };

  const getThemeStyles = () => {
    return {
      color: "var(--primary)",
      borderColor: "var(--secondary)",
    };
  };

  // Different spinner types based on era
  const renderSpinner = () => {
    const styles = getThemeStyles();

    switch (currentEra) {
      case "reputation":
        // Snake spinner for Reputation era
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <div className="absolute inset-0 animate-spin">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50,10 C60,10 70,20 75,30 C80,40 80,50 75,60 C70,70 60,80 50,80 C40,80 30,70 25,60 C20,50 20,40 25,30 C30,20 40,10 50,10 Z"
                  fill="none"
                  stroke={styles.color}
                  strokeWidth="6"
                />
                <circle cx="70" cy="30" r="3" fill={styles.color} />
              </svg>
            </div>
          </div>
        );

      case "red":
        // Scarf spinner for Red era
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <div className="animate-spin">
              <div
                className="w-full h-full border-4 border-t-transparent rounded-full"
                style={{
                  borderColor: styles.borderColor,
                  borderTopColor: "transparent",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-1/2 h-1 rounded"
                  style={{ backgroundColor: styles.color }}
                />
              </div>
            </div>
          </div>
        );

      case "midnights":
        // Clock spinner for Midnights era
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <div
              className="w-full h-full rounded-full border-4 flex items-center justify-center"
              style={{ borderColor: styles.borderColor }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-1/2 h-1 origin-left animate-spin"
                  style={{ backgroundColor: styles.color }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-1/3 h-1 origin-left animate-spin"
                  style={{
                    backgroundColor: styles.color,
                    animationDuration: "6s",
                  }}
                />
              </div>
            </div>
          </div>
        );

      default:
        // Default record spinner
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <div className="absolute inset-0 animate-spin">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke={styles.borderColor}
                  strokeWidth="8"
                />
                <circle cx="50" cy="50" r="20" fill={styles.color} />
                <circle cx="50" cy="50" r="5" fill="#fff" />
                <rect x="48" y="5" width="4" height="15" fill={styles.color} />
              </svg>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex items-center justify-center">{renderSpinner()}</div>
  );
}
