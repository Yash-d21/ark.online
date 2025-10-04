import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, IndianRupee, Truck, Percent } from "lucide-react";

const stats = [
  {
    value: "1,00,000+",
    label: "Retailers",
    icon: Users,
  },
  {
    value: "₹3,000+ Cr",
    label: "Annual Transactions",
    icon: IndianRupee,
  },
  {
    value: "Same Day",
    label: "Delivery",
    icon: Truck,
  },
  {
    value: "0%",
    label: "Commission",
    icon: Percent,
  },
];

export function Stats() {
  return (
    <section className="bg-card py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2">
                 <stat.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
