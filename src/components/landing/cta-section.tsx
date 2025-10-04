import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
    return (
        <section id="contact" className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="text-center shadow-lg bg-primary/10 border-primary/20">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Are you a Hardware store owner?</CardTitle>
                            <CardDescription className="pt-2">
                                ARK provides you with the lowest price, easy credit, and increased sales!
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button size="lg" className="w-full sm:w-auto">
                                Join as a Retailer
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="text-center shadow-lg bg-accent/10 border-accent/20">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Are you a customer?</CardTitle>
                            <CardDescription className="pt-2">
                                Get access to a wide range of products and get them delivered instantly at the lowest price!
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                                Shop Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
