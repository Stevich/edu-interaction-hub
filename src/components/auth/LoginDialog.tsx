import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { BookOpen } from "lucide-react";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === "admin@classconnect.com" && password === "admin123") {
      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur ClassConnect!",
      });
      onOpenChange(false);
    } else {
      toast({
        title: "Erreur de connexion",
        description: "Email ou mot de passe incorrect",
        variant: "destructive",
      });
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre adresse email",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Email envoyé",
      description: "Si un compte existe avec cette adresse, vous recevrez un email de réinitialisation.",
    });
    setIsResettingPassword(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 rounded-full bg-blue-100">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-center">
              {isResettingPassword ? "Réinitialiser le mot de passe" : "Bienvenue sur ClassConnect"}
            </DialogTitle>
            {!isResettingPassword && (
              <p className="text-sm text-gray-500 text-center">
                Connectez-vous pour accéder à votre espace d'apprentissage
              </p>
            )}
          </div>
        </DialogHeader>
        {isResettingPassword ? (
          <form onSubmit={handlePasswordReset} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="reset-email">Email</Label>
              <Input
                id="reset-email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-blue-200 focus:border-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Envoyer le lien de réinitialisation
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                className="w-full text-gray-600 hover:text-blue-600"
                onClick={() => setIsResettingPassword(false)}
              >
                Retour à la connexion
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-blue-200 focus:border-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-blue-200 focus:border-blue-400"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Se connecter
            </Button>
            <Button 
              type="button" 
              variant="link" 
              className="w-full text-blue-600 hover:text-blue-700"
              onClick={() => setIsResettingPassword(true)}
            >
              Mot de passe oublié ?
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};