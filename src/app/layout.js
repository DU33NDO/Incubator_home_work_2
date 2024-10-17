"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import WebApp from '@twa-dev/sdk'
import React, { useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") { 
      WebApp.ready(); 
    }
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
