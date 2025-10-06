import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Store, ShoppingCart, TrendingUp, Truck, Shield } from "lucide-react";

export function InfoSection() {
  return (
    <section id="info" className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl px-4 relative">
        <div className="mx-auto max-w-4xl text-center mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-4">
                Built for Everyone in the Supply Chain
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Whether you're a retailer looking to grow or a customer seeking convenience, ARK has you covered with comprehensive solutions.
            </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Retailers Card */}
          <Card className="relative overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-md hover:bg-white/90 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent group-hover:from-blue-100/60 transition-all duration-500"></div>
            <CardHeader className="text-center pb-4 relative">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Store className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </div>
              <CardTitle className="font-headline text-2xl text-blue-700 mb-2 group-hover:text-blue-800 transition-colors duration-300">For Retailers</CardTitle>
              <p className="text-slate-600 text-base font-medium group-hover:text-slate-700 transition-colors duration-300">Transform your business with technology</p>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6 relative">
              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-md hover:bg-white/95 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-slate-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-200 flex items-center justify-center text-blue-700 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-slate-900 font-semibold text-base mb-1">Irregular supply & inflated prices?</p>
                    <p className="text-slate-600 text-sm">Get consistent supply at wholesale rates</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-md hover:bg-white/95 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-slate-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-200 flex items-center justify-center text-blue-700 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-slate-900 font-semibold text-base mb-1">Want to go online?</p>
                    <p className="text-slate-600 text-sm">Sell your products through our platform</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-md hover:bg-white/95 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-slate-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-200 flex items-center justify-center text-blue-700 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-slate-900 font-semibold text-base mb-1">Complete product range</p>
                    <p className="text-slate-600 text-sm">Plywood, Louvers, Cement & more!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Customers Card */}
          <Card className="relative overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-md hover:bg-white/90 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent group-hover:from-green-100/60 transition-all duration-500"></div>
            <CardHeader className="text-center pb-4 relative">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <ShoppingCart className="h-8 w-8 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
              </div>
              <CardTitle className="font-headline text-2xl text-green-700 mb-2 group-hover:text-green-800 transition-colors duration-300">For Customers</CardTitle>
              <p className="text-slate-600 text-base font-medium group-hover:text-slate-700 transition-colors duration-300">Shop from the comfort of your home</p>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6 relative">
              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-md hover:bg-white/95 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-slate-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-200 flex items-center justify-center text-green-700 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-slate-900 font-semibold text-base mb-1">Tired of multiple shop visits?</p>
                    <p className="text-slate-600 text-sm">Find everything in one place</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-md hover:bg-white/95 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-slate-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-200 flex items-center justify-center text-green-700 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-slate-900 font-semibold text-base mb-1">Home delivery</p>
                    <p className="text-slate-600 text-sm">Get hardware delivered to your doorstep</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-md hover:bg-white/95 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-slate-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-200 flex items-center justify-center text-green-700 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-slate-900 font-semibold text-base mb-1">Best value guarantee</p>
                    <p className="text-slate-600 text-sm">Lowest price, highest quality!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </section>
  );
}
