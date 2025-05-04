"use client";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/context/themeContext";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [position, setPosition] = useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md cursor-pointer" asChild>
        <div className="relative flex items-center justify-center text-brand-green dark:text-brand-cream size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all focus:outline-none dark:-rotate-90 dark:scale-0 text-gray-7" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all focus:outline-none dark:rotate-0 dark:scale-100 text-brand-cream" />
          <span className="sr-only">Toggle theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-brand-light-green dark:border-brand-light-green/10 bg-brand-light-green/5 text-brand-green dark:text-brand-cream">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="light" key="light" onClick={() => setTheme("light")}>Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark" key="dark" onClick={() => setTheme("dark")}>Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system" key="system" onClick={() => setTheme("system")}>System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
