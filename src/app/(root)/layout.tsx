import { AuthWrapper } from "@/components/AuthWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthWrapper>
        {children}
      </AuthWrapper>
    </>
  );
}

