import type { Metadata } from 'next';
import './globals.css';
import Header from '@/src/components/Layout/Header';

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
      <body>
        <div className="h-screen flex flex-col justify-between">
          <div className="flex flex-col gap-10 py-10 px-12">
            <Header />
            {children}
          </div>
          <footer className="w-full flex items-center justify-center py-4 bg-moss-200">Squadfy © 2024</footer>
        </div>
      </body>
    </html>
  );
}
