import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Rocket, ShoppingBag, Star, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
    return (
        <section id="contact" className="py-8 md:py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative">
                <div className="mx-auto max-w-4xl text-center mb-8">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm mb-6">
                        🚀 Ready to Get Started?
                    </div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Transform Your Business Today
                    </h2>
                    <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
                        Join thousands of retailers and customers who are already experiencing the ARK advantage.
                    </p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 mb-12">
                    {/* Retailers CTA */}
                    <Card className="text-center shadow-2xl border-0 bg-white/20 backdrop-blur-lg hover:bg-white/30 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group border border-white/30 rounded-2xl">
                        <CardHeader className="pb-6">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <Rocket className="h-8 w-8 text-blue-600" />
                            </div>
                            <CardTitle className="font-headline text-xl text-white">Ready to Scale Your Business?</CardTitle>
                            <p className="text-slate-300 mt-2">Join our network of successful retailers</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                                    <div className="text-lg font-bold text-white">0%</div>
                                    <div className="text-xs text-slate-200">Commission</div>
                                </div>
                                <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                                    <div className="text-lg font-bold text-white">Same Day</div>
                                    <div className="text-xs text-slate-200">Delivery</div>
                                </div>
                            </div>
                            <Button size="lg" className="w-full bg-blue-600/80 hover:bg-blue-700/90 text-white shadow-2xl hover:shadow-3xl backdrop-blur-md border border-blue-500/30 transition-all duration-300" asChild>
                                <Link href="https://forms.gle/BW2q6X93evCi51Ga9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                    Start Growing Now!
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                    
                    {/* Customers CTA */}
                    <Card className="text-center shadow-2xl border-0 bg-white/20 backdrop-blur-lg hover:bg-white/30 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group border border-white/30 rounded-2xl">
                        <CardHeader className="pb-6">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <ShoppingBag className="h-8 w-8 text-green-600" />
                            </div>
                            <CardTitle className="font-headline text-xl text-white">Shop Smart, Save More</CardTitle>
                            <p className="text-slate-300 mt-2">Discover millions of products at unbeatable prices</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                                    <div className="text-lg font-bold text-white">Wide Range</div>
                                    <div className="text-xs text-slate-200">Products</div>
                                </div>
                                <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                                    <div className="text-lg font-bold text-white">Best Price</div>
                                    <div className="text-xs text-slate-200">Guarantee</div>
                                </div>
                            </div>
                            <Button size="lg" className="w-full bg-green-600/80 hover:bg-green-700/90 text-white shadow-2xl hover:shadow-3xl backdrop-blur-md border border-green-500/30 transition-all duration-300" asChild>
                                <Link href="https://forms.gle/BW2q6X93evCi51Ga9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                    Start Shopping Now!
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                
            </div>
        </section>
    );
}
