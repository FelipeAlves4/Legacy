import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      className={`brand ${light ? "brand-light" : ""}`}
      href="/"
      aria-label="Legacy — início"
    >
      <svg
        className="brand-mark"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M6 3h11v25h20v9H6V3Z" fill="currentColor" />
        <path d="M17 3h8v17l-8 8V3Z" fill="currentColor" opacity=".45" />
      </svg>
      <span>LEGACY</span>
    </Link>
  );
}
