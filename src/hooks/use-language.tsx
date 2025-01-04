import { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    "nav.login": "Login",
    "nav.register": "Register",
    "nav.language": "Language",
    "hero.title": "Learn at your own pace with ClassConnect",
    "hero.subtitle": "An online learning platform tailored to your needs, with quality courses and personalized monitoring.",
    "hero.start": "Get Started",
    "hero.learnMore": "Learn More",
    "features.interactive": "Interactive Courses",
    "features.interactive.desc": "Learn with multimedia content and practical exercises",
    "features.personalized": "Personalized Monitoring",
    "features.personalized.desc": "Progress at your own pace with tailored recommendations",
    "features.community": "Active Community",
    "features.community.desc": "Exchange with other learners and experts",
  },
  fr: {
    "nav.login": "Se connecter",
    "nav.register": "S'inscrire",
    "nav.language": "Langue",
    "hero.title": "Apprenez à votre rythme avec ClassConnect",
    "hero.subtitle": "Une plateforme d'apprentissage en ligne adaptée à vos besoins, avec des cours de qualité et un suivi personnalisé.",
    "hero.start": "Commencer",
    "hero.learnMore": "En savoir plus",
    "features.interactive": "Cours interactifs",
    "features.interactive.desc": "Apprenez avec des contenus multimédias et des exercices pratiques",
    "features.personalized": "Suivi personnalisé",
    "features.personalized.desc": "Progressez à votre rythme avec des recommandations adaptées",
    "features.community": "Communauté active",
    "features.community.desc": "Échangez avec d'autres apprenants et des experts",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};