import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export const HowItWorks = () => {
  const { t } = useLanguage();
  const steps = t("about.howItWorks.steps");
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-900">{t("about.howItWorks.title")}</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Processus d'inscription"
          className="rounded-lg shadow-lg w-full h-[300px] object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {t("about.howItWorks.registration")}
          </h3>
          <ul className="space-y-3 text-gray-600">
            {Array.isArray(steps) && steps.map((step: string, index: number) => (
              <li key={index}>{index + 1}. {step}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};