
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ShoppingCart, Truck, User, Store, PackageCheck, Smartphone, Search, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const b2bSteps = [
    {
        title: "Retailer Onboards & Orders",
        description: "Retailers sign up via the ARK B2B app and place bulk orders for their products at the lowest price.",
        icon: <Store className="h-10 w-10 text-blue-600" />,
        color: "primary"
    },
    {
        title: "Same-Day Stock Delivery",
        description: "ARK delivers the goods to the retailer's store on the same day.",
        icon: <Truck className="h-10 w-10 text-blue-600" />,
        color: "primary"
    },
    {
        title: "Customer Places B2C Order",
        description: "A customer places an order for a product via the ARK B2C app.",
        icon: <ShoppingCart className="h-10 w-10 text-blue-600" />,
        color: "primary"
    },
    {
        title: "Order Redirected to Retailer",
        description: "The order is redirected to the nearest partner retail store at 0% commission.",
        icon: <User className="h-10 w-10 text-blue-600" />,
        color: "primary"
    },
    {
        title: "Final Delivery to Customer",
        description: "ARK picks up the order from the retailer and delivers it to the customer.",
        icon: <PackageCheck className="h-10 w-10 text-blue-600" />,
        color: "primary"
    },
];

const b2cSteps = [
    {
        title: "Wide Range of Products",
        description: "Browse through millions of hardware and building materials products.",
        icon: <Search className="h-10 w-10 text-green-600" />,
        color: "accent"
    },
    {
        title: "Place Order",
        description: "Order from our app at the lowest price.",
        icon: <Smartphone className="h-10 w-10 text-green-600" />,
        color: "accent"
    },
    {
        title: "Get it Delivered",
        description: "Have it delivered to you almost instantly without any hassle.",
        icon: <Truck className="h-10 w-10 text-green-600" />,
        color: "accent"
    },
]

