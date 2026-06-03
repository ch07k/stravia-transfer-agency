type WhatsAppIconProps = {
  size?: number;
  className?: string;
};

export function WhatsAppIcon({ size = 20, className }: WhatsAppIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.34 19.58 5.5 15.5a8.2 8.2 0 1 1 3.24 3.15l-4.4.93Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M4.34 19.58 5.5 15.5a8.2 8.2 0 1 1 3.24 3.15l-4.4.93Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.13 8.6c.16-.35.33-.36.49-.36h.42c.14 0 .36.05.55.43.2.47.66 1.62.72 1.74.05.12.08.26.02.42-.08.18-.13.26-.26.4-.13.15-.27.33-.38.44-.13.13-.26.27-.11.5.15.23.66 1.1 1.42 1.78.98.87 1.8 1.14 2.06 1.27.26.13.42.11.58-.07.18-.2.66-.76.84-1.02.18-.26.36-.22.6-.13.25.09 1.56.74 1.83.87.27.13.45.2.52.31.06.12.06.68-.16 1.33-.23.64-1.31 1.23-1.84 1.28-.48.05-1.1.07-1.77-.11-.4-.13-.92-.3-1.59-.58-2.8-1.2-4.63-3.99-4.77-4.18-.14-.2-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34Z"
        fill="currentColor"
      />
    </svg>
  );
}
