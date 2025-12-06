import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import { Droplets, Thermometer, Sun, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function SensorCalibration() {
  const [moistureMin, setMoistureMin] = useState([40]);
  const [moistureMax, setMoistureMax] = useState([75]);
  const [tempMin, setTempMin] = useState([18]);
  const [tempMax, setTempMax] = useState([28]);
  const [lightMin, setLightMin] = useState([5000]);
  const [lightMax, setLightMax] = useState([12000]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-white/90 mb-2">Sensor Calibration</h2>
        <p className="text-white/60">Set thresholds and calibration values for your sensors</p>
      </div>

      <Alert className="glass border-blue-400/30 bg-blue-500/10">
        <AlertCircle className="h-4 w-4 text-blue-400" />
        <AlertDescription className="text-white/80">
          Calibration changes will affect all automation rules and alerts. Proceed with caution.
        </AlertDescription>
      </Alert>

      {/* Soil Moisture Calibration */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Droplets className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-white/90">Soil Moisture Sensors</CardTitle>
              <CardDescription className="text-white/60">
                Set optimal moisture level range (%)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-white/80">Minimum Threshold</Label>
                <span className="text-white/90">{moistureMin[0]}%</span>
              </div>
              <Slider
                value={moistureMin}
                onValueChange={setMoistureMin}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-white/80">Maximum Threshold</Label>
                <span className="text-white/90">{moistureMax[0]}%</span>
              </div>
              <Slider
                value={moistureMax}
                onValueChange={setMoistureMax}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/70">
              Optimal range: <span className="text-emerald-400">{moistureMin[0]}% - {moistureMax[0]}%</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Temperature Calibration */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-500/20">
              <Thermometer className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <CardTitle className="text-white/90">Temperature Sensors</CardTitle>
              <CardDescription className="text-white/60">
                Set optimal temperature range (°C)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-white/80">Minimum Threshold</Label>
                <span className="text-white/90">{tempMin[0]}°C</span>
              </div>
              <Slider
                value={tempMin}
                onValueChange={setTempMin}
                max={50}
                step={1}
                className="w-full"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-white/80">Maximum Threshold</Label>
                <span className="text-white/90">{tempMax[0]}°C</span>
              </div>
              <Slider
                value={tempMax}
                onValueChange={setTempMax}
                max={50}
                step={1}
                className="w-full"
              />
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/70">
              Optimal range: <span className="text-emerald-400">{tempMin[0]}°C - {tempMax[0]}°C</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Light Intensity Calibration */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-500/20">
              <Sun className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <CardTitle className="text-white/90">Light Sensors</CardTitle>
              <CardDescription className="text-white/60">
                Set optimal light intensity range (lux)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-white/80">Minimum Threshold</Label>
                <span className="text-white/90">{lightMin[0]} lux</span>
              </div>
              <Slider
                value={lightMin}
                onValueChange={setLightMin}
                max={20000}
                step={100}
                className="w-full"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-white/80">Maximum Threshold</Label>
                <span className="text-white/90">{lightMax[0]} lux</span>
              </div>
              <Slider
                value={lightMax}
                onValueChange={setLightMax}
                max={20000}
                step={100}
                className="w-full"
              />
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/70">
              Optimal range: <span className="text-emerald-400">{lightMin[0]} - {lightMax[0]} lux</span>
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button className="bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300 backdrop-blur-sm">
          Save Calibration
        </Button>
        <Button
          variant="outline"
          className="glass border-white/20 hover:border-white/30 text-white/80 backdrop-blur-sm"
        >
          Reset to Defaults
        </Button>
      </div>
    </div>
  );
}
