import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative w-full isolate bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/images/hero.png"
          alt="Futuristic circuit board background"
          fill
          className="object-cover opacity-15"
          data-ai-hint="futuristic technology"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto max-w-7xl px-4 py-2 md:py-4 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Organizing India&apos;s most fragmented hardware and building materials supply chain
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect retailers, suppliers, and customers through innovative technology. 
                Transform chaos into clarity with ARK's comprehensive platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-blue-600/80 hover:bg-blue-700/90 text-white shadow-2xl hover:shadow-3xl backdrop-blur-md border border-blue-500/30 transition-all duration-300" asChild>
                <Link href="#how-it-works" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/40 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300" asChild>
                <Link href="#mission" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right side - Enhanced Images */}
          <div className="space-y-8">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 h-[350px]">
                {/* Top-left image */}
                <div className="relative rounded-xl overflow-hidden shadow-xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center"
                    alt="Modern hardware store with digital inventory management"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-sm font-semibold">Smart Inventory</div>
                    <div className="text-xs opacity-90">Digital Management</div>
                  </div>
                </div>
                
                {/* Top-right image */}
                <div className="relative rounded-xl overflow-hidden shadow-xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
                    alt="Business analytics dashboard showing supply chain data"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-sm font-semibold">Smart Analytics</div>
                    <div className="text-xs opacity-90">Data-Driven Insights</div>
                  </div>
                </div>
                
                {/* Bottom images spanning full width */}
                <div className="relative rounded-xl overflow-hidden shadow-xl group col-span-2">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=200&fit=crop&crop=center"
                    alt="Construction materials and hardware delivery truck"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-sm font-semibold">Fast Delivery</div>
                    <div className="text-xs opacity-90">Same Day Service</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-lg rounded-xl p-4 border border-white/30 shadow-2xl">
                <div className="text-white text-sm font-semibold">Real-time Tracking</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-lg rounded-xl p-4 border border-white/30 shadow-2xl">
                <div className="text-white text-sm font-semibold">24/7 Support</div>
              </div>
            </div>
            
            {/* T-Hub Incubation Banner - Marquee style banner showing T-Hub partnership */}
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <span className="text-white/80 text-base font-medium">Incubated by</span>
                  <Image 
                    src="/images/t-hub-logo-1-1.png" 
                    alt="T-Hub Logo" 
                    width={100} 
                    height={30}
                    className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
