import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { PlantManagement } from "./PlantManagement";
import { IrrigationControl } from "./IrrigationControl";
import { Analytics } from "./Analytics";
import { Settings } from "./Settings";
import { Button } from "./ui/button";
import { LayoutDashboard, Sprout, Droplets, BarChart3, Settings as SettingsIcon, LogOut } from "lucide-react";

export function MainApp({ userRole, onLogout }) {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-card border-white/10 p-1.5 md:p-2 flex gap-1 md:gap-2 flex-wrap justify-center max-w-full">
          <Button
            variant={currentPage === "dashboard" ? "default" : "outline"}
            onClick={() => setCurrentPage("dashboard")}
            className={`relative transition-all duration-300 px-2 md:px-4 ${
              currentPage === "dashboard"
                ? "bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300"
                : "glass border-white/20 hover:border-white/30 text-white/80"
            } backdrop-blur-sm`}
          >
            <LayoutDashboard className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Dashboard</span>
            {currentPage === "dashboard" && (
              <span className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            )}
          </Button>
          <Button
            variant={currentPage === "plants" ? "default" : "outline"}
            onClick={() => setCurrentPage("plants")}
            className={`relative transition-all duration-300 px-2 md:px-4 ${
              currentPage === "plants"
                ? "bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300"
                : "glass border-white/20 hover:border-white/30 text-white/80"
            } backdrop-blur-sm`}
          >
            <Sprout className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Plants</span>
            {currentPage === "plants" && (
              <span className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            )}
          </Button>
          <Button
            variant={currentPage === "irrigation" ? "default" : "outline"}
            onClick={() => setCurrentPage("irrigation")}
            className={`relative transition-all duration-300 px-2 md:px-4 ${
              currentPage === "irrigation"
                ? "bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300"
                : "glass border-white/20 hover:border-white/30 text-white/80"
            } backdrop-blur-sm`}
          >
            <Droplets className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Irrigation</span>
            {currentPage === "irrigation" && (
              <span className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            )}
          </Button>
          <Button
            variant={currentPage === "analytics" ? "default" : "outline"}
            onClick={() => setCurrentPage("analytics")}
            className={`relative transition-all duration-300 px-2 md:px-4 ${
              currentPage === "analytics"
                ? "bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300"
                : "glass border-white/20 hover:border-white/30 text-white/80"
            } backdrop-blur-sm`}
          >
            <BarChart3 className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Analytics</span>
            {currentPage === "analytics" && (
              <span className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            )}
          </Button>
          <Button
            variant={currentPage === "settings" ? "default" : "outline"}
            onClick={() => setCurrentPage("settings")}
            className={`relative transition-all duration-300 px-2 md:px-4 ${
              currentPage === "settings"
                ? "bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300"
                : "glass border-white/20 hover:border-white/30 text-white/80"
            } backdrop-blur-sm`}
          >
            <SettingsIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Settings</span>
            {currentPage === "settings" && (
              <span className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={onLogout}
            className="glass border-red-400/20 hover:border-red-400/50 text-red-300 hover:text-red-200 backdrop-blur-sm transition-all duration-300 px-2 md:px-4"
          >
            <LogOut className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Logout</span>
          </Button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-20">
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "plants" && <PlantManagement />}
        {currentPage === "irrigation" && <IrrigationControl />}
        {currentPage === "analytics" && <Analytics />}
        {currentPage === "settings" && <Settings />}
      </div>
    </div>
  );
}
