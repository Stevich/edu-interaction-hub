import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { RegisterFormData } from "../types/register";

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

    setIsLoading(true);

    try {
      console.log("Tentative d'inscription avec:", { email: formData.email, role: formData.role });
      
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            role: formData.role,
          }
        }
      });

      if (error) {
        console.error("Erreur lors de l'inscription:", error);
        let errorMessage = "Une erreur est survenue lors de l'inscription";
        
        if (error.message === "User already registered") {
          errorMessage = "Un compte existe déjà avec cet email. Veuillez vous connecter ou utiliser une autre adresse email.";
        }
        
        toast({
          title: "Erreur lors de l'inscription",
          description: errorMessage,
          variant: "destructive",
        });
        return;
      }

      if (!data.user) {
        throw new Error("Erreur lors de la création de l'utilisateur");
      }

      const { error: updateError } = await supabase
        .from('users')
        .update({ role: formData.role })
        .eq('id', data.user.id);

      if (updateError) {
        console.error("Erreur lors de la mise à jour du rôle:", updateError);
        throw updateError;
      }

      toast({
        title: "Inscription réussie",
        description: "Votre compte a été créé avec succès! Vous pouvez maintenant vous connecter.",
      });
      onSuccess();
    } catch (error: any) {
      console.error("Erreur complète:", error);
      toast({
        title: "Erreur lors de l'inscription",
        description: "Une erreur est survenue lors de l'inscription",
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