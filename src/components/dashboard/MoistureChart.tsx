import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface MoistureChartProps {
  data: Array<{
    time: string;
    actual: number;
    predicted: number;
  }>;
}

export const MoistureChart = ({ data }: MoistureChartProps) => {
  return (
    <Card className="p-6 bg-card border border-border">
      <h3 className="text-xs font-medium text-muted-foreground mb-6 uppercase tracking-wide">Soil Moisture Trend</h3>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '11px', fontWeight: 500 }}
            axisLine={{ stroke: 'hsl(var(--border))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '11px', fontWeight: 500 }}
            axisLine={{ stroke: 'hsl(var(--border))' }}
            label={{ 
              value: 'ADC Units', 
              angle: -90, 
              position: 'insideLeft', 
              style: { fill: 'hsl(var(--muted-foreground))', fontSize: '11px', fontWeight: 600 } 
            }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px',
              fontSize: '12px'
            }}
            labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}
          />
          <Legend 
            wrapperStyle={{ fontSize: '12px', fontWeight: 500 }}
            iconType="line"
          />
          <Line 
            type="natural" 
            dataKey="actual" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            name="Actual Data"
            dot={{ fill: 'hsl(var(--primary))', r: 5, strokeWidth: 2, stroke: 'hsl(var(--card))' }}
            activeDot={{ r: 7 }}
          />
          <Line 
            type="natural" 
            dataKey="predicted" 
            stroke="hsl(var(--muted-foreground))" 
            strokeWidth={2.5}
            strokeDasharray="6 4"
            name="ML Prediction"
            dot={{ fill: 'hsl(var(--muted-foreground))', r: 4, strokeWidth: 2, stroke: 'hsl(var(--card))' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
