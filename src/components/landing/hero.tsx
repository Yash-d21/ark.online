import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Organizing India&apos;s most fragmented hardware and building materials supply chain
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="https://forms.gle/BW2q6X93evCi51Ga9" target="_blank" rel="noopener noreferrer">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
