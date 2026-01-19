import Hero from '@/app/academics/Hero';
import Subjects from '@/app/academics/Subjects';

import MSCEPerformance from '@/app/academics/MSCEPerformance';

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero/>
      <Subjects/>
      <MSCEPerformance/>
      
     
    </main>
  );
}