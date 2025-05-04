import type { Metadata } from "next";
import "./globals.css";
import { marcellus } from "@/fonts/font";
import { ThemeToggle } from "@/components/ThemeToggle";
import CustomProvider from "@/context/provider";

export const metadata: Metadata = {
  title: "Shelfee",
  description: "A book shelf for your books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${marcellus.className} antialiased scrollbar`}
        suppressHydrationWarning
      >
        <CustomProvider>
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle/>
          </div>
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
