import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface SensorCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: LucideIcon;
  status?: "good" | "warning" | "critical";
  subtitle?: string;
}

export function SensorCard({ title, value, unit, icon: Icon, status, subtitle }: SensorCardProps) {
  const statusColors = {
    good: "text-green-500",
    warning: "text-yellow-500",
    critical: "text-red-500",
  };

  return (
    <Card className="glass-card glass-hover border-white/10">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm text-white/90">{title}</CardTitle>
        <div className={`p-2 rounded-lg ${status ? statusColors[status] : "text-muted-foreground"} bg-white/5`}>
          <Icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{value}</span>
          <span className="text-white/60">{unit}</span>
        </div>
        {subtitle && (
          <p className="text-xs text-white/50 mt-1">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}
