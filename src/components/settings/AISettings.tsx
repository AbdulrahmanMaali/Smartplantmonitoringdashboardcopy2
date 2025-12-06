import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Brain, Zap, Target, TrendingUp, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function AISettings() {
  const [aiEnabled, setAiEnabled] = useState(true);
  const [autoIrrigation, setAutoIrrigation] = useState(true);
  const [predictiveAnalytics, setPredictiveAnalytics] = useState(true);
  const [smartScheduling, setSmartScheduling] = useState(false);
  const [learningMode, setLearningMode] = useState(true);
  
  const [sensitivity, setSensitivity] = useState([70]);
  const [confidence, setConfidence] = useState([85]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-white/90 mb-2">AI Settings</h2>
        <p className="text-white/60">Configure AI automation and intelligence features</p>
      </div>

      {/* Master AI Control */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20">
              <Brain className="h-5 w-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-white/90">AI Automation</CardTitle>
              <CardDescription className="text-white/60">
                Enable or disable AI-powered features
              </CardDescription>
            </div>
            <Switch
              checked={aiEnabled}
              onCheckedChange={setAiEnabled}
              className="data-[state=checked]:bg-purple-500"
            />
          </div>
        </CardHeader>
      </Card>

      {aiEnabled && (
        <>
          <Alert className="glass border-purple-400/30 bg-purple-500/10">
            <AlertCircle className="h-4 w-4 text-purple-400" />
            <AlertDescription className="text-white/80">
              AI features are active and learning from your greenhouse environment. The system will improve over time.
            </AlertDescription>
          </Alert>

          {/* AI Features */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white/90">AI Features</CardTitle>
              <CardDescription className="text-white/60">
                Enable specific AI capabilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Zap className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <Label htmlFor="autoIrrigation" className="text-white/80 cursor-pointer">
                      Automatic Irrigation
                    </Label>
                    <p className="text-sm text-white/50">AI controls watering based on conditions</p>
                  </div>
                </div>
                <Switch
                  id="autoIrrigation"
                  checked={autoIrrigation}
                  onCheckedChange={setAutoIrrigation}
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <TrendingUp className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <Label htmlFor="predictiveAnalytics" className="text-white/80 cursor-pointer">
                      Predictive Analytics
                    </Label>
                    <p className="text-sm text-white/50">Forecast plant needs and potential issues</p>
                  </div>
                </div>
                <Switch
                  id="predictiveAnalytics"
                  checked={predictiveAnalytics}
                  onCheckedChange={setPredictiveAnalytics}
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20">
                    <Target className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <Label htmlFor="smartScheduling" className="text-white/80 cursor-pointer">
                      Smart Scheduling
                    </Label>
                    <p className="text-sm text-white/50">Optimize watering schedules automatically</p>
                  </div>
                </div>
                <Switch
                  id="smartScheduling"
                  checked={smartScheduling}
                  onCheckedChange={setSmartScheduling}
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/20">
                    <Brain className="h-4 w-4 text-indigo-400" />
                  </div>
                  <div>
                    <Label htmlFor="learningMode" className="text-white/80 cursor-pointer">
                      Continuous Learning
                    </Label>
                    <p className="text-sm text-white/50">AI adapts to your greenhouse patterns</p>
                  </div>
                </div>
                <Switch
                  id="learningMode"
                  checked={learningMode}
                  onCheckedChange={setLearningMode}
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* AI Sensitivity */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white/90">AI Sensitivity</CardTitle>
              <CardDescription className="text-white/60">
                Adjust how responsive the AI is to changes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-white/80">Response Sensitivity</Label>
                  <span className="text-white/90">{sensitivity[0]}%</span>
                </div>
                <Slider
                  value={sensitivity}
                  onValueChange={setSensitivity}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <p className="text-sm text-white/50">
                  Higher values make AI respond more quickly to environmental changes
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-white/80">Confidence Threshold</Label>
                  <span className="text-white/90">{confidence[0]}%</span>
                </div>
                <Slider
                  value={confidence}
                  onValueChange={setConfidence}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <p className="text-sm text-white/50">
                  Minimum confidence required before AI takes automated actions
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Performance */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white/90">AI Performance</CardTitle>
              <CardDescription className="text-white/60">
                Current AI model statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60 mb-1">Accuracy</p>
                  <p className="text-2xl text-emerald-400">94.2%</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60 mb-1">Predictions Made</p>
                  <p className="text-2xl text-blue-400">1,247</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60 mb-1">Model Version</p>
                  <p className="text-2xl text-purple-400">v2.3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button className="bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/50 text-emerald-300 backdrop-blur-sm">
              Save AI Settings
            </Button>
            <Button
              variant="outline"
              className="glass border-white/20 hover:border-purple-400/50 text-white/80 hover:text-purple-300 backdrop-blur-sm"
            >
              Retrain AI Model
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
