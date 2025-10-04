import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { HowItWorks } from "@/components/landing/how-it-works";
import { WhyArk } from "@/components/landing/why-ark";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { UniqueFeatures } from "@/components/landing/unique-features";
import { CtaSection } from "@/components/landing/cta-section";
import { MissionVision } from "@/components/landing/mission-vision";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <HowItWorks />
        <WhyArk />
        <ProblemSolution />
        <UniqueFeatures />
        <CtaSection />
        <MissionVision />
      </main>
      <Footer />
    </div>
  );
}
