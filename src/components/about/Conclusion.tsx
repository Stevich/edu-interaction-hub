import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export const Conclusion = () => {
  const { t } = useLanguage();
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="text-xl text-gray-600 leading-relaxed">
        {t("about.conclusion")}
      </p>
    </motion.section>
  );
};