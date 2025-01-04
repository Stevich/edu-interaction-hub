import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { RegisterDialog } from "@/components/auth/RegisterDialog";

export const Navigation = () => {
  const { user, isAdmin, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              ClassConnect
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Accueil
              </Link>
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
            {user ? (
              <Button onClick={signOut} variant="outline">
                Déconnexion
              </Button>
            ) : (
              <>
                <LoginDialog />
                <RegisterDialog />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};