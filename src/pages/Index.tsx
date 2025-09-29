import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TutorialsSection from "@/components/sections/TutorialsSection";
import CompetitionsSection from "@/components/sections/CompetitionsSection";
import AIMLSection from "@/components/sections/AIMLSection";
import CommunitySection from "@/components/sections/CommunitySection";
import MemesSection from "@/components/sections/MemesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <TutorialsSection />
        <CompetitionsSection />
        <AIMLSection />
        <CommunitySection />
        <MemesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
