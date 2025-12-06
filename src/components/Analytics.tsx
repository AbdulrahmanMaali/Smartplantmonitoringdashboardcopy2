import { useState } from "react";
import { KPICard } from "./KPICard";
import { MoistureTrendChart } from "./MoistureTrendChart";
import { LightIntensityChart } from "./LightIntensityChart";
import { PlantHealthDistribution } from "./PlantHealthDistribution";
import { InsightsCard } from "./InsightsCard";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Droplets, Thermometer, Sun, Gauge, Calendar, BarChart3, Lightbulb } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Mock data
const kpiData = {
  moisture: {
    value: 62.5,
    trend: "up",
    trendValue: "+3.2%",
    comparison: "vs last week",
  },
  temperature: {
    value: 22.8,
    trend: "up",
    trendValue: "+1.5°C",
    comparison: "vs last week",
  },
  sunlight: {
    value: 8.2,
    trend: "down",
    trendValue: "-0.3h",
    comparison: "vs last week",
  },
  water: {
    value: 2847,
    trend: "down",
    trendValue: "-12%",
    comparison: "vs last week",
  },
};

const moistureTrendData = [
  { date: "Mon", zone1: 65, zone2: 58, zone3: 72 },
  { date: "Tue", zone1: 63, zone2: 55, zone3: 70 },
  { date: "Wed", zone1: 68, zone2: 60, zone3: 75 },
  { date: "Thu", zone1: 66, zone2: 57, zone3: 73 },
  { date: "Fri", zone1: 70, zone2: 62, zone3: 78 },
  { date: "Sat", zone1: 68, zone2: 60, zone3: 76 },
  { date: "Sun", zone1: 72, zone2: 64, zone3: 80 },
];

const lightIntensityData = [
  { zone: "Zone 1", intensity: 8500 },
  { zone: "Zone 2", intensity: 7200 },
  { zone: "Zone 3", intensity: 9100 },
  { zone: "Zone 4", intensity: 8800 },
  { zone: "Zone 5", intensity: 7600 },
];

const healthDistributionData = [
  { name: "Healthy", value: 45 },
  { name: "Good", value: 30 },
  { name: "Warning", value: 20 },
  { name: "Critical", value: 5 },
];

const insightsData = [
  {
    type: "warning",
    category: "Irrigation",
    title: "Zone 2 Drying Faster",
    message:
      "Soil in Zone 2 is drying 15% faster than usual. Consider adjusting irrigation schedule or checking for drainage issues.",
    action: "View Zone Details",
  },
  {
    type: "tip",
    category: "Optimization",
    title: "Optimal Watering Window",
    message:
      "Based on weather forecast, best watering time tomorrow is 6:00 AM - 7:30 AM for maximum water retention.",
    action: "Update Schedule",
  },
  {
    type: "trend",
    category: "Growth",
    title: "Improved Plant Health",
    message:
      "Overall plant health has increased by 12% this week. Your recent adjustments to light exposure are working well.",
  },
  {
    type: "info",
    category: "Maintenance",
    title: "Sensor Calibration Due",
    message:
      "Zone 4 moisture sensor hasn't been calibrated in 30 days. Schedule maintenance to ensure accurate readings.",
    action: "Schedule Now",
  },
];

export function Analytics() {
  const [dateRange, setDateRange] = useState("7days");

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="glass-card border-white/10 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative p-3 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-2xl backdrop-blur-sm border border-purple-400/30">
                <BarChart3 className="h-10 w-10 text-purple-400" />
                <div className="absolute inset-0 bg-purple-400/10 blur-xl rounded-2xl"></div>
              </div>
              <div>
                <h1 className="text-3xl bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Analytics & Reports
                </h1>
                <p className="text-white/60 mt-1">Data-driven insights for smart farming</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-white/60" />
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-[180px] glass border-white/20 text-white/90 backdrop-blur-sm">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent className="glass border-white/20 backdrop-blur-xl bg-[#0a0b14]/95">
                  <SelectItem value="24hours">Last 24 Hours</SelectItem>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                  <SelectItem value="90days">Last 90 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Avg. Soil Moisture"
            value={kpiData.moisture.value}
            unit="%"
            icon={Droplets}
            trend={kpiData.moisture.trend}
            trendValue={kpiData.moisture.trendValue}
            comparison={kpiData.moisture.comparison}
          />
          <KPICard
            title="Avg. Temperature"
            value={kpiData.temperature.value}
            unit="°C"
            icon={Thermometer}
            trend={kpiData.temperature.trend}
            trendValue={kpiData.temperature.trendValue}
            comparison={kpiData.temperature.comparison}
          />
          <KPICard
            title="Sunlight Exposure"
            value={kpiData.sunlight.value}
            unit="hrs/day"
            icon={Sun}
            trend={kpiData.sunlight.trend}
            trendValue={kpiData.sunlight.trendValue}
            comparison={kpiData.sunlight.comparison}
          />
          <KPICard
            title="Water Consumption"
            value={kpiData.water.value}
            unit="L"
            icon={Gauge}
            trend={kpiData.water.trend}
            trendValue={kpiData.water.trendValue}
            comparison={kpiData.water.comparison}
          />
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          <MoistureTrendChart data={moistureTrendData} />
          <LightIntensityChart data={lightIntensityData} />
        </div>

        <PlantHealthDistribution data={healthDistributionData} />

        {/* AI Insights Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-lg backdrop-blur-sm border border-emerald-400/30">
              <Lightbulb className="h-5 w-5 text-emerald-400" />
            </div>
            <h2 className="text-xl text-white/90">AI-Generated Insights</h2>
          </div>
          <InsightsCard insights={insightsData} />
        </div>
      </div>
    </div>
  );
}
