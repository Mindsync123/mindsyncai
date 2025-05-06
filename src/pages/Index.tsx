
import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import SliderSection from '@/components/home/SliderSection';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import CaseStudies from '@/components/home/CaseStudies';
import CTASection from '@/components/home/CTASection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.title = "Mindsync AI Consult | Intelligent Systems. Scalable Growth.";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <SliderSection />
        <Services />
        <CaseStudies />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
