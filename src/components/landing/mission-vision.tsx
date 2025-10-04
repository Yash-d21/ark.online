import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const missionPoints = [
    "Transform India's most fragmented sector into a digitally connected ecosystem.",
    "Enable every hardware retailer to compete with big chains through technology, not capital.",
    "Empower millions of hardware retailers to scale profitably with access to real-time supply, credit, and logistics.",
    "Turn supply chaos into supply clarity: one delivery, one order, one retailer at a time.",
    "Unlock the economic potential of India's local hardware market by making transactions seamless, affordable, and trustworthy."
];

export function MissionVision() {
    return (
        <section id="mission" className="bg-card py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4 space-y-16">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        ARK! Empowering INDIA, One Retailer at a time!
                    </h2>
                </div>

                <div className="grid gap-12 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                        <h3 className="font-headline text-2xl font-bold text-foreground">Our Mission</h3>
                        <div className="mt-6 space-y-4">
                            {missionPoints.map((point, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                                    <p className="text-muted-foreground">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <Card className="h-full shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    To become a platform that empowers 1,00,000+ retailers, handles ₹3,000+ Cr in annual transactions, and becomes the go-to network for hardware procurement and delivery across India.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
