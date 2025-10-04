import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "Lowest wholesale price for retailers",
  "Same day delivery of goods",
  "Increased sales via B2C orders",
  "0% Commission on B2B orders",
  "Seamless access to credit",
];

const ownerImage = PlaceHolderImages.find(p => p.id === 'indian-store-owner');

export function WhyArk() {
  return (
    <section id="why-ark" className="bg-card py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              You GROW, We GROW
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              &quot;The ultimate platform designed for your growth and convenience.&quot;
            </blockquote>
            <h3 className="font-headline text-2xl font-semibold">Why ARK?</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            {ownerImage && (
                <Card className="overflow-hidden rounded-xl shadow-2xl w-full max-w-sm">
                    <CardContent className="p-0">
                        <div className="relative aspect-[3/4]">
                            <Image
                                src={ownerImage.imageUrl}
                                alt={ownerImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={ownerImage.imageHint}
                            />
                        </div>
                    </CardContent>
                </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
