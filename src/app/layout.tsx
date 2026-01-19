import type { Metadata } from "next";
import "./global.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactUs from "@/components/sections/ContactUs";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Chigomezezo PVT Primary School | Karonga, Malawi",
  description:
    "Good Foundation For Your Child Starts Here. Register today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* This makes the phone top bar (battery, time, Wi-Fi, etc.) dark blue */}
        <meta name="theme-color" content="#1e3a8a" />

        {/* Extra support for some older browsers / Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#1e3a8a" />

        {/* iOS Safari: Makes status bar text dark (works best with light bg) */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Header />
        <main>{children}</main>
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}