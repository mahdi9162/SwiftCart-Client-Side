import Categories from '@/components/home/Categories';
import FAQ from '@/components/home/FAQ';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import Trending from '@/components/home/Trending';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import AboutUs from '@/components/home/AboutUs';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <Trending />
        <Features />
        <AboutUs />
        <FAQ />
      </main>
    </>
  );
}
