import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";

interface AboutContentProps {
  onClose: () => void;
}

export const AboutContent = ({ onClose }: AboutContentProps) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Button
          variant="ghost"
          onClick={onClose}
          className="mb-6 hover:bg-blue-50"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        <div className="space-y-12">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Bienvenue sur ClassConnect
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              La plateforme d'apprentissage en ligne conçue pour révolutionner l'éducation en Afrique et au-delà.
            </p>
          </motion.div>

          <motion.section {...fadeIn} className="space-y-6">
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
                src="/placeholder.svg" 
                alt="Plateforme d'apprentissage"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.section>

          <motion.section {...fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Principales Fonctionnalités</h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Gestion des cours"
                  className="rounded-lg shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Gestion des Cours</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Cours Structurés : Des cours bien organisés selon le niveau d'études</li>
                    <li>• Supports Multimédias : Vidéos interactives, documents PDF, annales d'examens</li>
                    <li>• Mises à Jour Régulières : Contenus pédagogiques actualisés</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Espace Salle de Classe Virtuelle</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Cours en Direct : Sessions de visioconférence en direct</li>
                    <li>• Relecture des Cours : Accès aux enregistrements</li>
                    <li>• Outils d'Interaction : Chat en direct, questions-réponses</li>
                  </ul>
                </div>
                <img 
                  src="/placeholder.svg" 
                  alt="Salle de classe virtuelle"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Personnalisation de l'expérience"
                  className="rounded-lg shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Personnalisation de l'Expérience</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Niveaux d’études Disponibles : Collège, Lycée, Université, et Professionnel.</li>
                    <li>• Collège : 6ème, 5ème, 4ème, 3ème.</li>
                    <li>• Lycée : 2nde, 1ère, Terminale.</li>
                    <li>• Université : Niveau I, Niveau II, Niveau III.</li>
                    <li>• Professionnel : But personnalisé (exemple : compétences techniques, management, etc.).</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Abonnements Adaptés</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Basic : Accès aux cours de base et supports limités.</li>
                    <li>• Standard : Accès à des cours supplémentaires et outils collaboratifs.</li>
                    <li>• Premium : Accès complet à tous les cours, aux visioconférences, et aux ressources exclusives.</li>
                  </ul>
                </div>
                <img 
                  src="/placeholder.svg" 
                  alt="Abonnements adaptés"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Paiements sécurisés"
                  className="rounded-lg shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Paiements Sécurisés</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Intégration des paiements mobiles via MTN Money et Orange Money.</li>
                    <li>• Notifications instantanées pour les paiements réussis.</li>
                    <li>• Gestion facile des abonnements (renouvellements, annulations, etc.).</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Assistance Personnalisée</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Chat en Direct : Un support réactif pour répondre à vos questions.</li>
                    <li>• FAQ et Guides : Une base de connaissances complète pour vous accompagner.</li>
                  </ul>
                </div>
                <img 
                  src="/placeholder.svg" 
                  alt="Assistance personnalisée"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Comment Ça Marche ?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="/placeholder.svg" 
                alt="Processus d'inscription"
                className="rounded-lg shadow-lg"
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

          <motion.section {...fadeIn} className="text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              ClassConnect n'est pas juste une plateforme, c'est une révolution dans l'éducation. 
              Rejoignez-nous pour transformer votre façon d'apprendre et atteindre vos objectifs académiques ou professionnels.
            </p>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};
