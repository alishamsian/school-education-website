import MainLayout from "../components/templates/MainLayout/MainLayout";
import HeroSection from "../components/organisms/HeroSection/HeroSection";
import BenefitsSection from "../components/organisms/BenefitsSection/BenefitsSection";
import TestimonialsSection from "../components/organisms/TestimonialsSection/TestimonialsSection";
import NavigateSection from "../components/organisms/NavigateSection/NavigateSection";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <NavigateSection />
    </MainLayout>
  );
};

export default Home;