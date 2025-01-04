import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Apprenez à votre rythme
          </h1>
          <p className="text-xl mb-8">
            Une plateforme d'apprentissage en ligne adaptée à vos besoins, avec des cours de qualité et un suivi personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Commencer gratuitement
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};