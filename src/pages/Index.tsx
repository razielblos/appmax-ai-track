import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
