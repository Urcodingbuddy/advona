import type { Metadata } from "next";
import {Montserrat, Jost} from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
})

const jost = Jost({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Advona.co",
  description: "amplifying brands, digitally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
