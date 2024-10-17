"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { WebApp } from '@twa-dev/sdk';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    WebApp.ready();
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
