import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative w-full isolate bg-slate-900">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/images/hero.png"
          alt="Futuristic circuit board background"
          fill
          className="object-cover opacity-20"
          data-ai-hint="futuristic technology"
        />
      </div>
      <div className="container mx-auto max-w-7xl px-4 py-6 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Organizing India&apos;s most fragmented hardware and building materials supply chain
            </h1>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Button size="lg" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Right side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-96">
              {/* Top-left image */}
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/hardware-store/300/200"
                  alt="Hardware store worker with smartphone"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Bottom-left image */}
              <div className="relative rounded-lg overflow-hidden mt-16">
                <Image
                  src="https://picsum.photos/seed/construction-materials/300/200"
                  alt="Construction materials delivery"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Right side larger image */}
              <div className="relative rounded-lg overflow-hidden col-span-1 row-span-2">
                <Image
                  src="https://picsum.photos/seed/analytics-office/400/400"
                  alt="Analytics and planning office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
