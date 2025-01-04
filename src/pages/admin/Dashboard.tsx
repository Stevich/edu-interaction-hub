import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminStats } from "@/components/admin/AdminStats";
import { toast } from "sonner";

const AdminDashboard = () => {
  const { session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      toast.error("Vous devez être connecté pour accéder au tableau de bord administrateur");
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="mt-2 text-gray-600">
            Bienvenue sur le tableau de bord administrateur de ClassConnect
          </p>
        </div>
        <AdminStats />
      </main>
    </div>
  );
};

export default AdminDashboard;