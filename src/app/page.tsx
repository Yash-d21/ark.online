import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { InfoSection } from "@/components/landing/info-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { WhyArk } from "@/components/landing/why-ark";
import { CtaSection } from "@/components/landing/cta-section";
import { MissionVision } from "@/components/landing/mission-vision";
import FlowingMenuDemo from "@/components/landing/FlowingMenuDemo";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div style={{ height: '80px', position: 'relative', backgroundColor: '#060010', paddingTop: '10px' }}>
          <FlowingMenuDemo />
        </div>
        
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={0.6}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <InfoSection />
        </AnimatedContent>
        
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={0.6}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <HowItWorks />
        </AnimatedContent>
        
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={0.6}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <WhyArk />
        </AnimatedContent>
        
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={0.6}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <CtaSection />
        </AnimatedContent>
        
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={0.6}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <MissionVision />
        </AnimatedContent>
      </main>
      <Footer />
    </div>
  );
}
