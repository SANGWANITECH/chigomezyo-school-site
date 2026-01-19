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
    default: "Chigomezyo Private Primary School | Karonga, Malawi",
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
  openGraph: {
    title: "Chigomezyo Private Primary School | Karonga, Malawi",
    description:
      "Good Foundation For Your Child Starts Here. Register today at Chigomezyo Private Primary School.",
    url: "https://chigomezyo-school-site.netlify.app",
    siteName: "Chigomezyo PVT Primary School",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chigomezyo Private Primary School – Quality Education Starts Here",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chigomezyo Private Primary School",
    description:
      "Good Foundation For Your Child Starts Here. Register today!",
    images: ["/og-image.jpg"],
    creator: "@chigomezyo_school",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
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
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="msapplication-navbutton-color" content="#1e3a8a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="google-site-verification" content="JDYpMoLO5yg2S4SczEj6aSweHXIdpghLzjaHbWSrWTs" />
      </head>

      <body className={`${poppins.variable} font-poppins antialiased bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <ContactUs />
        <Footer />

        {/* Chatbase AI Chatbot Embed - Loads on every page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="EquVWYS8Najw0XA1Qmz15";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`,
          }}
        />
      </body>
    </html>
  );
}