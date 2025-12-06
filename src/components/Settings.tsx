import { useState } from "react";
import { Card } from "./ui/card";
import { AccountSettings } from "./settings/AccountSettings";
import { DeviceSetup } from "./settings/DeviceSetup";
import { SensorCalibration } from "./settings/SensorCalibration";
import { NotificationSettings } from "./settings/NotificationSettings";
import { AISettings } from "./settings/AISettings";
import { User, Cpu, Gauge, Bell, Brain, Settings as SettingsIcon } from "lucide-react";

const settingsSections = [
  { id: "account", label: "Account Settings", icon: User },
  { id: "devices", label: "Device Setup", icon: Cpu },
  { id: "calibration", label: "Sensor Calibration", icon: Gauge },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "ai", label: "AI Settings", icon: Brain },
];

export function Settings() {
  const [activeSection, setActiveSection] = useState("account");

  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return <AccountSettings />;
      case "devices":
        return <DeviceSetup />;
      case "calibration":
        return <SensorCalibration />;
      case "notifications":
        return <NotificationSettings />;
      case "ai":
        return <AISettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="glass-card border-white/10 p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative p-3 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-indigo-400/30">
              <SettingsIcon className="h-10 w-10 text-indigo-400" />
              <div className="absolute inset-0 bg-indigo-400/10 blur-xl rounded-2xl"></div>
            </div>
            <div>
              <h1 className="text-3xl bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                System Settings
              </h1>
              <p className="text-white/60 mt-1">Configure your Agridome system preferences</p>
            </div>
          </div>
        </Card>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="glass-card border-white/10 p-4 sticky top-6">
              <nav className="space-y-2">
                {settingsSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 text-left ${
                        activeSection === section.id
                          ? "bg-emerald-500/20 border border-emerald-400/30"
                          : "bg-white/5 hover:bg-white/10 border border-transparent"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          activeSection === section.id
                            ? "text-emerald-400"
                            : "text-white/60"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          activeSection === section.id
                            ? "text-emerald-300"
                            : "text-white/80"
                        }`}
                      >
                        {section.label}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="animate-in fade-in duration-300">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
