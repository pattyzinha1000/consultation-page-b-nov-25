import { AlertTriangle } from "lucide-react";

interface WarningBoxProps {
  title: string;
  subtitle: string;
}

export const WarningBox = ({ title, subtitle }: WarningBoxProps) => {
  return (
    <div className="bg-warning-bg border-2 border-warning-border rounded-lg p-6 mb-8 flex items-center gap-4 max-w-2xl mx-auto">
      <AlertTriangle className="text-warning-text w-8 h-8 flex-shrink-0" />
      <div className="text-center">
        <p className="text-warning-text font-bold text-lg mb-1">{title}</p>
        <p className="text-sm text-muted-foreground italic">{subtitle}</p>
      </div>
    </div>
  );
};