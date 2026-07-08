import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oguzdere.vercel.app"),
  title: "Oguz Kaan Dere — AI-native Full-Stack Developer",
  description:
    "Portfolio of Oğuz Kaan Dere, a full-stack developer with biomedical engineering background building AI-assisted, local-first web products, RAG tools, OCR workflows and practical decision-support apps.",
  authors: [{ name: "Oguz Kaan Dere" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oguz Kaan Dere — AI-native Full-Stack Developer",
    description:
      "AI-assisted product projects, full-stack software experience, document workflows, RAG tools, OCR workflows and practical decision-support apps.",
    url: "https://oguzdere.vercel.app/",
    siteName: "Oguz Kaan Dere Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oguz Kaan Dere — AI-native Full-Stack Developer",
    description:
      "Portfolio of Oğuz Kaan Dere, a full-stack developer building AI-assisted, local-first web products.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
