import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import { LoginDialog } from "./auth/LoginDialog";
import { RegisterDialog } from "./auth/RegisterDialog";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold font-inter">ClassConnect</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-blue-700"
            onClick={() => setShowLoginDialog(true)}
          >
            <LogIn className="mr-2 h-4 w-4" />
            Se connecter
          </Button>
          <Button 
            variant="secondary" 
            className="bg-white text-blue-600 hover:bg-white/90"
            onClick={() => setShowRegisterDialog(true)}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            S'inscrire
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-600 p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-blue-700 w-full justify-start"
              onClick={() => {
                setShowLoginDialog(true);
                setIsOpen(false);
              }}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Se connecter
            </Button>
            <Button 
              variant="secondary" 
              className="w-full bg-white text-blue-600 hover:bg-white/90 justify-start"
              onClick={() => {
                setShowRegisterDialog(true);
                setIsOpen(false);
              }}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              S'inscrire
            </Button>
          </div>
        </div>
      )}

      <LoginDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} />
      <RegisterDialog open={showRegisterDialog} onOpenChange={setShowRegisterDialog} />
    </nav>
  );
};