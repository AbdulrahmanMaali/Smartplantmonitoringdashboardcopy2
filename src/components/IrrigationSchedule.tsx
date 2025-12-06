import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Droplets } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

export function IrrigationSchedule({ schedules }) {
  const getTimeColor = (time) => {
    const hour = parseInt(time.split(":")[0]);
    if (hour >= 6 && hour < 12) return "bg-amber-500/20 border-amber-400/30 text-amber-300";
    if (hour >= 12 && hour < 18) return "bg-blue-500/20 border-blue-400/30 text-blue-300";
    return "bg-indigo-500/20 border-indigo-400/30 text-indigo-300";
  };

  return (
    <Card className="glass-card border-white/10">
      <CardHeader>
        <CardTitle className="text-white/90">Irrigation Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-3">
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-white/60" />
                    <span className="text-white/90">{schedule.time}</span>
                  </div>
                  <Badge
                    className={`backdrop-blur-sm ${getTimeColor(schedule.time)}`}
                  >
                    {schedule.duration} min
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Droplets className="h-3.5 w-3.5 text-blue-400" />
                  <span>{schedule.zones.join(", ")}</span>
                </div>
                {schedule.repeat && (
                  <div className="mt-2 text-xs text-white/50">
                    Repeats: {schedule.repeat}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
