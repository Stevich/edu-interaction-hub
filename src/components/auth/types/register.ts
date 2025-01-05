export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export interface RegisterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}