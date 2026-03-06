import { ReactNode } from "react";

interface InfoBlockProps {
  children: ReactNode;
  title?: string;
  type?: "notice" | "highlight" | "warning";
}

export function InfoBlock({
  children,
  title,
  type = "highlight",
}: InfoBlockProps) {
  const typeStyles = {
    notice: "border-l-4 border-gold-accent bg-blue-50",
    highlight: "border-l-4 border-gold-accent bg-gold-accent/5",
    warning: "border-l-4 border-red-500 bg-red-50",
  };

  return (
    <div className={`p-6 rounded-lg ${typeStyles[type]}`}>
      {title && <h4 className="font-bold text-primary mb-2">{title}</h4>}
      <div className="text-sm text-foreground space-y-2">{children}</div>
    </div>
  );
}
