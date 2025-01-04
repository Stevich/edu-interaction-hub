import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/components/auth/AuthProvider";
import Index from "@/pages/Index";
import Dashboard from "@/pages/admin/Dashboard";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;