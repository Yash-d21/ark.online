import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const b2bSteps = [
  {
    step: 1,
    title: "Sign Up & Order",
    description: "Retailers sign up via the ARK B2B app and place bulk orders for their products at the lowest price.",
    image: PlaceHolderImages.find(p => p.id === 'retailer-onboarding'),
  },
  {
    step: 2,
    title: "Same-Day Delivery",
    description: "ARK delivers the goods to your store on the same day, ensuring you're always stocked.",
    image: PlaceHolderImages.find(p => p.id === 'order-delivery'),
  },
  {
    step: 3,
    title: "Fulfill Customer Orders",
    description: "Receive B2C orders from the ARK app at 0% commission and increase your sales.",
    image: PlaceHolderImages.find(p => p.id === 'order-fulfillment'),
  },
];

const b2cSteps = [
  {
    step: 1,
    title: "Place an Order",
    description: "Customers place an order for any hardware or building material product via the ARK B2C app.",
    image: PlaceHolderImages.find(p => p.id === 'customer-order'),
  },
  {
    step: 2,
    title: "Order Redirected",
    description: "The order is automatically redirected to the nearest retail store partnered with ARK.",
    image: PlaceHolderImages.find(p => p.id === 'product-catalog'),
  },
  {
    step: 3,
    title: "Instant Delivery",
    description: "The order is then picked up by ARK's delivery network and delivered to the customer almost instantly.",
    image: PlaceHolderImages.find(p => p.id === 'order-delivery'),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">You GROW, We GROW</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How ARK Works?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Seamless operations for both customers and retailers.
          </p>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="retailers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:mx-auto md:w-1/2">
              <TabsTrigger value="retailers">For Retailers (B2B)</TabsTrigger>
              <TabsTrigger value="customers">For Customers (B2C)</TabsTrigger>
            </TabsList>
            <TabsContent value="retailers">
              <div className="mt-10 grid gap-8 md:grid-cols-3 lg:gap-12">
                {b2bSteps.map((step, index) => (
                  <Card key={step.step} className="flex flex-col overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                    <div className="flex flex-col flex-1">
                      <div className="flex-1 p-6 md:p-8">
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
                        <div className="relative h-64 mt-auto">
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
            <TabsContent value="customers">
            <div className="mt-10 grid gap-8 md:grid-cols-3 lg:gap-12">
                {b2cSteps.map((step, index) => (
                  <Card key={step.step} className="flex flex-col overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                    <div className="flex flex-col flex-1">
                      <div className="flex-1 p-6 md:p-8">
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
                        <div className="relative h-64 mt-auto">
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
          </Tabs>
        </div>
      </div>
    </section>
  );
}
