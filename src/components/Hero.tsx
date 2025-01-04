import { Button } from "@/components/ui/button";
import { Play, UserCheck, Users } from "lucide-react";
import { useState } from "react";
import { RegisterDialog } from "@/components/auth/RegisterDialog";
import { AboutContent } from "./AboutContent";
import { useLanguage } from "@/hooks/use-language";

export const Hero = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            {t("hero.title")}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => setShowRegister(true)}
            >
              {t("hero.start")}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
              onClick={() => setShowAbout(true)}
            >
              {t("hero.learnMore")}
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-blue-100">
            <div className="flex justify-center mb-4">
              <Play className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("features.interactive")}
            </h3>
            <p className="text-gray-600">{t("features.interactive.desc")}</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-blue-100">
            <div className="flex justify-center mb-4">
              <UserCheck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("features.personalized")}
            </h3>
            <p className="text-gray-600">{t("features.personalized.desc")}</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-blue-100">
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("features.community")}
            </h3>
            <p className="text-gray-600">{t("features.community.desc")}</p>
          </div>
        </div>
      </div>
      <RegisterDialog open={showRegister} onOpenChange={setShowRegister} />
      {showAbout && <AboutContent onClose={() => setShowAbout(false)} />}
    </div>
  );
};