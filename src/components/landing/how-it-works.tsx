import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ShoppingCart, Truck, User, Store, PackageCheck, Layers, Smartphone, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const b2bSteps = [
    {
        title: "Retailer Onboards & Orders",
        description: "Retailers sign up via the ARK B2B app and place bulk orders for their products at the lowest price.",
        icon: <Store className="h-10 w-10 text-primary" />,
    },
    {
        title: "Same-Day Stock Delivery",
        description: "ARK delivers the goods to the retailer's store on the same day.",
        icon: <Truck className="h-10 w-10 text-primary" />,
    },
    {
        title: "Customer Places B2C Order",
        description: "A customer places an order for a product via the ARK B2C app.",
        icon: <ShoppingCart className="h-10 w-10 text-accent" />,
    },
    {
        title: "Order Redirected to Retailer",
        description: "The order is redirected to the nearest partner retail store at 0% commission.",
        icon: <User className="h-10 w-10 text-accent" />,
    },
    {
        title: "Final Delivery to Customer",
        description: "ARK picks up the order from the retailer and delivers it to the customer.",
        icon: <PackageCheck className="h-10 w-10 text-accent" />,
    },
];

const b2cSteps = [
    {
        title: "Wide Range of Products",
        description: "Browse through millions of hardware and building materials products.",
        icon: <Search className="h-10 w-10 text-primary" />,
    },
    {
        title: "Place Order",
        description: "Order from our app at the lowest price.",
        icon: <Smartphone className="h-10 w-10 text-primary" />,
    },
    {
        title: "Get it Delivered",
        description: "Have it delivered to you almost instantly without any hassle.",
        icon: <Truck className="h-10 w-10 text-primary" />,
    },
]

const Roadmap = ({ steps }: { steps: typeof b2bSteps }) => {
    return (
        <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 animate-pulse"></div>

            <div className="relative flex flex-col md:flex-row justify-between gap-10 md:gap-0">
                {steps.map((step, index) => (
                    <div key={index} className="flex md:flex-col items-center md:justify-center flex-1">
                        <div className="flex flex-col items-center z-10">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-card border-2 border-primary/50 shadow-lg">
                                {step.icon}
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="font-headline text-lg font-semibold text-foreground">{step.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground max-w-xs">{step.description}</p>
                            </div>
                        </div>
                        
                        {index < steps.length - 1 && (
                            <div className="flex-shrink-0 md:hidden my-4">
                                <ArrowDown className="h-8 w-8 text-primary/50" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}


export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        How ARK Works
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">A seamless flow for retailers and customers.</p>
                </div>
                
                <Tabs defaultValue="b2b" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:mx-auto md:w-1/2">
                        <TabsTrigger value="b2b">For Retailers (B2B)</TabsTrigger>
                        <TabsTrigger value="b2c">For Customers (B2C)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="b2b" className="mt-10">
                        <Roadmap steps={b2bSteps} />
                    </TabsContent>
                    <TabsContent value="b2c" className="mt-10">
                        <Roadmap steps={b2cSteps} />
                    </TabsContent>
                </Tabs>

            </div>
        </section>
    );
}