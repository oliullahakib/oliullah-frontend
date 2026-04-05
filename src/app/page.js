import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Motivation from '@/components/Motivation';
import NoWorries from '@/components/NoWorries';
import Blueprint from '@/components/Blueprint';
import Curriculum from '@/components/Curriculum';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

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
      <Pricing />
      <Footer />
    </main>
  );
}
