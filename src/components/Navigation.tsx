import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#8B5CF6] to-[#9333EA] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">ClassConnect</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-[#E5DEFF] transition-colors">Cours</a>
          <a href="#" className="hover:text-[#E5DEFF] transition-colors">Abonnements</a>
          <a href="#" className="hover:text-[#E5DEFF] transition-colors">Forum</a>
          <Button variant="secondary" className="bg-white text-[#8B5CF6] hover:bg-white/90">
            Se connecter
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#8B5CF6] p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-[#E5DEFF] transition-colors">Cours</a>
            <a href="#" className="hover:text-[#E5DEFF] transition-colors">Abonnements</a>
            <a href="#" className="hover:text-[#E5DEFF] transition-colors">Forum</a>
            <Button variant="secondary" className="w-full bg-white text-[#8B5CF6] hover:bg-white/90">
              Se connecter
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};