const RoadmapB2B = () => {
    const renderStep = (step: (typeof b2bSteps)[0], index: number) => (
        <div className="flex flex-col items-center text-center max-w-[280px] group hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-600/20 backdrop-blur-sm border-2 border-blue-400/30 shadow-2xl z-10 group-hover:scale-110 group-hover:shadow-blue-500/50 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                {step.icon}
            </div>
            <div className="mt-6">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-green-600/20 backdrop-blur-sm text-green-300 mb-3 border border-green-400/30 group-hover:bg-green-600/30 group-hover:border-green-400/50 transition-all duration-300">
                    Step {index + 1}
                </div>
                <h3 className="font-headline text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{step.description}</p>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-[280px] group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-600/20 backdrop-blur-sm border-2 border-blue-400/30 shadow-2xl z-10 group-hover:scale-110 group-hover:shadow-blue-500/50 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                    {b2bSteps[0].icon}
                </div>
                <div className="mt-6">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-blue-600/20 backdrop-blur-sm text-blue-300 mb-3 border border-blue-400/30 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                        Step 1
                    </div>
                    <h3 className="font-headline text-lg font-semibold text-white">{b2bSteps[0].title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{b2bSteps[0].description}</p>
                </div>
            </div>
            
            <ArrowRight className="h-16 w-16 text-blue-300 hidden md:block" />
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-[280px] group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-600/20 backdrop-blur-sm border-2 border-blue-400/30 shadow-2xl z-10 group-hover:scale-110 group-hover:shadow-blue-500/50 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                    {b2bSteps[1].icon}
                </div>
                <div className="mt-6">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-blue-600/20 backdrop-blur-sm text-blue-300 mb-3 border border-blue-400/30 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                        Step 2
                    </div>
                    <h3 className="font-headline text-lg font-semibold text-white">{b2bSteps[1].title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{b2bSteps[1].description}</p>
                </div>
            </div>
            
            <ArrowRight className="h-16 w-16 text-blue-300 hidden md:block" />
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-[280px] group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-600/20 backdrop-blur-sm border-2 border-blue-400/30 shadow-2xl z-10 group-hover:scale-110 group-hover:shadow-blue-500/50 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                    {b2bSteps[2].icon}
                </div>
                <div className="mt-6">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-blue-600/20 backdrop-blur-sm text-blue-300 mb-3 border border-blue-400/30 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                        Step 3
                    </div>
                    <h3 className="font-headline text-lg font-semibold text-white">{b2bSteps[2].title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{b2bSteps[2].description}</p>
                </div>
            </div>
            
            <ArrowRight className="h-16 w-16 text-blue-300 hidden md:block" />
            
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center max-w-[280px] group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-600/20 backdrop-blur-sm border-2 border-blue-400/30 shadow-2xl z-10 group-hover:scale-110 group-hover:shadow-blue-500/50 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                    {b2bSteps[3].icon}
                </div>
                <div className="mt-6">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-blue-600/20 backdrop-blur-sm text-blue-300 mb-3 border border-blue-400/30 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                        Step 4
                    </div>
                    <h3 className="font-headline text-lg font-semibold text-white">{b2bSteps[3].title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{b2bSteps[3].description}</p>
                </div>
            </div>
            
            <ArrowRight className="h-16 w-16 text-blue-300 hidden md:block" />
            
            {/* Step 5 */}
            <div className="flex flex-col items-center text-center max-w-[280px] group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-600/20 backdrop-blur-sm border-2 border-blue-400/30 shadow-2xl z-10 group-hover:scale-110 group-hover:shadow-blue-500/50 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                    {b2bSteps[4].icon}
                </div>
                <div className="mt-6">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-blue-600/20 backdrop-blur-sm text-blue-300 mb-3 border border-blue-400/30 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-300">
                        Step 5
                    </div>
                    <h3 className="font-headline text-lg font-semibold text-white">{b2bSteps[4].title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{b2bSteps[4].description}</p>
                </div>
            </div>
        </div>
    );
};

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-8 md:py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container mx-auto max-w-8xl px-4">
                <div className="text-center mb-8">
                    <h2 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        How ARK Works
                    </h2>
                    <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        You GROW, We GROW
                    </p>
                </div>
                
                <Tabs defaultValue="b2b" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:mx-auto md:w-1/2 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 shadow-xl">
                        <TabsTrigger value="b2b" className="text-slate-300 data-[state=active]:bg-blue-600/80 data-[state=active]:text-white data-[state=active]:backdrop-blur-md data-[state=active]:shadow-lg">For Retailers (B2B)</TabsTrigger>
                        <TabsTrigger value="b2c" className="text-slate-300 data-[state=active]:bg-green-600/80 data-[state=active]:text-white data-[state=active]:backdrop-blur-md data-[state=active]:shadow-lg">For Customers (B2C)</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="b2b" className="mt-16">
                        <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/50 p-8 lg:p-10">
                            <div className="text-center mb-12">
                                <h3 className="font-headline text-3xl text-blue-300 mb-4">Retailer Journey</h3>
                                <p className="text-slate-300 text-lg">From onboarding to delivery - your complete business solution</p>
                            </div>
                            <RoadmapB2B />
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="b2c" className="mt-16">
                        <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/50 p-8 lg:p-10">
                            <div className="text-center mb-12">
                                <h3 className="font-headline text-3xl text-green-300 mb-4">Customer Journey</h3>
                                <p className="text-slate-300 text-lg">Simple steps to get what you need, when you need it</p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-10">
                                {/* Step 1 */}
                                <div className="flex flex-col items-center text-center max-w-[280px] group hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-600/20 backdrop-blur-sm border-2 border-green-400/30 shadow-2xl z-10 group-hover:scale-110 group-hover:shadow-green-500/50 group-hover:bg-green-600/30 group-hover:border-green-400/50 transition-all duration-300">
                                        {b2cSteps[0].icon}
                                    </div>
                                    <div className="mt-6">
                                        <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-green-600/20 backdrop-blur-sm text-green-300 mb-3 border border-green-400/30 group-hover:bg-green-600/30 group-hover:border-green-400/50 transition-all duration-300">
                                            Step 1
                                        </div>
                                        <h3 className="font-headline text-lg font-semibold text-white">{b2cSteps[0].title}</h3>
                                        <p className="mt-2 text-sm text-slate-300 leading-relaxed">{b2cSteps[0].description}</p>
                                    </div>
                                </div>
                                
                                <ArrowRight className="h-12 w-12 text-green-300 hidden md:block" />
                                
                                {/* Step 2 */}
                                <div className="flex flex-col items-center text-center max-w-[280px] group hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-600/20 backdrop-blur-sm border-2 border-green-400/30 shadow-2xl z-10 group-hover:scale-110 group-hover:shadow-green-500/50 group-hover:bg-green-600/30 group-hover:border-green-400/50 transition-all duration-300">
                                        {b2cSteps[1].icon}
                                    </div>
                                    <div className="mt-6">
                                        <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-green-600/20 backdrop-blur-sm text-green-300 mb-3 border border-green-400/30 group-hover:bg-green-600/30 group-hover:border-green-400/50 transition-all duration-300">
                                            Step 2
                                        </div>
                                        <h3 className="font-headline text-lg font-semibold text-white">{b2cSteps[1].title}</h3>
                                        <p className="mt-2 text-sm text-slate-300 leading-relaxed">{b2cSteps[1].description}</p>
                                    </div>
                                </div>
                                
                                <ArrowRight className="h-12 w-12 text-green-300 hidden md:block" />
                                
                                {/* Step 3 */}
                                <div className="flex flex-col items-center text-center max-w-[280px] group hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-600/20 backdrop-blur-sm border-2 border-green-400/30 shadow-2xl z-10 group-hover:scale-110 group-hover:shadow-green-500/50 group-hover:bg-green-600/30 group-hover:border-green-400/50 transition-all duration-300">
                                        {b2cSteps[2].icon}
                                    </div>
                                    <div className="mt-6">
                                        <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-green-600/20 backdrop-blur-sm text-green-300 mb-3 border border-green-400/30 group-hover:bg-green-600/30 group-hover:border-green-400/50 transition-all duration-300">
                                            Step 3
                                        </div>
                                        <h3 className="font-headline text-lg font-semibold text-white">{b2cSteps[2].title}</h3>
                                        <p className="mt-2 text-sm text-slate-300 leading-relaxed">{b2cSteps[2].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
