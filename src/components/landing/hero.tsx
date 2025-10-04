import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            India&apos;s First Hardware Delivery Platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Organizing India&apos;s most fragmented hardware supply chain, one retailer at a time!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
