import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { InfoSection } from "@/components/landing/info-section";
import { WhyArk } from "@/components/landing/why-ark";
import { CtaSection } from "@/components/landing/cta-section";
import { MissionVision } from "@/components/landing/mission-vision";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <InfoSection />
        <WhyArk />
        <CtaSection />
        <MissionVision />
      </main>
      <Footer />
    </div>
  );
}
