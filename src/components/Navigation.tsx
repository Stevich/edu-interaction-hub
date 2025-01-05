import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { RegisterDialog } from "@/components/auth/RegisterDialog";
import { BookOpen, LogIn, UserPlus } from "lucide-react";

export const Navigation = () => {
  const { user, isAdmin } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-blue-600">ClassConnect</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {isAdmin && (
                <Link
                  to="/admin/dashboard"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Admin
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => setLoginOpen(true)}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Se connecter
            </Button>
            <Button 
              onClick={() => setRegisterOpen(true)}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              S'inscrire
            </Button>
            <LoginDialog 
              open={loginOpen} 
              onOpenChange={setLoginOpen}
            />
            <RegisterDialog 
              open={registerOpen} 
              onOpenChange={setRegisterOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};