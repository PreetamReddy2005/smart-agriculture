import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export const ControlPanel = () => {
  const [manualOverride, setManualOverride] = useState(false);

  return (
    <Card className="p-6 bg-card border border-border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wide">Manual Override</p>
          <p className="text-sm text-foreground font-semibold">
            {manualOverride ? "Manual Control Active" : "Automatic Mode"}
          </p>
        </div>
        <Switch
          checked={manualOverride}
          onCheckedChange={setManualOverride}
          className="data-[state=checked]:bg-primary"
        />
      </div>
      {!manualOverride && (
        <p className="text-xs text-muted-foreground mt-4">
          Enable manual override to control irrigation manually
        </p>
      )}
    </Card>
  );
};
