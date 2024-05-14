/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          darker: "var(--secondary-darker)",
          foreground: "var(--secondary-foreground)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
        },
        input: "var(--input)",
        "input-border": "var(--input-border)",
        border: "var(--border)",
        ring: "var(--ring)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "infinite-scroll": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 10s linear infinite",
        "infinite-scroll-reverse":
          "infinite-scroll-reverse 10s linear infinite",
      },
      screens: {
        xl: "1155px",
      },
      backgroundImage: {
        "custom-gradient-up":
          "linear-gradient(180deg, #010816 0%, rgba(1, 8, 22, 0.84) 32.81%, rgba(1, 8, 22, 0.73) 55.58%, rgba(1, 8, 22, 0.48) 78.18%, rgba(1, 8, 22, 0) 100%)",
        "custom-gradient-down":
          "linear-gradient(0deg, #010816 0%, rgba(1, 8, 22, 0.84) 32.81%, rgba(1, 8, 22, 0.73) 55.58%, rgba(1, 8, 22, 0.48) 78.18%, rgba(1, 8, 22, 0) 100%)",
        "epic-border-line":
          "radial-gradient(47.81% 57644998.79% at 47.81% 0%, #2774EC 0%, rgba(39, 116, 236, 0) 100%)",
        "radial-grad":
          "radial-gradient(100% 110% at 50% 0%, #310031 10%, #000000 90%)",
      },
      lineHeight: {
        "super-loose": "4rem",
      },
      letterSpacing: {
        "super-widest": ".2em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
