import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const customerSteps = [
  {
    step: 1,
    title: "Customer Places Order",
    description: "A customer places an order for a product via the ARK B2C app.",
    image: PlaceHolderImages.find(p => p.id === 'customer-order'),
  },
  {
    step: 2,
    title: "Order Redirected",
    description: "This order is redirected to the nearest retail store partnered with ARK at 0% commission.",
    image: PlaceHolderImages.find(p => p.id === 'order-redirect'),
  },
  {
    step: 3,
    title: "Order Delivered",
    description: "The order is then picked up by ARK and delivered to the customer.",
    image: PlaceHolderImages.find(p => p.id === 'order-delivery'),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How ARK Works?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Seamless operations for both customers and retailers.
          </p>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="customers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:mx-auto md:w-1/2">
              <TabsTrigger value="customers">For Customers (B2C)</TabsTrigger>
              <TabsTrigger value="retailers">For Retailers (B2B)</TabsTrigger>
            </TabsList>
            <TabsContent value="customers">
              <div className="mt-10 grid gap-8 md:grid-cols-1 lg:gap-12">
                {customerSteps.map((step) => (
                  <Card key={step.step} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                    <div className="grid md:grid-cols-2">
                      <div className="flex flex-col justify-center p-6 md:p-8">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">{step.step}</div>
                             <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            {step.description}
                          </CardDescription>
                        </CardContent>
                      </div>
                      {step.image && (
                        <div className="relative h-64 md:h-full">
                          <Image
                            src={step.image.imageUrl}
                            alt={step.description}
                            fill
                            className="object-cover"
                            data-ai-hint={step.image.imageHint}
                          />
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="retailers">
                <Card className="mt-10 text-center shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Coming Soon!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Detailed workflow for our retail partners will be available shortly. Stay tuned!</p>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
