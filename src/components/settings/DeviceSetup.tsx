import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Droplets, Thermometer, Sun, Plus, Trash2, Pencil, Wifi } from "lucide-react";

const initialDevices = [
  { id: 1, name: "Soil Sensor 1", type: "moisture", zone: "Zone 1", status: "online", lastUpdate: "2m ago" },
  { id: 2, name: "Soil Sensor 2", type: "moisture", zone: "Zone 2", status: "online", lastUpdate: "5m ago" },
  { id: 3, name: "Temperature Sensor 1", type: "temperature", zone: "Zone 1", status: "online", lastUpdate: "1m ago" },
  { id: 4, name: "Light Sensor 1", type: "light", zone: "Zone 3", status: "offline", lastUpdate: "2h ago" },
  { id: 5, name: "Light Sensor 2", type: "light", zone: "Zone 4", status: "online", lastUpdate: "3m ago" },
];

export function DeviceSetup() {
  const [devices, setDevices] = useState(initialDevices);

  const getIcon = (type) => {
    switch (type) {
      case "moisture":
        return <Droplets className="h-5 w-5 text-blue-400" />;
      case "temperature":
        return <Thermometer className="h-5 w-5 text-orange-400" />;
      case "light":
        return <Sun className="h-5 w-5 text-yellow-400" />;
      default:
        return null;
    }
  };

  const handleDelete = (id) => {
    setDevices(devices.filter((device) => device.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-white/90 mb-2">Device Setup</h2>
          <p className="text-white/60">Manage your sensors and devices</p>
        </div>
        <Button className="bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300 backdrop-blur-sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Device
        </Button>
      </div>

      {/* Device List */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-white/90">Connected Devices</CardTitle>
          <CardDescription className="text-white/60">
            {devices.length} devices connected
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {devices.map((device) => (
              <div
                key={device.id}
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-white/5">
                      {getIcon(device.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white/90">{device.name}</h4>
                        <Badge
                          variant={device.status === "online" ? "default" : "destructive"}
                          className={`backdrop-blur-sm text-xs ${
                            device.status === "online"
                              ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                              : "bg-red-500/20 border-red-400/30 text-red-300"
                          }`}
                        >
                          <Wifi className="h-3 w-3 mr-1" />
                          {device.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span>{device.zone}</span>
                        <span>•</span>
                        <span>Last update: {device.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass border-white/20 hover:border-blue-400/50 text-white/80 hover:text-blue-300 backdrop-blur-sm"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(device.id)}
                      className="glass border-white/20 hover:border-red-400/50 text-white/80 hover:text-red-300 backdrop-blur-sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add New Device */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-white/90">Add New Device</CardTitle>
          <CardDescription className="text-white/60">
            Configure a new sensor or device
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="deviceName" className="text-white/80">Device Name</Label>
              <Input
                id="deviceName"
                placeholder="e.g., Soil Sensor 3"
                className="glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deviceType" className="text-white/80">Device Type</Label>
              <Input
                id="deviceType"
                placeholder="e.g., Moisture, Temperature"
                className="glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="deviceZone" className="text-white/80">Assign to Zone</Label>
            <Input
              id="deviceZone"
              placeholder="e.g., Zone 1"
              className="glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
            />
          </div>
          <Button className="bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300 backdrop-blur-sm">
            Add Device
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
