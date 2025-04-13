"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "../context/ThemeContext";

export default function ThemeWrapper({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
