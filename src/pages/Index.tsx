<<<<<<< HEAD
import { useEffect } from 'react';
=======
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Certifications from '@/components/Certifications';
<<<<<<< HEAD
import PersonalPhotos from '@/components/PersonalPhotos';
import Gallery from '@/components/Gallery';
import Sponsors from '@/components/Sponsors';
=======
import Sponsors from '@/components/Sponsors';
import Gallery from '@/components/Gallery';
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';
<<<<<<< HEAD
import ThemeToggle from '@/components/ThemeToggle';
=======
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Pricing />
        <Testimonials />
        <Certifications />
<<<<<<< HEAD
        <PersonalPhotos />
=======
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
        <Gallery />
        <Sponsors />
        <CTA />
        <Contact />
        <Footer />
        <LanguageToggle />
<<<<<<< HEAD
        <ThemeToggle />
=======
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
      </div>
    </LanguageProvider>
  );
};

export default Index;
