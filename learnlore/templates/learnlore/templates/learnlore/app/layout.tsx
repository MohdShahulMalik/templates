import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LearnLore — AI Learning Workspace',
  description: 'Generate stories and memory hooks from any concept',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
