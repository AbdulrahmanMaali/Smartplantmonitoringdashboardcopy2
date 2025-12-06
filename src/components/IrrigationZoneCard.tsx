import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Droplets, Play, CheckCircle2, XCircle } from "lucide-react";

export function IrrigationZoneCard({ zone, onToggle, onRunNow }) {
  const getMoistureStatus = () => {
    if (zone.moisture >= 60) return { color: "text-emerald-400", bg: "bg-emerald-500/20" };
    if (zone.moisture >= 40) return { color: "text-yellow-400", bg: "bg-yellow-500/20" };
    return { color: "text-red-400", bg: "bg-red-500/20" };
  };

  const status = getMoistureStatus();

  return (
    <Card className="glass-card border-white/10">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${status.bg}`}>
              <Droplets className={`h-5 w-5 ${status.color}`} />
            </div>
            <div>
              <CardTitle className="text-base text-white/90">{zone.name}</CardTitle>
              <p className="text-xs text-white/50 mt-0.5">{zone.location}</p>
            </div>
          </div>
          <Switch
            checked={zone.active}
            onCheckedChange={() => onToggle(zone.id)}
            className="data-[state=checked]:bg-emerald-500"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Moisture Level */}
        <div className="p-3 rounded-lg bg-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/60">Soil Moisture</span>
            <span className={`text-sm ${status.color}`}>{zone.moisture}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                zone.moisture >= 60
                  ? "bg-emerald-400"
                  : zone.moisture >= 40
                  ? "bg-yellow-400"
                  : "bg-red-400"
              }`}
              style={{ width: `${zone.moisture}%` }}
            ></div>
          </div>
        </div>

        {/* Valve Status */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
          <span className="text-sm text-white/70">Valve Status</span>
          <Badge
            variant={zone.valveOpen ? "default" : "secondary"}
            className={`backdrop-blur-sm ${
              zone.valveOpen
                ? "bg-blue-500/20 border-blue-400/30 text-blue-300"
                : "bg-white/10 text-white/70"
            }`}
          >
            {zone.valveOpen ? (
              <>
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Open
              </>
            ) : (
              <>
                <XCircle className="h-3 w-3 mr-1" />
                Closed
              </>
            )}
          </Badge>
        </div>

        {/* Last Irrigation */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
          <span className="text-sm text-white/70">Last Watered</span>
          <span className="text-sm text-white/90">{zone.lastIrrigation}</span>
        </div>

        {/* Run Now Button */}
        <Button
          onClick={() => onRunNow(zone.id)}
          disabled={zone.valveOpen || !zone.active}
          className="w-full glass border-white/20 hover:border-emerald-400/50 text-white/80 hover:text-emerald-300 backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          variant="outline"
        >
          <Play className="h-4 w-4 mr-2" />
          Run Now
        </Button>
      </CardContent>
    </Card>
  );
}
