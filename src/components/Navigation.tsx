import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { RegisterDialog } from "@/components/auth/RegisterDialog";
import { useAuth } from "@/components/auth/AuthProvider";
import { UserCircle2, Menu, X, BookOpen, Globe, LogIn, UserPlus } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/use-language";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const isMobile = useIsMobile();
  const { language, setLanguage, t } = useLanguage();

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
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-primary">ClassConnect</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage("fr")}>
                  Français {language === "fr" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English {language === "en" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin/dashboard">
                    <Button variant="ghost">Admin Dashboard</Button>
                  </Link>
                )}
                <div className="flex items-center space-x-2">
                  <UserCircle2 className="h-6 w-6" />
                  <span>{user.email}</span>
                </div>
                <Button onClick={handleSignOut} variant="outline">
                  Sign Out
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
                  {t("nav.login")}
                </Button>
                <Button 
                  variant="default" 
                  onClick={() => setIsRegisterOpen(true)}
                  className="flex items-center gap-2"
                >
                  <UserPlus className="h-4 w-4" />
                  {t("nav.register")}
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage("fr")}>
                  Français {language === "fr" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English {language === "en" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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

      {/* Mobile menu */}
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
                    Admin Dashboard
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
                  Sign Out
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
                  {t("nav.login")}
                </Button>
                <Button 
                  variant="default" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => setIsRegisterOpen(true)}
                >
                  <UserPlus className="h-4 w-4" />
                  {t("nav.register")}
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