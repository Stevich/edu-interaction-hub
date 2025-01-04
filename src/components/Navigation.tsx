import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, LogIn, LogOut, UserPlus } from "lucide-react";
import { LoginDialog } from "./auth/LoginDialog";
import { RegisterDialog } from "./auth/RegisterDialog";
import { useAuth } from "./auth/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";

export const Navigation = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);
  const { session } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Déconnexion réussie",
        description: "À bientôt sur ClassConnect!",
      });
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de la déconnexion",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900 font-inter">ClassConnect</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {session ? (
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Se déconnecter
            </Button>
          ) : (
            <>
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setShowLoginDialog(true)}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Se connecter
              </Button>
              <Button 
                variant="default" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => setShowRegisterDialog(true)}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                S'inscrire
              </Button>
            </>
          )}
        </div>
      </div>

      <LoginDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} />
      <RegisterDialog open={showRegisterDialog} onOpenChange={setShowRegisterDialog} />
    </nav>
  );
};