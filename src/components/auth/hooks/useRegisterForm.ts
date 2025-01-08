import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { RegisterFormData } from "../types/register";
import { User } from "@supabase/supabase-js";

export const useRegisterForm = (onSuccess: () => void) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Erreur",
        description: "Le mot de passe doit contenir au moins 6 caractères",
        variant: "destructive",
      });
      return;
    }

    if (!formData.role) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner un rôle",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log("Tentative d'inscription avec:", { 
        email: formData.email, 
        role: formData.role,
        name: formData.name 
      });

      // Vérifier si l'email existe déjà dans auth.users
      const { data: { users }, error: checkError } = await supabase.auth.admin.listUsers();
      
      if (checkError) {
        console.error("Erreur lors de la vérification de l'email:", checkError);
        throw checkError;
      }

      const emailExists = users?.some((user: User) => user.email === formData.email);
      
      if (emailExists) {
        toast({
          title: "Erreur",
          description: "Un compte existe déjà avec cet email. Veuillez vous connecter ou utiliser une autre adresse email.",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          }
        }
      });

      if (error) {
        console.error("Erreur lors de l'inscription:", error);
        
        if (error.message === "User already registered") {
          toast({
            title: "Erreur lors de l'inscription",
            description: "Un compte existe déjà avec cet email. Veuillez vous connecter ou utiliser une autre adresse email.",
            variant: "destructive",
          });
          return;
        }
        
        toast({
          title: "Erreur lors de l'inscription",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      if (!data.user) {
        throw new Error("Erreur lors de la création de l'utilisateur");
      }

      console.log("Utilisateur créé avec succès:", data.user);

      const { error: updateError } = await supabase
        .from('users')
        .update({ role: formData.role })
        .eq('id', data.user.id);

      if (updateError) {
        console.error("Erreur lors de la mise à jour du rôle:", updateError);
        throw updateError;
      }

      console.log("Rôle mis à jour avec succès");

      toast({
        title: "Inscription réussie",
        description: "Votre compte a été créé avec succès! Vous pouvez maintenant vous connecter.",
      });
      
      onSuccess();
    } catch (error: any) {
      console.error("Erreur complète:", error);
      toast({
        title: "Erreur lors de l'inscription",
        description: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      role: value,
    });
  };

  return {
    formData,
    isLoading,
    handleSubmit,
    handleChange,
    handleSelectChange,
  };
};