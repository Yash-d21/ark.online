"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#why-ark", label: "Why ARK" },
  { href: "#mission", label: "Mission" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-[9999] w-full border-b border-gray-700 backdrop-blur-lg shadow-2xl transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-800/70 border-gray-600/50' 
        : 'bg-gray-800/95 border-gray-700'
    }`}>
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 group">
              <span className="font-headline text-2xl font-bold tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-300">
                ARK
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-2 text-sm text-white">
                <span className="text-white">|</span>
                <Image src="/images/t-hub-logo-1-1.png" alt="T-Hub Logo" width={40} height={40} className="object-contain" />
                <span className="text-white">Incubated with T-Hub</span>
            </div>
        </div>

        <nav className="hidden md:flex md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white transition-colors hover:text-blue-400 hover:scale-105 duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild className="bg-blue-600/80 hover:bg-blue-700/90 text-white shadow-2xl hover:shadow-3xl backdrop-blur-md border border-blue-500/30 transition-all duration-300">
            <Link href="https://forms.gle/BW2q6X93evCi51Ga9" target="_blank" rel="noopener noreferrer">Get Started</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <Menu className="h-5 w-5 text-white" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className={`w-[300px] sm:w-[400px] backdrop-blur-lg border-l transition-all duration-300 ${
            isScrolled 
              ? 'bg-gray-800/70 border-gray-600/50' 
              : 'bg-gray-800/95 border-gray-700'
          }`}>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                 <Link href="#" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <span className="font-headline text-2xl font-bold tracking-tighter text-white">ARK</span>
                </Link>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-800 text-white">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close Menu</span>
                    </Button>
                </SheetTrigger>
              </div>
              <div className="flex items-center gap-2 text-sm text-white mt-4 px-2">
                <Image src="/images/t-hub-logo-1-1.png" alt="T-Hub Logo" width={32} height={32} className="object-contain" />
                <span className="text-white">Incubated with T-Hub</span>
              </div>
              <nav className="flex flex-1 flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-white transition-colors hover:text-blue-400 hover:translate-x-2 duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2">
                <Button size="lg" className="bg-blue-600/80 hover:bg-blue-700/90 text-white shadow-2xl hover:shadow-3xl backdrop-blur-md border border-blue-500/30 transition-all duration-300" asChild onClick={() => setIsOpen(false)}>
                  <Link href="https://forms.gle/BW2q6X93evCi51Ga9" target="_blank" rel="noopener noreferrer">Get Started</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
