import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
    "High prices due to 2–4 layers of distribution.",
    "Unpredictable supply from middlemen.",
    "Lack of digitization (orders via calls/WhatsApp).",
    "Retail stores are offline-only, with no online presence.",
    "Urgent needs cause project delays for customers.",
];

export function ProblemSolution() {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid gap-12 md:grid-cols-2">
                    <Card className="bg-destructive/10 border-destructive/20 shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-destructive-foreground">The Problem</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {problems.map((problem, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-destructive" />
                                        <span className="text-destructive-foreground/90">{problem}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary/10 border-primary/20 shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-primary">The ARK Solution</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-foreground">
                                A logistics-powered B2B2C platform connecting manufacturers, retailers, and customers for instant, affordable hardware access.
                            </p>
                            <div className="rounded-lg bg-card p-4 text-center shadow-inner">
                                <p className="font-medium text-primary">
                                    App + Warehousing + Hyperlocal Delivery + Retail Fulfillment Model
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
