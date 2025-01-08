import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with basic access",
    features: ["Access to free courses", "Community support"],
  },
  {
    name: "Basic",
    price: "$25",
    description: "Perfect for beginners",
    features: ["Choose 2 courses", "Community support", "Course certificates", "24/7 support"],
  },
  {
    name: "Pro",
    price: "$60",
    description: "For serious learners",
    features: ["Choose 5 courses", "Priority support", "Course certificates", "1-on-1 mentoring", "Project reviews"],
  },
  {
    name: "Lifetime",
    price: "$99",
    description: "Ultimate learning experience",
    features: ["Access all courses", "VIP support", "Course certificates", "1-on-1 mentoring", "Project reviews", "Early access to new courses"],
  },
];

export function SubscriptionPlans() {
  return (
    <div className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Learning Path</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your learning journey. Upgrade or downgrade at any time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose {plan.name}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}