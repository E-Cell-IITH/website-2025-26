import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "../components/homeComponents/FooterSection";
import Caution from "../components/homeComponents/Caution";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E Cell IIT Hyderabad",
  description: "Official website of E Cell IIT Hyderabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Caution />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
