import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinecone Legal semantic search sample app",
  description: "A sample app demonstrating how to use Pinecone and Langchain to build a knowledge base of landmark legal cases and run semantic search over them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="w-full text-center py-1 text-base text-gray-400 mt-0 bg-gray-900 border-0">
          Copyright © 2025 Onkar.der. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
