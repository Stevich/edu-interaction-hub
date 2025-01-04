import { motion } from "framer-motion";

export const HowItWorks = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-900">Comment Ça Marche ?</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Processus d'inscription"
          className="rounded-lg shadow-lg w-full h-[300px] object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inscription Facile</h3>
          <ul className="space-y-3 text-gray-600">
            <li>1. Créez un compte en fournissant vos informations</li>
            <li>2. Recevez un email de confirmation</li>
            <li>3. Choisissez votre abonnement</li>
            <li>4. Accédez à vos cours</li>
            <li>5. Participez aux sessions live</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};