import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Target, Eye, Users, Zap, Shield, TrendingUp, Globe, Lightbulb, Heart } from "lucide-react";

const missionPoints = [
    {
        text: "Transform India's most fragmented sector into a digitally connected ecosystem.",
        icon: <Globe className="h-5 w-5" />
    },
    {
        text: "Enable every hardware retailer to compete with big chains through technology, not capital.",
        icon: <Zap className="h-5 w-5" />
    },
    {
        text: "Empower millions of hardware retailers to scale profitably with access to real-time supply, credit, and logistics.",
        icon: <TrendingUp className="h-5 w-5" />
    },
    {
        text: "Turn supply chaos into supply clarity: one delivery, one order, one retailer at a time.",
        icon: <Shield className="h-5 w-5" />
    },
    {
        text: "Unlock the economic potential of India's local hardware market by making transactions seamless, affordable, and trustworthy.",
        icon: <Heart className="h-5 w-5" />
    }
];

const visionPoints = [
    {
        title: "Digital Transformation",
        description: "Every retailer equipped with cutting-edge technology",
        icon: <Target className="h-6 w-6" />
    },
    {
        title: "Equal Opportunities",
        description: "Level playing field for all businesses",
        icon: <Users className="h-6 w-6" />
    },
    {
        title: "Innovation First",
        description: "Growth through innovation, not just capital",
        icon: <Lightbulb className="h-6 w-6" />
    }
];

export function MissionVision() {
    return (
        <section id="mission" className="py-8 md:py-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-green-50/20"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-100/30 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-green-100/20 rounded-full blur-3xl"></div>
            <div className="container mx-auto max-w-7xl px-4 relative">
                <div className="mx-auto max-w-4xl text-center mb-10">
                    <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/50 px-5 py-2 text-base font-medium text-blue-700 backdrop-blur-sm mb-6 shadow-lg">
                        🚀 Our Purpose & Vision
                    </div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-5">
                        ARK! Empowering INDIA, One Retailer at a time!
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We're revolutionizing India's hardware supply chain by connecting retailers, suppliers, and customers through innovative technology solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-lg hover:bg-white/90 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group rounded-2xl border border-white/40">
                        <CardHeader className="pb-5">
                            <div className="text-center">
                                <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    <Target className="h-7 w-7 text-blue-600" />
                                </div>
                                <CardTitle className="font-headline text-2xl text-blue-600">
                                    Our Mission
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-5">
                            <div className="space-y-4">
                                {missionPoints.map((point, index) => (
                                    <div key={index} className="group/item">
                                        <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/60 to-blue-100/40 backdrop-blur-md hover:from-blue-100/80 hover:to-blue-200/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-blue-200/50 shadow-md hover:shadow-lg">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 shadow-sm">
                                                <div className="text-blue-700">
                                                    {point.icon}
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-800 leading-relaxed font-medium">{point.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Vision Card */}
                    <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-lg hover:bg-white/90 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group rounded-2xl border border-white/40">
                        <CardHeader className="pb-5">
                            <div className="text-center">
                                <div className="mx-auto w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    <Eye className="h-7 w-7 text-green-600" />
                                </div>
                                <CardTitle className="font-headline text-2xl text-green-600">
                                    Our Vision
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-5">
                            <div className="space-y-5">
                                <div className="text-center mb-5 p-5 rounded-xl bg-gradient-to-br from-green-50/60 to-green-100/40 border border-green-200/50 shadow-md">
                                    <h3 className="font-headline text-lg font-semibold text-slate-900 mb-3">
                                        Building Tomorrow's Supply Chain Today
                                    </h3>
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        We envision a future where every hardware retailer in India has equal access to technology, 
                                        supply, and growth opportunities.
                                    </p>
                                </div>
                                
                                <div className="grid gap-4">
                                    {visionPoints.map((point, index) => (
                                        <div key={index} className="group/item">
                                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50/60 to-green-100/40 backdrop-blur-md hover:from-green-100/80 hover:to-green-200/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-green-200/50 shadow-md hover:shadow-lg">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 shadow-sm">
                                                    <div className="text-green-700">
                                                        {point.icon}
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-slate-900 mb-1 text-sm">{point.title}</h4>
                                                    <p className="text-xs text-slate-700">{point.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
