import { useState, useEffect } from "react";
import { IrrigationZoneCard } from "./IrrigationZoneCard";
import { WaterUsageChart } from "./WaterUsageChart";
import { IrrigationSchedule } from "./IrrigationSchedule";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Droplets, Wifi, WifiOff, Brain, Zap } from "lucide-react";

const mockZones = [
  {
    id: 1,
    name: "Zone 1",
    location: "North Greenhouse",
    active: true,
    moisture: 68,
    valveOpen: false,
    lastIrrigation: "2h ago",
  },
  {
    id: 2,
    name: "Zone 2",
    location: "South Greenhouse",
    active: true,
    moisture: 45,
    valveOpen: false,
    lastIrrigation: "5h ago",
  },
  {
    id: 3,
    name: "Zone 3",
    location: "East Field",
    active: false,
    moisture: 72,
    valveOpen: false,
    lastIrrigation: "1h ago",
  },
  {
    id: 4,
    name: "Zone 4",
    location: "West Field",
    active: true,
    moisture: 35,
    valveOpen: true,
    lastIrrigation: "Just now",
  },
];

const mockWaterUsage = [
  { day: "Mon", usage: 245 },
  { day: "Tue", usage: 312 },
  { day: "Wed", usage: 278 },
  { day: "Thu", usage: 295 },
  { day: "Fri", usage: 321 },
  { day: "Sat", usage: 289 },
  { day: "Sun", usage: 267 },
];

const mockSchedules = [
  {
    time: "06:00",
    duration: 15,
    zones: ["Zone 1", "Zone 2"],
    repeat: "Daily",
  },
  {
    time: "14:00",
    duration: 20,
    zones: ["Zone 3", "Zone 4"],
    repeat: "Daily",
  },
  {
    time: "18:30",
    duration: 10,
    zones: ["Zone 1", "Zone 3"],
    repeat: "Mon, Wed, Fri",
  },
  {
    time: "21:00",
    duration: 12,
    zones: ["Zone 2", "Zone 4"],
    repeat: "Tue, Thu, Sat",
  },
];

export function IrrigationControl() {
  const [zones, setZones] = useState(mockZones);
  const [aiMode, setAiMode] = useState(true);
  const [systemOnline, setSystemOnline] = useState(true);
  const [lastSync, setLastSync] = useState(new Date());

  // Update last sync time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setLastSync(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleZoneToggle = (zoneId) => {
    setZones(
      zones.map((zone) =>
        zone.id === zoneId ? { ...zone, active: !zone.active } : zone
      )
    );
  };

  const handleRunNow = (zoneId) => {
    console.log("Running irrigation for zone:", zoneId);
    setZones(
      zones.map((zone) =>
        zone.id === zoneId
          ? { ...zone, valveOpen: true, lastIrrigation: "Just now" }
          : zone
      )
    );
    // Simulate closing valve after 5 seconds
    setTimeout(() => {
      setZones((prevZones) =>
        prevZones.map((zone) =>
          zone.id === zoneId ? { ...zone, valveOpen: false } : zone
        )
      );
    }, 5000);
  };

  const getLastSyncText = () => {
    const now = new Date();
    const diff = Math.floor((now - lastSync) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return `${Math.floor(diff / 3600)}h ago`;
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Bar */}
        <Card className="glass-card border-white/10 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative p-3 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-2xl backdrop-blur-sm border border-blue-400/30">
                <Droplets className="h-10 w-10 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400/10 blur-xl rounded-2xl"></div>
              </div>
              <div>
                <h1 className="text-3xl bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Irrigation Control
                </h1>
                <p className="text-white/60 mt-1">Smart watering management system</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end">
                  {systemOnline ? (
                    <>
                      <Wifi className="h-4 w-4 text-emerald-400" />
                      <Badge className="bg-emerald-500/20 border-emerald-400/30 text-emerald-300 backdrop-blur-sm">
                        Online
                      </Badge>
                    </>
                  ) : (
                    <>
                      <WifiOff className="h-4 w-4 text-red-400" />
                      <Badge className="bg-red-500/20 border-red-400/30 text-red-300 backdrop-blur-sm">
                        Offline
                      </Badge>
                    </>
                  )}
                </div>
                <p className="text-xs text-white/50 mt-1">
                  Last sync: {getLastSyncText()}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Mode Toggle */}
        <Card className="glass-card border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-xl backdrop-blur-sm border border-purple-400/30">
                <Brain className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <Label htmlFor="ai-mode" className="text-base text-white/90 cursor-pointer">
                  AI-Powered Irrigation
                </Label>
                <p className="text-sm text-white/60 mt-1">
                  Automatically optimize watering based on plant needs and weather
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {aiMode && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-400/30">
                  <Zap className="h-4 w-4 text-purple-300" />
                  <span className="text-sm text-purple-300">Active</span>
                </div>
              )}
              <Switch
                id="ai-mode"
                checked={aiMode}
                onCheckedChange={setAiMode}
                className="data-[state=checked]:bg-purple-500"
              />
            </div>
          </div>
        </Card>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Zone Controls */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl text-white/90 mb-4 flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-400" />
                Irrigation Zones
              </h2>
              <div className="grid gap-4">
                {zones.map((zone) => (
                  <IrrigationZoneCard
                    key={zone.id}
                    zone={zone}
                    onToggle={handleZoneToggle}
                    onRunNow={handleRunNow}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Charts and Schedule */}
          <div className="space-y-6">
            <WaterUsageChart data={mockWaterUsage} />
            <IrrigationSchedule schedules={mockSchedules} />
          </div>
        </div>
      </div>
    </div>
  );
}
