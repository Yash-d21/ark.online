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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2">
              <span className="font-headline text-2xl font-bold tracking-tighter text-foreground">
                ARK
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                <span>|</span>
                <Image src="https://i.ibb.co/3fd2y38/T-Hub-Logo-PNG.png" alt="T-Hub Logo" width={40} height={40} className="object-contain" />
                <span>Incubated with T-Hub</span>
            </div>
        </div>


        <nav className="hidden md:flex md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="https://forms.gle/BW2q6X93evCi51Ga9" target="_blank" rel="noopener noreferrer">Get Started</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b pb-4">
                 <Link href="#" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <span className="font-headline text-2xl font-bold tracking-tighter text-foreground">ARK</span>
                </Link>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close Menu</span>
                    </Button>
                </SheetTrigger>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 px-2">
                <Image src="https://i.ibb.co/3fd2y38/T-Hub-Logo-PNG.png" alt="T-Hub Logo" width={30} height={30} className="object-contain" />
                <span>Incubated with T-Hub</span>
              </div>
              <nav className="flex flex-1 flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2">
                <Button size="lg" asChild onClick={() => setIsOpen(false)}>
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
