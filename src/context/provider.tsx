"use client";

import { ThemeProvider } from "@/context/themeContext";
import BooksProvider from "./bookContext";

interface Props {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
  return (
    <ThemeProvider>
      <BooksProvider>{children}</BooksProvider>
    </ThemeProvider>
  );
}
