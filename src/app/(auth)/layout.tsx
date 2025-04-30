import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
}
