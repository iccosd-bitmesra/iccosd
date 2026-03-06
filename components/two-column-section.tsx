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
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? "md:auto-cols-max" : ""} ${className}`}
    >
      <div className={reverse ? "md:order-2" : ""}>{left}</div>
      <div className={reverse ? "md:order-1" : ""}>{right}</div>
    </div>
  );
}
