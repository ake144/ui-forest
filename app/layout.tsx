import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import metatag from "./metatag";
import { ClerkProvider } from "@clerk/nextjs";
import Loglib from "@loglib/tracker/react";



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
  other: {
    'impact-site-verification': 'b52b9140-9d38-42fd-aa20-f136220e1d44',
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
      {/* <meta name="impact-site-verification" content="b52b9140-9d38-42fd-aa20-f136220e1d44" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
     </body>
    </html>
    </ClerkProvider>
  );
}
