import Hero from '@/components/sections/Hero';
import SpecialFeatures from '@/components/sections/SpecialFeatures';
import AboutUs from '@/components/sections/AboutUs';
import SubjectsSection from '@/components/sections/SubjectsSection';
import QualitiesSection from '@/components/sections/QualitiesSection';
import ContactUs from '@/components/sections/ContactUs';
import FeesSection from '@/components/sections/FeesSection';


// Inside <main>...
<FeesSection />

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