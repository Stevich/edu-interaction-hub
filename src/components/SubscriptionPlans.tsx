import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { RegisterDialog } from "@/components/auth/RegisterDialog";
import { useLanguage } from "@/hooks/use-language";

const plans = [
  {
    name: "Basic",
    description: "Perfect for getting started",
    features: [
      "Access to basic courses",
      "Community forum",
      "Limited learning resources",
    ],
  },
  {
    name: "Standard",
    description: "For serious learners",
    features: [
      "All Basic plan features",
      "Access to more courses",
      "Weekly Q&A sessions",
      "Resource downloads",
    ],
  },
  {
    name: "Premium",
    description: "The complete experience",
    features: [
      "All Standard plan features",
      "Access to all courses",
      "Unlimited video sessions",
      "Priority support",
      "Exclusive content",
    ],
  },
];

export const SubscriptionPlans = () => {
  const [showRegister, setShowRegister] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-[#F0F9FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("plans.title")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col border-[#0EA5E9]/20">
              <CardHeader>
                <CardTitle className="text-2xl">{t(`plans.${plan.name.toLowerCase()}.name`)}</CardTitle>
                <CardDescription>{t(`plans.${plan.name.toLowerCase()}.description`)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#0EA5E9]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white" 
                  onClick={() => setShowRegister(true)}
                >
                  {t("plans.choose")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <RegisterDialog open={showRegister} onOpenChange={setShowRegister} />
    </div>
  );
};