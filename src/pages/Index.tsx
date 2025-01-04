import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SubscriptionPlans />
    </div>
  );
};

export default Index;