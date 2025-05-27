"use client";

import { ThemeProvider } from "@/context/themeContext";
import BooksProvider from "./bookContext";
import { Provider } from "react-redux";
import { makeStore } from "@/redux/store";

interface Props {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
  return (
    <ThemeProvider>
      <Provider store={makeStore()}>
        <BooksProvider>{children}</BooksProvider>
      </Provider>
    </ThemeProvider>
  );
}
