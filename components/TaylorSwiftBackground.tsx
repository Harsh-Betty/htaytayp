"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Add the 'use client' directive to ensure this only runs on the client side
export const TaylorSwiftBackground = React.memo(
  ({ className }: { className?: string }) => {
    // Taylor Swift symbols
    const symbols = [
      "♫",
      "♪",
      "★",
      "☆",
      "13",
      "♡",
      "♥",
      "🦋",
      "✨",
      "🎸",
      "🎤",
      "🎵",
      "🎶",
      "💫",
      "🧣",
      "🐍",
      "🌟",
      "💎",
    ];

    // Use state to store the generated symbol data
    const [symbolData, setSymbolData] = useState<
      Array<{
        symbol: string;
        x: number;
        y: number;
        size: number;
        delay: number;
        duration: number;
        index: number;
      }>
    >([]);

    // Generate the symbol data on client-side only when component mounts
    useEffect(() => {
      const newSymbolData = Array.from({ length: 80 }).map((_, index) => {
        const seedValue = index / 80; // Deterministic seed based on index

        // Create pseudo-random values based on index
        const symbolIndex = index % symbols.length;
        const x = (seedValue * 800 + index * 10) % 800;
        const y = (seedValue * 600 + index * 7) % 600;
        const size = ((seedValue * 20 + 10) % 20) + 10;
        const delay = (seedValue * 5) % 5;
        const duration = ((seedValue * 15 + 10) % 15) + 10;

        return {
          symbol: symbols[symbolIndex],
          x,
          y,
          size,
          delay,
          duration,
          index,
        };
      });

      setSymbolData(newSymbolData);
    }, []);

    return (
      <div
        className={cn(
          "absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden",
          className
        )}
      >
        {symbolData.length > 0 && (
          <svg
            className="pointer-events-none absolute -z-50 h-full w-full"
            width="100%"
            height="100%"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background gradient */}
            <defs>
              <radialGradient
                id="taylorGradient"
                cx="50%"
                cy="50%"
                r="70%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#f8c8dc" stopOpacity="0.3"></stop>
                <stop offset="70%" stopColor="#d4d4d4" stopOpacity="0.1"></stop>
                <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
              </radialGradient>
            </defs>

            {/* Background rect */}
            <rect
              x="0"
              y="0"
              width="800"
              height="600"
              fill="url(#taylorGradient)"
            />

            {/* Taylor Swift symbols */}
            {symbolData.map((item) => (
              <motion.text
                key={item.index}
                x={item.x}
                y={item.y}
                fontSize={item.size}
                fontFamily="Arial, sans-serif"
                fill={`url(#symbolGradient-${item.index})`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  y: [item.y, item.y - 100],
                  x: [item.x, item.x + ((item.index % 20) - 10)],
                }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut",
                }}
              >
                {item.symbol}
              </motion.text>
            ))}

            {/* Gradients for symbols */}
            <defs>
              {symbolData.map((item) => (
                <motion.linearGradient
                  id={`symbolGradient-${item.index}`}
                  key={`gradient-${item.index}`}
                  gradientUnits="userSpaceOnUse"
                  initial={{
                    x1: "0%",
                    x2: "100%",
                    y1: "0%",
                    y2: "100%",
                  }}
                  animate={{
                    x1: ["0%", "100%"],
                    x2: ["0%", "100%"],
                    y1: ["0%", "100%"],
                    y2: ["0%", "100%"],
                  }}
                  transition={{
                    duration: item.duration * 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                >
                  {/* Colors inspired by Taylor Swift album eras */}
                  <stop offset="0%" stopColor="#8B0000"></stop> {/* Red */}
                  <stop offset="25%" stopColor="#C154C1"></stop>{" "}
                  {/* Lover pink/purple */}
                  <stop offset="50%" stopColor="#FFD700"></stop>{" "}
                  {/* Fearless gold */}
                  <stop offset="75%" stopColor="#1DB954"></stop> {/* Green */}
                  <stop offset="100%" stopColor="#6A5ACD"></stop>{" "}
                  {/* Midnights purple */}
                </motion.linearGradient>
              ))}
            </defs>
          </svg>
        )}
      </div>
    );
  }
);

TaylorSwiftBackground.displayName = "TaylorSwiftBackground";
