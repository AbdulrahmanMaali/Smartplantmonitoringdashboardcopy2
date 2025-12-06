import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Lightbulb, AlertTriangle, TrendingUp, Info } from "lucide-react";

export function InsightsCard({ insights }) {
  const getIcon = (type) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5" />;
      case "tip":
        return <Lightbulb className="h-5 w-5" />;
      case "trend":
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const getColors = (type) => {
    switch (type) {
      case "warning":
        return {
          bg: "bg-yellow-500/10",
          border: "border-yellow-400/30",
          icon: "text-yellow-400",
          badge: "bg-yellow-500/20 border-yellow-400/30 text-yellow-300",
        };
      case "tip":
        return {
          bg: "bg-emerald-500/10",
          border: "border-emerald-400/30",
          icon: "text-emerald-400",
          badge: "bg-emerald-500/20 border-emerald-400/30 text-emerald-300",
        };
      case "trend":
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-400/30",
          icon: "text-blue-400",
          badge: "bg-blue-500/20 border-blue-400/30 text-blue-300",
        };
      default:
        return {
          bg: "bg-purple-500/10",
          border: "border-purple-400/30",
          icon: "text-purple-400",
          badge: "bg-purple-500/20 border-purple-400/30 text-purple-300",
        };
    }
  };

  return (
    <div className="space-y-4">
      {insights.map((insight, index) => {
        const colors = getColors(insight.type);
        return (
          <Card
            key={index}
            className={`glass-card border-white/10 hover:bg-white/8 transition-all duration-300`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
                  <div className={colors.icon}>{getIcon(insight.type)}</div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-white/90">{insight.title}</h4>
                    <Badge className={`${colors.badge} backdrop-blur-sm text-xs`}>
                      {insight.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-white/70">{insight.message}</p>
                  {insight.action && (
                    <button className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                      {insight.action} →
                    </button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
