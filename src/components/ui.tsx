import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="kicker">
      <span /> {children}
    </span>
  );
}
export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`text-link ${light ? "text-link-light" : ""}`} href={href}>
      {children}
      <ArrowUpRight size={19} strokeWidth={1.5} />
    </Link>
  );
}
export function ButtonLink({
  href,
  children,
  outline = false,
}: {
  href: string;
  children: ReactNode;
  outline?: boolean;
}) {
  return (
    <Link
      className={`button-link ${outline ? "button-outline" : ""}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={17} strokeWidth={1.5} />
    </Link>
  );
}
