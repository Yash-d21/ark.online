import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Store, Combine, ToyBrick, ShieldCheck, Sparkles, Building, Bot, Package, type LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  { title: "Hyperlocal, Same-Day Delivery", icon: Truck },
  { title: "Combined B2B + B2C Model", icon: Combine },
  { title: "Retailer Empowerment", icon: Store },
  { title: "Direct-from-Manufacturer", icon: Building },
  { title: "Full-Stack Platform", icon: ToyBrick },
  { title: "Trust-Built Credit System", icon: ShieldCheck },
  { title: "Organizing the Unorganized", icon: Sparkles },
  { title: "AI-Powered Insights", icon: Bot },
  { title: "Wide Product Range", icon: Package },
];

export function UniqueFeatures() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Makes Us Unique
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our core strengths that drive value for our partners and customers.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center justify-center text-center gap-4">
                <div className="rounded-full bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-base font-semibold">{feature.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
