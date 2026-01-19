import type { Metadata } from "next";
import Hero from '@/app/about/Hero';
import About from '@/app/about/About';
import Leader from '@/app/about/Leader';

// Page-specific metadata for About Us
export const metadata: Metadata = {
  title: "About Us | Chigomezyo Private Primary School",
  description:
    "Learn about Chigomezyo Private Primary School in Karonga, Malawi. We are a dedicated institution committed to providing quality primary education in a safe, caring, and supportive environment. Discover our leadership, vision, and what makes us unique.",
  keywords:
    "About Chigomezyo Primary School, Chigomezyo school Karonga, private primary school Malawi, school leadership Malawi, quality education Karonga, Chigomezyo mission",
  openGraph: {
    title: "About Chigomezyo Private Primary School | Karonga, Malawi",
    description:
      "Discover Chigomezyo Private Primary School – committed to quality primary education in a safe environment. Learn about our leadership and vision.",
    url: "https://chigomezyo-school-site.netlify.app/about",
    siteName: "Chigomezyo PVT Primary School",
    images: [
      {
        url: "/logo.png", // Using your logo for social previews
        width: 1200,
        height: 630,
        alt: "Chigomezyo Private Primary School – Quality Education in Karonga",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Chigomezyo Private Primary School",
    description:
      "Committed to quality primary education in a safe environment in Karonga, Malawi.",
    images: ["/logo.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Leader />
      <About />
      {/* Add other sections later, e.g. mission, history, etc. */}
    </main>
  );
}