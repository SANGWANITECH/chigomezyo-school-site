import type { Metadata } from "next";
import AdmissionsForm from '@/app/admissions/AdmissionsForm';

// Page-specific metadata for Admissions
export const metadata: Metadata = {
  title: "Admissions | Chigomezyo Private Primary School",
  description:
    "Admissions are open at Chigomezyo Private Primary School in Karonga, Malawi. Apply now for quality primary education in a safe, supportive environment. Fill the form to register your child today!",
  keywords:
    "Chigomezyo admissions, school admissions Karonga, primary school registration Malawi, Chigomezyo Private Primary School apply, admissions open Malawi, register child school Karonga",
  openGraph: {
    title: "Admissions | Chigomezyo Private Primary School",
    description:
      "Join Chigomezyo Private Primary School – quality education starts here. Apply now and secure your child's future in a safe environment.",
    url: "https://chigomezyo-school-site.netlify.app/admissions",
    siteName: "Chigomezyo PVT Primary School",
    images: [
      {
        url: "/logo.png", // Using your logo for social previews
        width: 1200,
        height: 630,
        alt: "Chigomezyo Private Primary School Admissions – Register Today",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions | Chigomezyo Private Primary School",
    description:
      "Admissions open now – apply for quality primary education in Karonga, Malawi.",
    images: ["/logo.png"],
  },
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdmissionsForm />
    </main>
  );
}