"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ComponentProps, useCallback } from "react";

type IntentLinkProps = Omit<ComponentProps<typeof Link>, "prefetch">;

/**
 * Link that prefetches only on hover/focus (intent), not when in viewport.
 * Use for secondary links (footer, dropdowns, in-content). Use default Link for high-value nav (logo, main nav, CTAs).
 */
export function IntentLink({
  href,
  onMouseEnter,
  onFocus,
  ...rest
}: IntentLinkProps) {
  const router = useRouter();

  const prefetchOnIntent = useCallback(() => {
    if (typeof href === "string" && href.startsWith("/")) {
      router.prefetch(href);
    }
  }, [href, router]);

  return (
    <Link
      href={href}
      prefetch={false}
      onMouseEnter={(e) => {
        prefetchOnIntent();
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        prefetchOnIntent();
        onFocus?.(e);
      }}
      {...rest}
    />
  );
}
