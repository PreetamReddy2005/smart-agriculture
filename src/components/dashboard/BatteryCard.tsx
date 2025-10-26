import { Card } from "@/components/ui/card";
import { Battery } from "lucide-react";

interface BatteryCardProps {
  voltage: number;
  maxVoltage?: number;
}

export const BatteryCard = ({ voltage, maxVoltage = 13 }: BatteryCardProps) => {
  const percentage = Math.min((voltage / maxVoltage) * 100, 100);

  return (
    <Card className="p-6 bg-card border border-success/30 hover:border-success/50 transition-all">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-md bg-success/10">
            <Battery className="w-5 h-5 text-success" />
          </div>
          <span className="text-xs px-2 py-1 rounded bg-success/20 text-success">
            {Math.round(percentage)}%
          </span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">Battery Voltage</p>
          
          {/* Visual battery indicator */}
          <div className="mb-4">
            <div className="relative h-10 w-full bg-muted/20 rounded-md overflow-hidden border border-muted">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-success to-success/80 transition-all duration-700 ease-out"
                style={{ width: `${percentage}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-foreground mix-blend-difference">
                  {percentage.toFixed(0)}%
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight text-foreground value-update">
              {voltage.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground font-medium">V</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
