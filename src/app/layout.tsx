import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Oguz Portfolio",
    description:
        "Oguz Kaan Dere is a Full Stack Developer specializing in modern web technologies. Explore his projects and get in touch!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>{String(metadata.title)}</title>
            <meta name="description" content={String(metadata.description)}/>
            <link rel="icon" href="/favicon.png" sizes="any"/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
