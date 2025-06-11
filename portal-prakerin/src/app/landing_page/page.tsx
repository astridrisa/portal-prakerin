import Navbar from './navbar';
import HeroSection from './heroSection';
import Features from './features';
import Cta from './cta';
import Faq from './faq';
import Footer from './footer';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
