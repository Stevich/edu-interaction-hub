import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Shield, UserX } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

type User = {
  id: string;
  email: string;
  role: string;
  created_at: string;
};

export const UserManagement = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<string | null>(null);

  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching users:", error);
        throw error;
      }

      return data as User[];
    },
  });

  const updateUserRole = async (userId: string, newRole: string) => {
    try {
      setLoading(userId);
      const { error } = await supabase
        .from("users")
        .update({ role: newRole })
        .eq("id", userId);

      if (error) throw error;

      toast({
        title: "Rôle mis à jour",
        description: "Le rôle de l'utilisateur a été modifié avec succès.",
      });
      refetch();
    } catch (error) {
      console.error("Error updating user role:", error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le rôle de l'utilisateur.",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      setLoading(userId);
      const { error } = await supabase.auth.admin.deleteUser(userId);

      if (error) throw error;

      toast({
        title: "Utilisateur supprimé",
        description: "L'utilisateur a été supprimé avec succès.",
      });
      refetch();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'utilisateur.",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Gestion des Utilisateurs</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Rôle</TableHead>
            <TableHead>Date d'inscription</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role || "user"}</TableCell>
              <TableCell>
                {new Date(user.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    updateUserRole(
                      user.id,
                      user.role === "admin" ? "user" : "admin"
                    )
                  }
                  disabled={loading === user.id}
                >
                  <Shield className="h-4 w-4 mr-1" />
                  {user.role === "admin" ? "Retirer admin" : "Faire admin"}
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteUser(user.id)}
                  disabled={loading === user.id}
                >
                  <UserX className="h-4 w-4 mr-1" />
                  Supprimer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};