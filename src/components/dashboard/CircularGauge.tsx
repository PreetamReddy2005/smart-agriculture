import { Card } from "@/components/ui/card";

interface CircularGaugeProps {
  value: number;
  max: number;
  label: string;
  unit: string;
  threshold: {
    low: number;
    optimal: number;
  };
}

export const CircularGauge = ({ value, max, label, unit, threshold }: CircularGaugeProps) => {
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (value < threshold.low) return "text-destructive";
    if (value >= threshold.optimal) return "text-success";
    return "text-warning";
  };

  const getStrokeColor = () => {
    if (value < threshold.low) return "hsl(var(--destructive))";
    if (value >= threshold.optimal) return "hsl(var(--success))";
    return "hsl(var(--warning))";
  };

  return (
    <Card className="p-8 bg-card border border-border">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 mb-6">
          <svg className="transform -rotate-90" width="256" height="256" viewBox="0 0 256 256">
            {/* Background arc */}
            <circle
              cx="128"
              cy="128"
              r="90"
              stroke="hsl(var(--muted))"
              strokeWidth="16"
              fill="none"
              opacity="0.2"
            />
            {/* Foreground arc */}
            <circle
              cx="128"
              cy="128"
              r="90"
              stroke={getStrokeColor()}
              strokeWidth="16"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
              style={{ filter: "drop-shadow(0 0 12px currentColor)" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-6xl font-bold tracking-tight ${getColor()} value-update`}>
              {value}
            </span>
            <span className="text-base text-muted-foreground mt-2 font-medium">{unit}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{label}</h3>
        <div className="text-sm text-muted-foreground text-center">
          {value < threshold.low && "Dry - Irrigation Recommended"}
          {value >= threshold.low && value < threshold.optimal && "Moderate Level"}
          {value >= threshold.optimal && "Optimal Moisture Level"}
        </div>
      </div>
    </Card>
  );
};
