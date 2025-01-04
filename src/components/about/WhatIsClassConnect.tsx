import { motion } from "framer-motion";

export const WhatIsClassConnect = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-900">Qu'est-ce que ClassConnect ?</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-600 leading-relaxed">
            ClassConnect est une plateforme d'apprentissage en ligne dédiée aux collégiens, lycéens, universitaires et professionnels. Elle offre des outils modernes pour apprendre efficacement, suivre des cours, accéder à des ressources personnalisées, et interagir avec des enseignants ou des experts dans divers domaines.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Que vous soyez étudiant préparant un examen ou professionnel cherchant à acquérir de nouvelles compétences, ClassConnect est conçu pour vous accompagner dans votre parcours.
          </p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0276781c"
          alt="Plateforme d'apprentissage"
          className="rounded-lg shadow-lg w-full h-[300px] object-cover"
        />
      </div>
    </motion.section>
  );
};