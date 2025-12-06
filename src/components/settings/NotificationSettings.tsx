import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Bell, Mail, MessageSquare, AlertTriangle, Droplets, Thermometer, WifiOff } from "lucide-react";

export function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    lowMoisture: true,
    highTemperature: true,
    deviceOffline: true,
    criticalAlerts: true,
    dailyReports: false,
    weeklyReports: true,
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
  });

  const handleToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-white/90 mb-2">Notification Settings</h2>
        <p className="text-white/60">Manage how and when you receive alerts</p>
      </div>

      {/* Alert Preferences */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-500/20">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <CardTitle className="text-white/90">Alert Preferences</CardTitle>
              <CardDescription className="text-white/60">
                Choose which alerts you want to receive
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Droplets className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <Label htmlFor="lowMoisture" className="text-white/80 cursor-pointer">
                  Low Soil Moisture
                </Label>
                <p className="text-sm text-white/50">Alert when moisture drops below threshold</p>
              </div>
            </div>
            <Switch
              id="lowMoisture"
              checked={notifications.lowMoisture}
              onCheckedChange={() => handleToggle("lowMoisture")}
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Thermometer className="h-4 w-4 text-orange-400" />
              </div>
              <div>
                <Label htmlFor="highTemperature" className="text-white/80 cursor-pointer">
                  High Temperature
                </Label>
                <p className="text-sm text-white/50">Alert when temperature exceeds threshold</p>
              </div>
            </div>
            <Switch
              id="highTemperature"
              checked={notifications.highTemperature}
              onCheckedChange={() => handleToggle("highTemperature")}
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-500/20">
                <WifiOff className="h-4 w-4 text-red-400" />
              </div>
              <div>
                <Label htmlFor="deviceOffline" className="text-white/80 cursor-pointer">
                  Device Offline
                </Label>
                <p className="text-sm text-white/50">Alert when a device goes offline</p>
              </div>
            </div>
            <Switch
              id="deviceOffline"
              checked={notifications.deviceOffline}
              onCheckedChange={() => handleToggle("deviceOffline")}
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-500/20">
                <AlertTriangle className="h-4 w-4 text-red-400" />
              </div>
              <div>
                <Label htmlFor="criticalAlerts" className="text-white/80 cursor-pointer">
                  Critical Alerts
                </Label>
                <p className="text-sm text-white/50">Important system alerts and warnings</p>
              </div>
            </div>
            <Switch
              id="criticalAlerts"
              checked={notifications.criticalAlerts}
              onCheckedChange={() => handleToggle("criticalAlerts")}
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>
        </CardContent>
      </Card>

      {/* Report Preferences */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20">
              <Bell className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <CardTitle className="text-white/90">Report Preferences</CardTitle>
              <CardDescription className="text-white/60">
                Configure automated report delivery
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
            <div>
              <Label htmlFor="dailyReports" className="text-white/80 cursor-pointer">
                Daily Reports
              </Label>
              <p className="text-sm text-white/50">Receive daily summary reports</p>
            </div>
            <Switch
              id="dailyReports"
              checked={notifications.dailyReports}
              onCheckedChange={() => handleToggle("dailyReports")}
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
            <div>
              <Label htmlFor="weeklyReports" className="text-white/80 cursor-pointer">
                Weekly Reports
              </Label>
              <p className="text-sm text-white/50">Receive weekly summary reports</p>
            </div>
            <Switch
              id="weeklyReports"
              checked={notifications.weeklyReports}
              onCheckedChange={() => handleToggle("weeklyReports")}
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>
        </CardContent>
      </Card>

      {/* Delivery Methods */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <MessageSquare className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-white/90">Delivery Methods</CardTitle>
              <CardDescription className="text-white/60">
                Choose how to receive notifications
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-white/60" />
              <div>
                <Label htmlFor="emailNotifications" className="text-white/80 cursor-pointer">
                  Email Notifications
                </Label>
                <p className="text-sm text-white/50">john.doe@agridome.com</p>
              </div>
            </div>
            <Switch
              id="emailNotifications"
              checked={notifications.emailNotifications}
              onCheckedChange={() => handleToggle("emailNotifications")}
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <Bell className="h-4 w-4 text-white/60" />
              <div>
                <Label htmlFor="pushNotifications" className="text-white/80 cursor-pointer">
                  Push Notifications
                </Label>
                <p className="text-sm text-white/50">Browser and mobile app notifications</p>
              </div>
            </div>
            <Switch
              id="pushNotifications"
              checked={notifications.pushNotifications}
              onCheckedChange={() => handleToggle("pushNotifications")}
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-4 w-4 text-white/60" />
              <div>
                <Label htmlFor="smsNotifications" className="text-white/80 cursor-pointer">
                  SMS Notifications
                </Label>
                <p className="text-sm text-white/50">+1 (555) 123-4567</p>
              </div>
            </div>
            <Switch
              id="smsNotifications"
              checked={notifications.smsNotifications}
              onCheckedChange={() => handleToggle("smsNotifications")}
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>
        </CardContent>
      </Card>

      <Button className="bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300 backdrop-blur-sm">
        Save Preferences
      </Button>
    </div>
  );
}
