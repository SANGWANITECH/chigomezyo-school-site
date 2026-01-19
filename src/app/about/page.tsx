import Hero from '@/app/about/Hero';
import About from '@/app/about/About';
import Leader from '@/app/about/Leader';


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero/>
      <Leader/>
      <About/>
      
      {/* Add other sections later, e.g. mission, history, etc. */}
    </main>
  );
}