import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FlowingMenu from "./FlowingMenu";

export function Hero() {
  return (
    <section id="home" className="relative w-full bg-card isolate">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="https://picsum.photos/seed/ark-hero/1920/1080"
          alt="Hardware supplies background"
          fill
          className="object-cover opacity-20"
          data-ai-hint="hardware supplies"
        />
      </div>
      <div className="container mx-auto max-w-7xl px-4 text-center py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Organizing India&apos;s most fragmented hardware and building materials supply chain
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[50px]">
          <FlowingMenu />
      </div>
    </section>
  );
}
