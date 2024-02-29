import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Table materials Squadfy',
  description: 'Squadfy technical test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
