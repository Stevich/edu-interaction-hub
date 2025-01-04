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

const plans = [
  {
    name: "Basique",
    price: "Gratuit",
    description: "Parfait pour débuter",
    features: [
      "Accès aux cours de base",
      "Forum communautaire",
      "Resources d'apprentissage limitées",
    ],
  },
  {
    name: "Intermédiaire",
    price: "5000 FCFA/mois",
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
    price: "10000 FCFA/mois",
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
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
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
                <Button className="w-full" variant={plan.name === "Premium" ? "default" : "outline"}>
                  Choisir {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};