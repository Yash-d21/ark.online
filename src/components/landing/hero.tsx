import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen isolate bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/images/hardware.jpg"
          alt="Hardware tools and equipment background"
          fill
          className="object-cover opacity-100 scale-75 translate-y-100"
          data-ai-hint="hardware tools and equipment"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Text content - always first on mobile */}
          <div className="text-center lg:text-left space-y-4 order-1 lg:order-1 lg:mt-16">
            <div className="space-y-3">
              <h1 className="font-headline text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Organizing India&apos;s most fragmented hardware and building materials supply chain
              </h1>
              <p className="text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connecting retailers, suppliers, and customers through innovative technology. 
                Transform chaos into clarity with ARK's comprehensive platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Button size="lg" className="bg-blue-600/90 hover:bg-blue-700 text-white shadow-2xl hover:shadow-blue-500/50 backdrop-blur-md border border-blue-400/50 transition-all duration-300 font-bold text-base hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]" asChild>
                <Link href="#how-it-works" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 hover:text-white backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm" asChild>
                <Link href="#mission" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Learn More
                </Link>
              </Button>
            </div>
            
          </div>
          
          {/* Images - diagonal triangle layout */}
          <div className="order-2 lg:order-2 mt-8 lg:mt-12 mb-12 lg:mb-6">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto lg:mr-16">
              <div className="grid grid-cols-2 gap-2 lg:gap-3">
                
                {/* Left column - two vertically stacked images */}
                <div className="flex flex-col gap-2 lg:gap-3">
                  {/* Top image */}
                  <div className="relative w-36 h-36 lg:w-44 lg:h-44">
                    <div className="relative h-full rounded-xl overflow-hidden shadow-lg group transform transition-transform duration-300 hover:scale-[1.02]">
                      <Image
                        src="/images/3.png"
                        alt="Modern hardware store with digital inventory management"
                        fill
                        sizes="(max-width: 768px) 144px, 176px"
                        className="object-cover object-center bg-slate-800/50"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Bottom image */}
                  <div className="relative w-36 h-36 lg:w-44 lg:h-44">
                    <div className="relative h-full rounded-xl overflow-hidden shadow-lg group transform transition-transform duration-300 hover:scale-[1.02]">
                      <Image
                        src="/images/2.jpg"
                        alt="Business analytics dashboard showing supply chain data"
                        fill
                        sizes="(max-width: 768px) 144px, 176px"
                        className="object-cover object-center bg-slate-800/50"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - single centered image */}
                <div className="relative w-44 h-48 lg:w-52 lg:h-60 mt-6">
                  <div className="relative h-full rounded-xl overflow-hidden shadow-lg group transform transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src="/images/1.jpg"
                      alt="Construction materials and hardware delivery truck"
                      fill
                      sizes="(max-width: 768px) 176px, 208px"
                      className="object-cover object-center bg-slate-800/50"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width Glassmorphism Banner - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full px-4 pb-6 z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl py-3 px-6 shadow-2xl">
          <div className="flex items-center justify-center space-x-4">
            <div className="text-white text-2xl font-bold uppercase tracking-wide">INCUBATED WITH</div>
            <div className="flex items-center">
              <Image
                src="/images/t-hub-logo-1-1.png"
                alt="T-Hub Logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
