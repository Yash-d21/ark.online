import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function InfoSection() {
  return (
    <section id="info" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built for Everyone in the Supply Chain
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Whether you're a retailer looking to grow or a customer seeking convenience, ARK has you covered.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="text-center shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">For Retailers</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-muted-foreground">Are you a retailer who is tired of irregular supply, inflated prices and want to take your business online?</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-muted-foreground">At ARK you can buy bulk stock at lowest price and sell it online.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-muted-foreground">Plywood? Louvers? Cement? Etc? We got you covered!</p>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">For Customers</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">Are you a customer tired of visiting multiple shops for one product?</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">Buy any hardware and building materials product and get it delivered from the comfort of your home.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">Lowest price, highest quality!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
