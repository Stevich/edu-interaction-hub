import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { RegisterDialog } from "@/components/auth/RegisterDialog";
import { useAuth } from "@/components/auth/AuthProvider";
import { UserCircle2, Menu, X, BookOpen, LogIn, UserPlus } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-[#0EA5E9]" />
              <span className="text-2xl font-bold text-[#0EA5E9]">ClassConnect</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin/dashboard">
                    <Button variant="ghost">Tableau de bord Admin</Button>
                  </Link>
                )}
                <div className="flex items-center space-x-2">
                  <UserCircle2 className="h-6 w-6" />
                  <span>{user.email}</span>
                </div>
                <Button onClick={handleSignOut} variant="outline">
                  Déconnexion
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center gap-2"
                >
                  <LogIn className="h-4 w-4" />
                  Se connecter
                </Button>
                <Button 
                  variant="default" 
                  onClick={() => setIsRegisterOpen(true)}
                  className="flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7]"
                >
                  <UserPlus className="h-4 w-4" />
                  S'inscrire
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {user ? (
              <>
                {isAdmin && (
                  <Link
                    to="/admin/dashboard"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                  >
                    Tableau de bord Admin
                  </Link>
                )}
                <div className="px-3 py-2 flex items-center space-x-2">
                  <UserCircle2 className="h-6 w-6" />
                  <span>{user.email}</span>
                </div>
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  className="w-full"
                >
                  Déconnexion
                </Button>
              </>
            ) : (
              <div className="space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => setIsLoginOpen(true)}
                >
                  <LogIn className="h-4 w-4" />
                  Se connecter
                </Button>
                <Button 
                  variant="default" 
                  className="w-full flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7]"
                  onClick={() => setIsRegisterOpen(true)}
                >
                  <UserPlus className="h-4 w-4" />
                  S'inscrire
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
      
      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
      <RegisterDialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen} />
    </nav>
  );
};