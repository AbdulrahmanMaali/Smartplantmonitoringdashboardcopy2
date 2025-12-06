import { Card, CardContent, CardHeader } from "./ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export function KPICard({ title, value, unit, icon: Icon, trend, trendValue, comparison }) {
  const getTrendIcon = () => {
    if (trend === "up") return <TrendingUp className="h-4 w-4" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getTrendColor = () => {
    if (trend === "up") return "text-emerald-400";
    if (trend === "down") return "text-red-400";
    return "text-white/60";
  };

  return (
    <Card className="glass-card glass-hover border-white/10">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/60">{title}</span>
          <div className="p-2 rounded-lg bg-white/5">
            <Icon className="h-5 w-5 text-emerald-400" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
              {value}
            </span>
            <span className="text-white/60">{unit}</span>
          </div>
          {trend && (
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-1 ${getTrendColor()}`}>
                {getTrendIcon()}
                <span className="text-sm">{trendValue}</span>
              </div>
              {comparison && (
                <span className="text-xs text-white/50">{comparison}</span>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
