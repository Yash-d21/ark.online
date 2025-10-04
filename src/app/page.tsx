import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { WhyArk } from "@/components/landing/why-ark";
import { CtaSection } from "@/components/landing/cta-section";
import { MissionVision } from "@/components/landing/mission-vision";
import FlowingMenu from "@/components/landing/FlowingMenu";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="relative bg-background" style={{ height: '150px', position: 'relative' }}>
          <FlowingMenu />
        </section>
        <HowItWorks />
        <WhyArk />
        <CtaSection />
        <MissionVision />
      </main>
      <Footer />
    </div>
  );
}
