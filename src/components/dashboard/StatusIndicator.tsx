interface StatusIndicatorProps {
  label: string;
  status: "on" | "off";
}

export const StatusIndicator = ({ label, status }: StatusIndicatorProps) => {
  const isOn = status === "on";

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">{label}</p>
      <div className="relative">
        <div
          className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${
            isOn
              ? "bg-success/10 border-4 border-success shadow-[0_0_40px_rgba(34,197,94,0.4)]"
              : "bg-destructive/10 border-4 border-destructive/40"
          }`}
        >
          <div
            className={`w-24 h-24 rounded-full transition-all duration-500 ${
              isOn
                ? "bg-success animate-pulse shadow-[0_0_30px_rgba(34,197,94,0.9)]"
                : "bg-destructive/60"
            }`}
          />
        </div>
      </div>
      <span
        className={`text-3xl font-bold mt-4 tracking-wider ${
          isOn ? "text-success" : "text-destructive/80"
        }`}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </div>
  );
};
