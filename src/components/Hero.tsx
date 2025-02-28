import { Button } from "@/components/ui/button";
import { Play, UserCheck, Users } from "lucide-react";
import { useState } from "react";
import { RegisterDialog } from "@/components/auth/RegisterDialog";
import { AboutContent } from "./AboutContent";

export const Hero = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Apprenez à votre rythme avec ClassConnect
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Une plateforme d'apprentissage en ligne adaptée à vos besoins, avec des cours de qualité et un suivi personnalisé.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8"
              onClick={() => setShowRegister(true)}
            >
              Commencer
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#D3E4FD]"
              onClick={() => setShowAbout(true)}
            >
              En savoir plus
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-[#0EA5E9]/20">
            <div className="flex justify-center mb-4">
              <Play className="h-8 w-8 text-[#0EA5E9]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Cours interactifs
            </h3>
            <p className="text-gray-600">Apprenez avec des contenus multimédias et des exercices pratiques</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-[#0EA5E9]/20">
            <div className="flex justify-center mb-4">
              <UserCheck className="h-8 w-8 text-[#0EA5E9]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Suivi personnalisé
            </h3>
            <p className="text-gray-600">Progressez à votre rythme avec des recommandations adaptées</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-[#0EA5E9]/20">
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-[#0EA5E9]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Communauté active
            </h3>
            <p className="text-gray-600">Échangez avec d'autres apprenants et des experts</p>
          </div>
        </div>
      </div>
      <RegisterDialog open={showRegister} onOpenChange={setShowRegister} />
      {showAbout && <AboutContent onClose={() => setShowAbout(false)} />}
    </div>
  );
};