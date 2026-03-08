import { ReactNode } from "react";

interface TwoColumnSectionProps {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function TwoColumnSection({
  left,
  right,
  reverse = false,
  className = "",
}: TwoColumnSectionProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[1fr_minmax(0,420px)] gap-8 md:gap-12 items-start ${className}`}
    >
      <div className={`min-w-0 ${reverse ? "md:order-2" : ""}`}>{left}</div>
      <div className={`min-w-0 overflow-hidden ${reverse ? "md:order-1" : ""}`}>
        {right}
      </div>
    </div>
  );
}
