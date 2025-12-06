import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

interface MoistureChartProps {
  data: Array<{ time: string; moisture: number }>;
}

export function MoistureChart({ data }: MoistureChartProps) {
  return (
    <Card className="glass-card border-white/10">
      <CardHeader>
        <CardTitle className="text-white/90">Soil Moisture History (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="moistureGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="time" 
                className="text-xs"
                tick={{ fill: 'rgba(255,255,255,0.6)' }}
                stroke="rgba(255,255,255,0.2)"
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: 'rgba(255,255,255,0.6)' }}
                stroke="rgba(255,255,255,0.2)"
                domain={[0, 100]}
                label={{ value: 'Moisture %', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.6)' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(10, 11, 20, 0.95)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(12px)',
                  color: 'white'
                }}
              />
              <Area
                type="monotone"
                dataKey="moisture"
                stroke="#60a5fa"
                strokeWidth={3}
                fill="url(#moistureGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
