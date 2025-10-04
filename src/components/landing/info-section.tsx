import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShoppingCart } from "lucide-react";
import Image from "next/image";


export function InfoSection() {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="flex justify-center items-center gap-4 mb-16 text-center">
                    <h3 className="text-lg text-muted-foreground font-semibold">Incubated with</h3>
                    <Image src="/images/thub-logo.png" alt="T-Hub Logo" width={80} height={80} className="object-contain" />
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl flex items-center gap-3">
                                <Users className="h-8 w-8 text-primary" />
                                For Retailers
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">Are you a retailer who is tired of irregular supply, inflated prices and want to take your business online?</p>
                            <p className="text-foreground font-medium">At ARK you can buy bulk stock at lowest price and sell it online.</p>
                            <p className="text-sm text-muted-foreground border-l-2 border-primary pl-3 italic">Plywood? Louvers? Cement? Etc? We got you covered!</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl flex items-center gap-3">
                                <ShoppingCart className="h-8 w-8 text-accent" />
                                For Customers
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <p className="text-muted-foreground">Are you a customer tired of visiting multiple shops for one product?</p>
                           <p className="text-foreground font-medium">Buy any hardware and building materials product and get it delivered from the comfort of your home.</p>
                           <p className="text-sm text-muted-foreground border-l-2 border-accent pl-3 italic">Lowest price, highest quality!</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
