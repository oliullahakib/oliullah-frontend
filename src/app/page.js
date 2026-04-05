import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Motivation from '@/components/Motivation';
import NoWorries from '@/components/NoWorries';
import Blueprint from '@/components/Blueprint';
import Curriculum from '@/components/Curriculum';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 font-sans selection:bg-primary-500/30">
      <Navbar />
      <Banner />
      <Motivation />
      <NoWorries />
      <Blueprint />
      <Curriculum />
      <Testimonials />
      {/* Additional sections can be added here */}
      <section id="pricing" className="h-20"></section>
    </main>
  );
}
