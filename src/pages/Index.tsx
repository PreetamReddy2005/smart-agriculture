import { CircularGauge } from "@/components/dashboard/CircularGauge";
import { StatCard } from "@/components/dashboard/StatCard";
import { StatusIndicator } from "@/components/dashboard/StatusIndicator";
import { MoistureChart } from "@/components/dashboard/MoistureChart";
import { ControlPanel } from "@/components/dashboard/ControlPanel";
import { BatteryCard } from "@/components/dashboard/BatteryCard";
import { Thermometer, Droplets, Sun, Activity, Clock, Waves } from "lucide-react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dummy data for demonstration
const moistureData = [
  { time: "00:00", actual: 420, predicted: 430 },
  { time: "01:00", actual: 385, predicted: 390 },
  { time: "02:00", actual: 350, predicted: 355 },
  { time: "03:00", actual: 315, predicted: 320 },
  { time: "04:00", actual: 480, predicted: 475 },
  { time: "05:00", actual: 520, predicted: 515 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1" />
            <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Smart Farm Monitor
            </h1>
            <div className="flex-1 flex justify-end">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-12">
          {/* Section A: Field Conditions */}
          <section className="animate-fade-in">
            <h2 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wide border-l-4 border-primary pl-3">
              Field Conditions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Large Soil Moisture Gauge */}
              <div className="lg:col-span-1 flex items-center justify-center">
                <CircularGauge
                  value={420}
                  max={1000}
                  label="Soil Moisture"
                  unit="ADC"
                  threshold={{ low: 300, optimal: 500 }}
                />
              </div>
              
              {/* Three Stat Cards Grid */}
              <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <StatCard
                  icon={Thermometer}
                  label="Air Temperature"
                  value={24.5}
                  unit="°C"
                  trend="stable"
                />
                <StatCard
                  icon={Droplets}
                  label="Air Humidity"
                  value={68}
                  unit="%"
                  trend="up"
                />
                <StatCard
                  icon={Sun}
                  label="Light Intensity"
                  value={45200}
                  unit="lux"
                  trend="up"
                />
              </div>
            </div>
          </section>

          {/* Section B: Fog Control & Prediction */}
          <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wide border-l-4 border-primary pl-3">
              Fog Control & Prediction
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Status & Control */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-card border border-border rounded-lg p-8 flex items-center justify-center">
                  <StatusIndicator label="Irrigation Status" status="off" />
                </div>
                <ControlPanel />
                {/* Water Usage Card */}
                <StatCard
                  icon={Waves}
                  label="Water Usage Today"
                  value={145}
                  unit="L"
                  trend="down"
                />
              </div>
              
              {/* Chart */}
              <div className="lg:col-span-2">
                <MoistureChart data={moistureData} />
              </div>
            </div>
          </section>

          {/* Section C: System Health */}
          <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wide border-l-4 border-primary pl-3">
              System Health
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <BatteryCard voltage={12.4} />
              <StatCard
                icon={Activity}
                label="System Latency"
                value={42}
                unit="ms"
                highlight={true}
              />
              <StatCard
                icon={Clock}
                label="Node Uptime"
                value="7d 14h"
                unit=""
                trend="up"
              />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-muted-foreground">
          <p className="font-medium">IoT Agricultural Monitoring System • Real-time Data • ML-Powered Predictions</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
