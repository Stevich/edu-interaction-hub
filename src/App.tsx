import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { LanguageProvider } from "@/hooks/use-language";
import Index from "@/pages/Index";
import "./App.css";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AuthProvider>
          <Index />
          <Toaster />
        </AuthProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;