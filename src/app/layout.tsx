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
  title: {
    default: "Chigomezezo Private Primary School | Karonga, Malawi",
    template: "%s | Chigomezyo Private Primary School",
  },
  description:
    "Good Foundation For Your Child Starts Here. Chigomezyo Private Primary School offers quality primary education in a safe, caring, and supportive environment in Karonga, Malawi. Register today!",
  keywords:
    "Chigomezyo Primary School, private primary school Karonga, Malawi primary education, school admissions Malawi, quality education Malawi, primary school Malawi",
  authors: [{ name: "Chigomezyo PVT Primary School" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Open Graph (Facebook, WhatsApp, LinkedIn sharing) - using logo.png
  openGraph: {
    title: "Chigomezyo Private Primary School | Karonga, Malawi",
    description:
      "Good Foundation For Your Child Starts Here. Register today at Chigomezyo Private Primary School.",
    url: "https://chigomezyo-school-site.netlify.app", // Update to custom domain later
    siteName: "Chigomezyo PVT Primary School",
    images: [
      {
        url: "/logo.png", // Using your existing logo.png
        width: 1200,      // Recommended social size (resize if needed)
        height: 630,
        alt: "Chigomezyo Private Primary School Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter/X cards - same logo.png
  twitter: {
    card: "summary_large_image",
    title: "Chigomezyo Private Primary School",
    description:
      "Good Foundation For Your Child Starts Here. Register today!",
    images: ["/logo.png"],
    creator: "@chigomezyo_school", // Optional: your Twitter/X handle
  },
  // Theme color for mobile status bar (your blue-900)
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
  // Viewport for mobile
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Favicon - using your logo.png directly */}
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* Apple touch icon - using logo.png for iOS home screen */}
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />

        {/* Theme color meta (blue-900) */}
        <meta name="theme-color" content="#1e3a8a" />

        {/* Extra support for older Android/Windows */}
        <meta name="msapplication-navbutton-color" content="#1e3a8a" />

        {/* iOS Safari status bar */}
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>

      <body className={`${poppins.variable} font-poppins antialiased bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}