import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProductsSection from "../components/ProductsSection";
import SpecialtySection from "../components/SpecialtySection";
import TestimonialsSection from "../components/TestimonialsSection";
import TrainingSection from "../components/TrainingSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white relative font-sans overflow-x-hidden pt-4 px-4 pb-20">
      <main className="relative z-10 w-full max-w-7xl mx-auto">
        <Navbar />
        <div className="relative w-full">
          <HeroSection />
          <SpecialtySection />
        </div>

        <ProductsSection />
        <TrainingSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default LandingPage;
