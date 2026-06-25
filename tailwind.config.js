/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter:   ["Inter",   "system-ui", "sans-serif"],
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        primary:   "#0F172A",
        secondary: "#1E293B",
        accent:    "#FBBF24",
        "accent-hover": "#F59E0B",
        success:   "#16A34A",
        background: "#F8FAFC",
        border:    "#E2E8F0",
      },
      maxWidth: {
        container: "1300px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up":    "fadeUp .7s cubic-bezier(.22,1,.36,1) both",
        "float":      "floatAnim 5s ease-in-out infinite",
        "pulse-glow": "chipPulse 2.5s ease-in-out infinite",
        "spin-slow":  "spin 12s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(28px)" },
          to:   { opacity: 1, transform: "none" },
        },
        floatAnim: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        chipPulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(251,191,36,.35)" },
          "50%":     { boxShadow: "0 0 0 8px rgba(251,191,36,0)" },
        },
      },
    },
  },
  plugins: [],
};
