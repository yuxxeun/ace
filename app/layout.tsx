import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/core/SmoothScrolling";
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <SmoothScrolling> 
          <body className={`${GeistSans.className} min-h-screen`}>
            {children}
          </body>
        </SmoothScrolling>
      </html>
    </>
  );
}
