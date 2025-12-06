import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Cpu, Wifi, WifiOff, Brain } from "lucide-react";

interface SystemStatusProps {
  isOnline: boolean;
  aiRunning: boolean;
  lastUpdate: string;
}

export function SystemStatus({ isOnline, aiRunning, lastUpdate }: SystemStatusProps) {
  return (
    <Card className="glass-card border-white/10">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm text-white/90">System Status</CardTitle>
        <div className="p-2 rounded-lg bg-white/5">
          <Cpu className="h-5 w-5 text-blue-400" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <div className="flex items-center gap-2">
            {isOnline ? (
              <>
                <div className="relative">
                  <Wifi className="h-4 w-4 text-emerald-400" />
                  <div className="absolute inset-0 bg-emerald-400/20 blur-md rounded-full"></div>
                </div>
              </>
            ) : (
              <WifiOff className="h-4 w-4 text-red-400" />
            )}
            <span className="text-sm text-white/80">Connection</span>
          </div>
          <Badge variant={isOnline ? "default" : "destructive"} className="backdrop-blur-sm">
            {isOnline ? "Online" : "Offline"}
          </Badge>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Brain className="h-4 w-4 text-purple-400" />
              {aiRunning && <div className="absolute inset-0 bg-purple-400/20 blur-md rounded-full"></div>}
            </div>
            <span className="text-sm text-white/80">AI Monitor</span>
          </div>
          <Badge variant={aiRunning ? "default" : "secondary"} className="backdrop-blur-sm">
            {aiRunning ? "Running" : "Stopped"}
          </Badge>
        </div>
        <div className="pt-2 border-t border-white/10">
          <p className="text-xs text-white/50">
            Last update: {lastUpdate}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
