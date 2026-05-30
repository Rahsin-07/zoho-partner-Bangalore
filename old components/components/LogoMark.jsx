// Reusable SVG mark inspired by the ZoFlowX logo —
// a stylized "X" formed by red, yellow and blue strokes.
// Used in the navbar, footer and decorative accents.

export default function LogoMark({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="lm-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="lm-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <linearGradient id="lm-yellow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      {/* Blue stroke ↘ */}
      <path
        d="M6 6 L20 20 L14 26 L0 12 Z"
        fill="url(#lm-blue)"
        transform="translate(4 4)"
      />
      {/* Red stroke ↙ */}
      <path
        d="M22 6 L36 6 L18 24 L4 24 Z"
        fill="url(#lm-red)"
        transform="translate(0 4)"
        opacity="0.92"
      />
      {/* Yellow accent ↗ */}
      <path
        d="M22 22 L32 32 L26 32 L16 22 Z"
        fill="url(#lm-yellow)"
        transform="translate(0 0)"
      />
    </svg>
  )
}
