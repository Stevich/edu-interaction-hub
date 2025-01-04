import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export const Introduction = () => {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t("about.title")}
      </h1>
      <p className="text-xl text-gray-600 leading-relaxed">
        {t("about.subtitle")}
      </p>
    </motion.div>
  );
};