import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users, Shield, Zap, Star } from "lucide-react";

const retailerBenefits = [
  {
    title: "Lowest wholesale price",
    description: "Get products at manufacturer rates",
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    title: "Same day delivery",
    description: "Fast and reliable supply chain",
    icon: <Zap className="h-5 w-5" />
  },
  {
    title: "Increased sale via online orders",
    description: "Expand your customer base digitally",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "0% commission on online orders",
    description: "Keep 100% of your profits",
    icon: <Shield className="h-5 w-5" />
  },
  {
    title: "Seamless credit access",
    description: "Flexible payment solutions",
    icon: <Star className="h-5 w-5" />
  },
  {
    title: "Wide product range",
    description: "Everything you need in one place",
    icon: <CheckCircle2 className="h-5 w-5" />
  },
];

const customerBenefits = [
  {
    title: "Wide range of products and brands",
    description: "Find everything from top manufacturers",
    icon: <CheckCircle2 className="h-5 w-5" />
  },
  {
    title: "Lowest prices, highest quality!",
    description: "Best value for your money",
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    title: "Super fast delivery!",
    description: "Get your orders delivered quickly",
    icon: <Zap className="h-5 w-5" />
  },
];

export function WhyArk() {
  return (
    <section id="why-ark" className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center mb-8">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Why Choose ARK
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Designed specifically for the hardware industry with features that drive real results for retailers and customers.
            </p>
        </div>
        
        <div className="mt-12">
            <Tabs defaultValue="retailers" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:mx-auto md:w-1/2 bg-white/30 backdrop-blur-md border border-white/40 shadow-xl">
                    <TabsTrigger value="retailers" className="text-slate-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:backdrop-blur-md data-[state=active]:shadow-lg">For Retailers (B2B)</TabsTrigger>
                    <TabsTrigger value="customers" className="text-slate-700 data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:backdrop-blur-md data-[state=active]:shadow-lg">For Customers (B2C)</TabsTrigger>
                </TabsList>
                
                <TabsContent value="retailers">
                    <Card className="mt-10 shadow-2xl border-0 bg-white/70 backdrop-blur-md hover:scale-105 hover:-translate-y-2 transition-all duration-500 rounded-2xl">
                        <CardHeader className="text-center pb-8">
                            <CardTitle className="font-headline text-3xl text-blue-600">Benefits for Retailers</CardTitle>
                            <p className="text-slate-600 text-lg">Everything you need to grow your hardware business</p>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {retailerBenefits.map((benefit, index) => (
                                    <div key={index} className="group">
                                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-md hover:bg-white/95 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-slate-300">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-200 flex items-center justify-center text-blue-700 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                                {benefit.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                                                <p className="text-sm text-slate-700 leading-relaxed">{benefit.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                
                <TabsContent value="customers">
                    <Card className="mt-10 shadow-2xl border-0 bg-white/70 backdrop-blur-md hover:scale-105 hover:-translate-y-2 transition-all duration-500 rounded-2xl">
                        <CardHeader className="text-center pb-8">
                            <CardTitle className="font-headline text-3xl text-green-600">Benefits for Customers</CardTitle>
                            <p className="text-slate-600 text-lg">Shop smarter with ARK's customer-focused features</p>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {customerBenefits.map((benefit, index) => (
                                    <div key={index} className="group">
                                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-md hover:bg-white/95 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-slate-300">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-200 flex items-center justify-center text-green-700 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                                {benefit.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                                                <p className="text-sm text-slate-700 leading-relaxed">{benefit.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
        
      </div>
    </section>
  );
}
