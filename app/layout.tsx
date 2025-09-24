import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";
import SidebarNav from "./components/SidebarNav";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";


const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-dancing",
  display: "swap", // makes it more reliable
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // makes it more reliable
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Sphere",
  description: "Prime sphere real estate company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancing.variable}  ${poppins.variable} antialiased`}
      >
        <MobileNav />
        <SidebarNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

//https://sandiego.wpresidence.net/;
//https://napa.wpresidence.net/
