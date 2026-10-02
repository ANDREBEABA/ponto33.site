type LogoProps = {
  className?: string;
};

// Ícone da marca: copo to-go + chevrons duplos (»»). Usa currentColor.
export function LogoIcon({ className }: LogoProps) {
  return (
    <svg
      className={`logo-ico ${className ?? ""}`}
      viewBox="0 0 86 104"
      fill="none"
      stroke="currentColor"
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M27 7 h32 a4 4 0 0 1 4 4 v6 h-40 v-6 a4 4 0 0 1 4-4 Z" />
      <rect x="14" y="24" width="58" height="13" rx="4" />
      <path d="M20 41 L66 41 L59 95 a4 4 0 0 1 -4 3 H31 a4 4 0 0 1 -4 -3 Z" />
      <path d="M33 54 L45 69 L33 84" strokeWidth={8} />
      <path d="M47 54 L59 69 L47 84" strokeWidth={8} />
    </svg>
  );
}
