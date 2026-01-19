import type { Metadata } from "next";
import Hero from '@/app/academics/Hero';
import Subjects from '@/app/academics/Subjects';
import MSCEPerformance from '@/app/academics/MSCEPerformance';

// Page-specific metadata for Academics
export const metadata: Metadata = {
  title: "Academics | Chigomezyo Private Primary School",
  description:
    "Explore the academic programs at Chigomezyo Private Primary School in Karonga, Malawi. We offer a comprehensive curriculum focused on Primary Science and other core subjects in a supportive learning environment. Discover our strong MSCE performance and commitment to quality education.",
  keywords:
    "Chigomezyo academics, primary school curriculum Karonga, Primary Science Malawi, MSCE performance Chigomezyo, quality education Malawi, private primary academics Karonga",
  openGraph: {
    title: "Academics | Chigomezyo Private Primary School",
    description:
      "Comprehensive curriculum and strong academic performance at Chigomezyo Private Primary School. Focused on Primary Science and holistic learning in Karonga, Malawi.",
    url: "https://chigomezyo-school-site.netlify.app/academics",
    siteName: "Chigomezyo PVT Primary School",
    images: [
      {
        url: "/logo.png", // Using your logo for social previews
        width: 1200,
        height: 630,
        alt: "Chigomezyo Private Primary School – Strong Academics & MSCE Results",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academics | Chigomezyo Private Primary School",
    description:
      "Explore our curriculum, Primary Science focus, and excellent MSCE results at Chigomezyo Private Primary School.",
    images: ["/logo.png"],
  },
};

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Subjects />
      <MSCEPerformance />
    </main>
  );
}