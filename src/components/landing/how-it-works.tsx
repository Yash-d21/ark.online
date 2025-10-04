import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowRight, ShoppingCart, Truck, User, Store, PackageCheck } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from "next/image";


const steps = [
    {
        title: "Retailer Onboards & Orders",
        description: "Retailers sign up via the ARK B2B app and place bulk orders for their products at the lowest price.",
        icon: <Store className="h-10 w-10 text-primary" />,
        image: PlaceHolderImages.find(img => img.id === 'retailer-onboarding'),
    },
    {
        title: "Same-Day Stock Delivery",
        description: "ARK delivers the goods to the retailer's store on the same day.",
        icon: <Truck className="h-10 w-10 text-primary" />,
        image: PlaceHolderImages.find(img => img.id === 'order-delivery'),
    },
    {
        title: "Customer Places Order",
        description: "A customer places an order for a product via the ARK B2C app.",
        icon: <ShoppingCart className="h-10 w-10 text-accent" />,
        image: PlaceHolderImages.find(img => img.id === 'customer-order'),
    },
    {
        title: "Order Redirected to Retailer",
        description: "The order is redirected to the nearest partner retail store at 0% commission.",
        icon: <User className="h-10 w-10 text-accent" />,
        image: PlaceHolderImages.find(img => img.id === 'indian-store-owner'),
    },
    {
        title: "Final Delivery to Customer",
        description: "ARK picks up the order from the retailer and delivers it to the customer.",
        icon: <PackageCheck className="h-10 w-10 text-accent" />,
        image: PlaceHolderImages.find(img => img.id === 'order-fulfillment'),
    },
];

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

                <div className="relative">
                    {/* The connecting line - hidden on mobile */}
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
                                
                                {/* Arrow for mobile */}
                                {index < steps.length - 1 && (
                                    <div className="flex-shrink-0 md:hidden my-4">
                                        <ArrowDown className="h-8 w-8 text-primary/50" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
