import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Droplets, Thermometer, Sun, Edit, Eye } from "lucide-react";

export function PlantCard({ plant, onViewDetails, onEdit }) {
  const healthColors = {
    excellent: "bg-emerald-500",
    good: "bg-green-500",
    warning: "bg-yellow-500",
    critical: "bg-red-500",
  };

  const healthLabels = {
    excellent: "Excellent",
    good: "Good",
    warning: "Needs Care",
    critical: "Critical",
  };

  const healthVariants = {
    excellent: "default",
    good: "default",
    warning: "outline",
    critical: "destructive",
  };

  return (
    <Card className="glass-card glass-hover border-white/10 overflow-hidden">
      {/* Plant Image */}
      <div className="relative h-48 bg-gradient-to-br from-emerald-500/10 to-green-600/10 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className={`w-3 h-3 rounded-full ${healthColors[plant.health]} shadow-lg`}>
            <div className={`w-3 h-3 rounded-full ${healthColors[plant.health]} animate-ping absolute`}></div>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant={healthVariants[plant.health]} className="backdrop-blur-sm">
            {healthLabels[plant.health]}
          </Badge>
        </div>
      </div>

      {/* Plant Info */}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-white/90">{plant.name}</h3>
            <p className="text-sm text-white/50 mt-1">{plant.category}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center p-2 rounded-lg bg-white/5">
            <Droplets className="h-4 w-4 text-blue-400 mb-1" />
            <span className="text-xs text-white/60">Moisture</span>
            <span className="text-sm text-white/90">{plant.moisture}%</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-white/5">
            <Thermometer className="h-4 w-4 text-orange-400 mb-1" />
            <span className="text-xs text-white/60">Temp</span>
            <span className="text-sm text-white/90">{plant.temperature}°C</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-white/5">
            <Sun className="h-4 w-4 text-yellow-400 mb-1" />
            <span className="text-xs text-white/60">Light</span>
            <span className="text-sm text-white/90">{plant.light}</span>
          </div>
        </div>

        {/* Growth Stage */}
        <div className="mt-3 p-2 rounded-lg bg-white/5">
          <span className="text-xs text-white/60">Growth Stage: </span>
          <span className="text-sm text-white/90">{plant.growthStage}</span>
        </div>
      </CardContent>

      <CardFooter className="gap-2 pt-0">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 glass border-white/20 hover:border-white/30 text-white/80 backdrop-blur-sm transition-all duration-300"
          onClick={() => onViewDetails(plant)}
        >
          <Eye className="h-4 w-4 mr-1" />
          View
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 glass border-white/20 hover:border-white/30 text-white/80 backdrop-blur-sm transition-all duration-300"
          onClick={() => onEdit(plant)}
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
