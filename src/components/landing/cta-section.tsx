import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
    return (
        <section id="contact" className="py-20 md:py-28 bg-card">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        So, what are you waiting for?
                    </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="text-center shadow-lg bg-primary/10 border-primary/20">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">Are you ready to take your business to the next level?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button size="lg" className="w-full sm:w-auto" asChild>
                                <Link href="https://forms.gle/BW2q6X93evCi51Ga9" target="_blank" rel="noopener noreferrer">
                                    Grow Now!
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="text-center shadow-lg bg-accent/10 border-accent/20">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">Ready to browse through millions of our products?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                                <Link href="https://forms.gle/BW2q6X93evCi51Ga9" target="_blank" rel="noopener noreferrer">
                                    Shop Now!
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
