import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProviders';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { AuthContextProvider } from './(app)/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning className='dark antialiased'>
      <head />
      <body className={cn(' min-h-screen text-[#292929]', inter.className)}>
        <ThemeProvider attribute='class'>
          <header className='p-4'>
            <Header />
          </header>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
