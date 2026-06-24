/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { inter: ["Inter", "system-ui", "sans-serif"] },
      colors: {
        navy: { DEFAULT: "#0c1f3f", 2: "#1a3560", 3: "#1e3a5f" },
        amber: { DEFAULT: "#f59e0b", dark: "#d97706", light: "#fbbf24" },
        sky: { solar: "#38bdf8" },
      },
      animation: {
        "fade-up": "fadeUp .7s cubic-bezier(.22,1,.36,1) both",
        "float": "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "count": "countUp .8s ease-out both",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: "translateY(28px)" }, to: { opacity: 1, transform: "none" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 6px 24px rgba(37,211,102,.45)" },
          "50%": { boxShadow: "0 6px 36px rgba(37,211,102,.8),0 0 0 14px rgba(37,211,102,.08)" },
        },
      },
    },
  },
  plugins: [],
};
