import { motion } from "framer-motion";

export const Introduction = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Bienvenue sur ClassConnect
      </h1>
      <p className="text-xl text-gray-600 leading-relaxed">
        La plateforme d'apprentissage en ligne conçue pour révolutionner l'éducation en Afrique et au-delà.
      </p>
    </motion.div>
  );
};