import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-3 text-base md:text-lg font-semibold rounded-full transition-all duration-300 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-white";

  const variantStyles = {
    primary:
      "bg-yellow-500 text-white hover:bg-yellow-600 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-yellow-500 text-white border-2 border-yellow-600 hover:bg-yellow-600",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
