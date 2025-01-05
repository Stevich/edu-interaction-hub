import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RegisterDialogProps } from "./types/register";
import { useRegisterForm } from "./hooks/useRegisterForm";

export const RegisterDialog = ({ open, onOpenChange }: RegisterDialogProps) => {
  const {
    formData,
    isLoading,
    handleSubmit,
    handleChange,
    handleSelectChange,
  } = useRegisterForm(() => onOpenChange(false));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 rounded-full bg-blue-100">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-center">
              Rejoignez ClassConnect
            </DialogTitle>
            <p className="text-sm text-gray-500 text-center">
              Créez votre compte pour commencer votre parcours d'apprentissage
            </p>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="border-blue-200 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="border-blue-200 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label>Rôle</Label>
            <Select 
              onValueChange={handleSelectChange}
              disabled={isLoading}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un rôle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">Utilisateur</SelectItem>
                <SelectItem value="admin">Administrateur</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="border-blue-200 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="border-blue-200 focus:border-blue-400"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : null}
            S'inscrire
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};