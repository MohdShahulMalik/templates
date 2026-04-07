import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnLore Quiz Designs",
  description: "8 distinct quiz page designs for LearnLore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, minHeight: '100vh' }}>{children}</body>
    </html>
  );
}
