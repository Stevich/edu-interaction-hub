import { motion } from "framer-motion";

export const Conclusion = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="text-xl text-gray-600 leading-relaxed">
        ClassConnect n'est pas juste une plateforme, c'est une révolution dans l'éducation. 
        Rejoignez-nous pour transformer votre façon d'apprendre et atteindre vos objectifs académiques ou professionnels.
      </p>
    </motion.section>
  );
};