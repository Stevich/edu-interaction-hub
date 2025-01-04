import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">ClassConnect</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-secondary transition-colors">Cours</a>
          <a href="#" className="hover:text-secondary transition-colors">Abonnements</a>
          <a href="#" className="hover:text-secondary transition-colors">Forum</a>
          <Button variant="secondary">Se connecter</Button>
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-primary p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-secondary transition-colors">Cours</a>
            <a href="#" className="hover:text-secondary transition-colors">Abonnements</a>
            <a href="#" className="hover:text-secondary transition-colors">Forum</a>
            <Button variant="secondary" className="w-full">Se connecter</Button>
          </div>
        </div>
      )}
    </nav>
  );
};