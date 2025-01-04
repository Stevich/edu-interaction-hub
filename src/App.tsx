import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "@/pages/Index";
import Dashboard from "@/pages/admin/Dashboard";
import Users from "@/pages/admin/Users";
import Stats from "@/pages/admin/Stats";
import Settings from "@/pages/admin/Settings";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/stats" element={<Stats />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;