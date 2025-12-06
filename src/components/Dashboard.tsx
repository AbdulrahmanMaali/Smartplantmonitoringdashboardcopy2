import { useState, useEffect } from "react";
import { SensorCard } from "./SensorCard";
import { PlantHealthIndicator } from "./PlantHealthIndicator";
import { MoistureChart } from "./MoistureChart";
import { SystemStatus } from "./SystemStatus";
import { ControlPanel } from "./ControlPanel";
import { NotificationPanel } from "./NotificationPanel";
import { Droplets, Thermometer, Sun, Sprout } from "lucide-react";

// Generate mock historical data
const generateMockData = () => {
  const data = [];
  const now = new Date();
  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    data.push({
      time: `${time.getHours()}:00`,
      moisture: Math.floor(Math.random() * 30) + 50, // 50-80%
    });
  }
  return data;
};

const initialNotifications = [
  {
    id: 1,
    type: "warning",
    title: "Low Soil Moisture",
    message: "Soil moisture has dropped to 45%. Watering recommended.",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    type: "info",
    title: "Optimal Light Level",
    message: "Light intensity is at optimal levels for plant growth.",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    type: "success",
    title: "AI Analysis Complete",
    message: "Plant health analysis completed. Overall status: Good.",
    timestamp: "3 hours ago",
  },
];

export function Dashboard() {
  const [sensorData, setSensorData] = useState({
    moisture: 65,
    temperature: 22,
    light: 8500,
  });

  const [historicalData] = useState(generateMockData());
  const [notifications] = useState(initialNotifications);

  // Simulate real-time sensor updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData((prev) => ({
        moisture: Math.max(40, Math.min(80, prev.moisture + (Math.random() - 0.5) * 2)),
        temperature: Math.max(18, Math.min(26, prev.temperature + (Math.random() - 0.5) * 0.5)),
        light: Math.max(5000, Math.min(12000, prev.light + (Math.random() - 0.5) * 500)),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Determine plant health based on sensor data
  const getPlantHealth = () => {
    if (sensorData.moisture >= 60 && sensorData.temperature >= 20 && sensorData.temperature <= 24) {
      return { status: "excellent", score: 95 };
    } else if (sensorData.moisture >= 50 && sensorData.temperature >= 18 && sensorData.temperature <= 26) {
      return { status: "good", score: 78 };
    } else if (sensorData.moisture >= 40) {
      return { status: "warning", score: 55 };
    }
    return { status: "critical", score: 30 };
  };

  const plantHealth = getPlantHealth();
  const currentTime = new Date().toLocaleTimeString();

  const getMoistureStatus = () => {
    if (sensorData.moisture >= 60) return "good";
    if (sensorData.moisture >= 45) return "warning";
    return "critical";
  };

  const getTempStatus = () => {
    if (sensorData.temperature >= 20 && sensorData.temperature <= 24) return "good";
    if (sensorData.temperature >= 18 && sensorData.temperature <= 26) return "warning";
    return "critical";
  };

  const getLightStatus = () => {
    if (sensorData.light >= 7000 && sensorData.light <= 10000) return "good";
    if (sensorData.light >= 5000 && sensorData.light <= 12000) return "warning";
    return "critical";
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 glass-card p-6 border-white/10">
          <div className="relative p-3 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl backdrop-blur-sm border border-emerald-400/30">
            <Sprout className="h-10 w-10 text-emerald-400" />
            <div className="absolute inset-0 bg-emerald-400/10 blur-xl rounded-2xl"></div>
          </div>
          <div>
            <h1 className="text-3xl bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Smart Plant Monitor</h1>
            <p className="text-white/60">Real-time plant health monitoring system</p>
          </div>
        </div>

        {/* Top Row - Sensor Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SensorCard
            title="Soil Moisture"
            value={sensorData.moisture.toFixed(1)}
            unit="%"
            icon={Droplets}
            status={getMoistureStatus()}
            subtitle="Target: 60-75%"
          />
          <SensorCard
            title="Temperature"
            value={sensorData.temperature.toFixed(1)}
            unit="°C"
            icon={Thermometer}
            status={getTempStatus()}
            subtitle="Target: 20-24°C"
          />
          <SensorCard
            title="Light Intensity"
            value={sensorData.light.toFixed(0)}
            unit="lux"
            icon={Sun}
            status={getLightStatus()}
            subtitle="Target: 7000-10000 lux"
          />
          <PlantHealthIndicator status={plantHealth.status} score={plantHealth.score} />
        </div>

        {/* Middle Row - Chart and System Info */}
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MoistureChart data={historicalData} />
          </div>
          <div className="space-y-4">
            <SystemStatus isOnline={true} aiRunning={true} lastUpdate={currentTime} />
            <ControlPanel />
          </div>
        </div>

        {/* Bottom Row - Notifications */}
        <NotificationPanel notifications={notifications} />
      </div>
    </div>
  );
}
