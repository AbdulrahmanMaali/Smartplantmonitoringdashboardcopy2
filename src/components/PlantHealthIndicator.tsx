import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Leaf } from "lucide-react";

interface PlantHealthIndicatorProps {
  status: "excellent" | "good" | "warning" | "critical";
  score: number;
}

export function PlantHealthIndicator({ status, score }: PlantHealthIndicatorProps) {
  const statusConfig = {
    excellent: {
      label: "Excellent",
      color: "bg-green-500",
      badgeVariant: "default" as const,
      description: "Plant is thriving",
    },
    good: {
      label: "Good",
      color: "bg-blue-500",
      badgeVariant: "secondary" as const,
      description: "Plant is healthy",
    },
    warning: {
      label: "Warning",
      color: "bg-yellow-500",
      badgeVariant: "outline" as const,
      description: "Needs attention",
    },
    critical: {
      label: "Critical",
      color: "bg-red-500",
      badgeVariant: "destructive" as const,
      description: "Immediate action required",
    },
  };

  const config = statusConfig[status];

  return (
    <Card className="glass-card glass-hover border-white/10">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm text-white/90">Plant Health</CardTitle>
        <div className="p-2 rounded-lg bg-emerald-500/20">
          <Leaf className="h-5 w-5 text-emerald-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{score}</span>
            </div>
            <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${config.color} rounded-full border-2 border-background shadow-lg`}></div>
          </div>
          <div className="flex flex-col gap-2">
            <Badge variant={config.badgeVariant} className="backdrop-blur-sm">{config.label}</Badge>
            <p className="text-xs text-white/60">{config.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
