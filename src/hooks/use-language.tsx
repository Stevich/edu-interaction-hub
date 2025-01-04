import { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

type TranslationValue = string | string[];

type Translations = {
  [key: string]: TranslationValue;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => TranslationValue;
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
    "about.title": "Welcome to ClassConnect",
    "about.subtitle": "The online learning platform designed to revolutionize education in Africa and beyond.",
    "about.whatIs.title": "What is ClassConnect?",
    "about.whatIs.desc1": "ClassConnect is an online learning platform dedicated to middle school, high school, university students and professionals. It offers modern tools for effective learning, course tracking, access to personalized resources, and interaction with teachers or experts in various fields.",
    "about.whatIs.desc2": "Whether you're a student preparing for an exam or a professional looking to acquire new skills, ClassConnect is designed to support you on your journey.",
    "about.features.title": "Main Features",
    "about.features.courseManagement": "Course Management",
    "about.features.courseManagement.desc": [
      "Structured Courses: Well-organized courses by education level",
      "Multimedia Support: Interactive videos, PDF documents, exam papers",
      "Regular Updates: Updated educational content"
    ],
    "about.features.virtualClassroom": "Virtual Classroom Space",
    "about.features.virtualClassroom.desc": [
      "Live Courses: Live video conference sessions",
      "Course Replay: Access to recordings",
      "Interaction Tools: Live chat, Q&A"
    ],
    "about.features.experience": "Personalized Experience",
    "about.features.experience.desc": [
      "Available Education Levels: Middle School, High School, University, and Professional",
      "Middle School: 6th, 5th, 4th, 3rd grade",
      "High School: 10th, 11th, 12th grade",
      "University: Level I, Level II, Level III",
      "Professional: Customized goal (example: technical skills, management, etc.)"
    ],
    "about.features.subscriptions": "Adapted Subscriptions",
    "about.features.subscriptions.desc": [
      "Basic: Access to basic courses and limited resources",
      "Standard: Access to additional courses and collaborative tools",
      "Premium: Full access to all courses, video conferences, and exclusive resources"
    ],
    "about.features.payments": "Secure Payments",
    "about.features.payments.desc": [
      "Integration of mobile payments via MTN Money and Orange Money",
      "Instant notifications for successful payments",
      "Easy subscription management (renewals, cancellations, etc.)"
    ],
    "about.features.support": "Personalized Assistance",
    "about.features.support.desc": [
      "Live Chat: Responsive support to answer your questions",
      "FAQ and Guides: A comprehensive knowledge base to assist you"
    ],
    "about.howItWorks.title": "How It Works?",
    "about.howItWorks.registration": "Easy Registration",
    "about.howItWorks.steps": [
      "Create an account by providing your information",
      "Receive a confirmation email",
      "Choose your subscription",
      "Access your courses",
      "Participate in live sessions"
    ],
    "about.conclusion": "ClassConnect isn't just a platform, it's a revolution in education. Join us to transform your way of learning and achieve your academic or professional goals."
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
    "about.title": "Bienvenue sur ClassConnect",
    "about.subtitle": "La plateforme d'apprentissage en ligne conçue pour révolutionner l'éducation en Afrique et au-delà.",
    "about.whatIs.title": "Qu'est-ce que ClassConnect ?",
    "about.whatIs.desc1": "ClassConnect est une plateforme d'apprentissage en ligne dédiée aux collégiens, lycéens, universitaires et professionnels. Elle offre des outils modernes pour apprendre efficacement, suivre des cours, accéder à des ressources personnalisées, et interagir avec des enseignants ou des experts dans divers domaines.",
    "about.whatIs.desc2": "Que vous soyez étudiant préparant un examen ou professionnel cherchant à acquérir de nouvelles compétences, ClassConnect est conçu pour vous accompagner dans votre parcours.",
    "about.features.title": "Principales Fonctionnalités",
    "about.features.courseManagement": "Gestion des Cours",
    "about.features.courseManagement.desc": [
      "Cours Structurés : Des cours bien organisés selon le niveau d'études",
      "Supports Multimédias : Vidéos interactives, documents PDF, annales d'examens",
      "Mises à Jour Régulières : Contenus pédagogiques actualisés"
    ],
    "about.features.virtualClassroom": "Espace Salle de Classe Virtuelle",
    "about.features.virtualClassroom.desc": [
      "Cours en Direct : Sessions de visioconférence en direct",
      "Relecture des Cours : Accès aux enregistrements",
      "Outils d'Interaction : Chat en direct, questions-réponses"
    ],
    "about.features.experience": "Personnalisation de l'Expérience",
    "about.features.experience.desc": [
      "Niveaux d'études Disponibles : Collège, Lycée, Université, et Professionnel",
      "Collège : 6ème, 5ème, 4ème, 3ème",
      "Lycée : 2nde, 1ère, Terminale",
      "Université : Niveau I, Niveau II, Niveau III",
      "Professionnel : But personnalisé (exemple : compétences techniques, management, etc.)"
    ],
    "about.features.subscriptions": "Abonnements Adaptés",
    "about.features.subscriptions.desc": [
      "Basic : Accès aux cours de base et supports limités",
      "Standard : Accès à des cours supplémentaires et outils collaboratifs",
      "Premium : Accès complet à tous les cours, aux visioconférences, et aux ressources exclusives"
    ],
    "about.features.payments": "Paiements Sécurisés",
    "about.features.payments.desc": [
      "Intégration des paiements mobiles via MTN Money et Orange Money",
      "Notifications instantanées pour les paiements réussis",
      "Gestion facile des abonnements (renouvellements, annulations, etc.)"
    ],
    "about.features.support": "Assistance Personnalisée",
    "about.features.support.desc": [
      "Chat en Direct : Un support réactif pour répondre à vos questions",
      "FAQ et Guides : Une base de connaissances complète pour vous accompagner"
    ],
    "about.howItWorks.title": "Comment Ça Marche ?",
    "about.howItWorks.registration": "Inscription Facile",
    "about.howItWorks.steps": [
      "Créez un compte en fournissant vos informations",
      "Recevez un email de confirmation",
      "Choisissez votre abonnement",
      "Accédez à vos cours",
      "Participez aux sessions live"
    ],
    "about.conclusion": "ClassConnect n'est pas juste une plateforme, c'est une révolution dans l'éducation. Rejoignez-nous pour transformer votre façon d'apprendre et atteindre vos objectifs académiques ou professionnels."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): TranslationValue => {
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