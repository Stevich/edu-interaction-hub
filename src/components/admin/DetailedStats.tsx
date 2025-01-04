import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const data = [
  { name: "Jan", users: 4 },
  { name: "Fév", users: 8 },
  { name: "Mar", users: 15 },
  { name: "Avr", users: 25 },
  { name: "Mai", users: 32 },
  { name: "Juin", users: 40 },
];

export const DetailedStats = () => {
  const { data: userCount } = useQuery({
    queryKey: ["userCount"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("users")
        .select("*", { count: "exact" });

      if (error) {
        console.error("Error fetching user count:", error);
        throw error;
      }

      return count;
    },
  });

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-lg font-medium">Utilisateurs Total</h3>
          <p className="text-3xl font-bold mt-2">{userCount || 0}</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium">Cours Actifs</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium">Revenus Mensuels</h3>
          <p className="text-3xl font-bold mt-2">0€</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium">Taux de Conversion</h3>
          <p className="text-3xl font-bold mt-2">0%</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Croissance des Utilisateurs</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#0EA5E9"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};