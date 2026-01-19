import type { Metadata } from "next";
import Hero from '@/components/sections/Hero';
import SpecialFeatures from '@/components/sections/SpecialFeatures';
import AboutUs from '@/components/sections/AboutUs';
import SubjectsSection from '@/components/sections/SubjectsSection';
import QualitiesSection from '@/components/sections/QualitiesSection';
import ContactUs from '@/components/sections/ContactUs';
import FeesSection from '@/components/sections/FeesSection';

// Page-specific metadata for the homepage
export const metadata: Metadata = {
  title: "Chigomezyo Private Primary School | Karonga, Malawi",
  description:
    "Good Foundation For Your Child Starts Here. Discover quality primary education in a safe, caring environment at Chigomezyo Private Primary School. Admissions open now – register today!",
  keywords:
    "Chigomezyo Primary School, private primary school Karonga, Malawi primary education, school admissions Malawi, quality education Malawi, best primary school Karonga",
  openGraph: {
    title: "Chigomezyo Private Primary School | Karonga, Malawi",
    description:
      "Good Foundation For Your Child Starts Here. Quality primary education in a safe environment. Register now!",
    url: "https://chigomezyo-school-site.netlify.app",
    siteName: "Chigomezyo PVT Primary School",
    images: [
      {
        url: "/logo.png", // Using your logo as social preview
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
    images: ["/logo.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <SpecialFeatures />
      <AboutUs />
      <SubjectsSection />
      <FeesSection />
    </main>
  );
}