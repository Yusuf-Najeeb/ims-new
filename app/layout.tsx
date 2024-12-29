import type { Metadata } from "next";
import { Raleway, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/header/navbar";
import Footer from "@/components/footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMS Electrical Services",
  description: "IMS Electrical Services Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${robotoMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
