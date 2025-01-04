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

const plans = [
  {
    name: "Basique",
    description: "Parfait pour débuter",
    features: [
      "Accès aux cours de base",
      "Forum communautaire",
      "Resources d'apprentissage limitées",
    ],
  },
  {
    name: "Intermédiaire",
    description: "Pour les apprenants sérieux",
    features: [
      "Tous les avantages du plan Basique",
      "Accès à plus de cours",
      "Sessions de Q&R hebdomadaires",
      "Téléchargement des ressources",
    ],
  },
  {
    name: "Premium",
    description: "L'expérience complète",
    features: [
      "Tous les avantages du plan Intermédiaire",
      "Accès à tous les cours",
      "Sessions de visioconférence illimitées",
      "Support prioritaire",
      "Contenu exclusif",
    ],
  },
];

export const SubscriptionPlans = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Abonnements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => setShowRegister(true)}
                >
                  Choisir {plan.name}
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