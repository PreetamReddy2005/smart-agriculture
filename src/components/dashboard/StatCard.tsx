import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  unit: string;
  trend?: "up" | "down" | "stable";
  className?: string;
  highlight?: boolean;
}

export const StatCard = ({ 
  icon: Icon, 
  label, 
  value, 
  unit, 
  trend, 
  className = "", 
  highlight = false 
}: StatCardProps) => {
  return (
    <Card className={`p-6 bg-card border border-border hover:border-primary/30 transition-all ${className}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-md bg-muted/30">
            <Icon className="w-5 h-5 text-muted-foreground" />
          </div>
          {trend && (
            <span className={`text-xs px-2 py-1 rounded ${
              trend === "up" ? "bg-success/20 text-success" :
              trend === "down" ? "bg-destructive/20 text-destructive" :
              "bg-muted/30 text-muted-foreground"
            }`}>
              {trend === "up" ? "↑" : trend === "down" ? "↓" : "—"}
            </span>
          )}
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">{label}</p>
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold tracking-tight value-update ${
              highlight ? "text-accent" : "text-foreground"
            }`}>
              {value}
            </span>
            <span className="text-sm text-muted-foreground font-medium">{unit}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
