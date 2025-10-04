import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const retailerBenefits = [
  "Lowest wholesale price",
  "Same day delivery",
  "Increased sale via online orders",
  "0% commission on online orders",
  "Seamless credit access",
  "Wide product range",
];

const customerBenefits = [
  "Wide range of products and brands",
  "Lowest prices, highest quality!",
  "Super fast delivery!",
];

export function WhyArk() {
  return (
    <section id="why-ark" className="bg-card py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why ARK?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                The ultimate platform designed for your growth and convenience.
            </p>
        </div>
        <div className="mt-12">
            <Tabs defaultValue="retailers" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:mx-auto md:w-1/2">
                    <TabsTrigger value="retailers">For Retailers (B2B)</TabsTrigger>
                    <TabsTrigger value="customers">For Customers (B2C)</TabsTrigger>
                </TabsList>
                <TabsContent value="retailers">
                    <Card className="mt-10 shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-center">Benefits for Retailers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {retailerBenefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span className="text-base text-foreground">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="customers">
                    <Card className="mt-10 shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-center">Benefits for Customers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {customerBenefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span className="text-base text-foreground">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
      </div>
    </section>
  );
}
