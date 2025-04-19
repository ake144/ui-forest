import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import metatag from "./metatag";
import { ClerkProvider } from "@clerk/nextjs";
import Loglib from "@loglib/tracker/react";
import AdSense from "@/components/AdSense";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const { title, desc, ogImage } = metatag;

export const metadata = {
  metadataBase: new URL("https://ui-forest1.vercel.app/"),
  title ,
  description: desc,
  openGraph: {
    title,
    description: desc,
    images: [
      {
        url: ogImage,
      },
    ],
    url: "https://uiforest.dev",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: desc,
    images: [ogImage],
    creator: "@uiforest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
           <AdSense pId="6502159796783362"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         
        {children}
        <Loglib
                config={{
                    id: "ui-forest_vercel",
                }}
            />
      </body>
    </html>
    </ClerkProvider>
  );
}
