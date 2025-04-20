import type { Metadata } from "next";
import "./globals.css";
import { marcellus } from "@/fonts/font";

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
        {children}
      </body>
    </html>
  );
}
