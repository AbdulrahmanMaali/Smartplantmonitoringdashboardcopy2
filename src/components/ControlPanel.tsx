import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Droplets, Power, RefreshCw } from "lucide-react";
import { useState } from "react";

export function ControlPanel() {
  const [irrigationOn, setIrrigationOn] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleIrrigation = () => {
    setIrrigationOn(!irrigationOn);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <Card className="glass-card border-white/10">
      <CardHeader>
        <CardTitle className="text-sm text-white/90">Manual Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          className={`w-full transition-all duration-300 hover:scale-[1.02] ${
            irrigationOn 
              ? "bg-blue-500/20 hover:bg-blue-500/30 border-blue-400/50 text-blue-300" 
              : "glass border-white/20 hover:border-white/30 text-white/80"
          } backdrop-blur-sm`}
          variant={irrigationOn ? "default" : "outline"}
          onClick={handleIrrigation}
        >
          <Droplets className="mr-2 h-4 w-4" />
          {irrigationOn ? "Stop Irrigation" : "Start Irrigation"}
        </Button>
        <Button
          className="w-full transition-all duration-300 hover:scale-[1.02] glass border-white/20 hover:border-white/30 text-white/80 backdrop-blur-sm"
          variant="outline"
          onClick={handleRefresh}
          disabled={isRefreshing}
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh Sensors
        </Button>
        <Button
          className="w-full transition-all duration-300 hover:scale-[1.02] glass border-white/20 hover:border-white/30 text-white/80 backdrop-blur-sm"
          variant="secondary"
        >
          <Power className="mr-2 h-4 w-4" />
          System Settings
        </Button>
      </CardContent>
    </Card>
  );
}
