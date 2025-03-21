import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",
        onBackground: "hsl(var(--on-background))",
        onSurface: "hsl(var(--on-surface))",
        border: "hsl(var(--border))",

        primary1: "hsl(var(--primary1))",
        onPrimary: "hsl(var(--on-primary))",
        primaryContainer: "hsl(var(--primary-container))",
        onPrimaryContainer: "hsl(var(--on-primary-container))",

        secondary1: "hsl(var(--secondary))",
        onSecondary: "hsl(var(--on-secondary))",
        secondaryContainer: "hsl(var(--secondary-container))",
        onSecondaryContainer: "hsl(var(--on-secondary-container))",

        tertiary1: "hsl(var(--tertiary))",
        onTertiary: "hsl(var(--on-tertiary))",
        tertiaryContainer: "hsl(var(--tertiary-container))",
        onTertiaryContainer: "hsl(var(--on-tertiary-container))",

        // border: "hsl(var(--outline))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        foreground: "hsl(var(--surface))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          background: "hsl(var(--bgs))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        subtle: {
          DEFAULT: "hsl(var(--subtle))",
          foreground: "hsl(var(--subtle-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'primary-green': {
          50: '#e6f9ee',
          100: '#ccf3dd',
          200: '#99e7bb',
          300: '#66db99',
          400: '#33cf77',
          500: '#00c355',
          600: '#00b24b', // original color
          700: '#009e42',
          800: '#008a3a',
          900: '#007631',
          950: '#004d20',
        },
        'primary-blue': {
          50: '#edf6fc',
          100: '#daedf9',
          200: '#b6dbf3',
          300: '#91c9ed',
          400: '#6db7e7',
          500: '#48a5e1',
          600: '#3FA1D8', // Your original color
          700: '#2383bc',
          800: '#1c6998',
          900: '#154f74',
          950: '#0f3550',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["var(--font-aeonik)"],
        default: ["var(--font-inter)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": {
            transform: "translateX(0%)",
            transformOrigin: "50% 50%",
          },
          "15%": { transform: "translateX(-4px) rotate(-4deg)" },
          "30%": { transform: "translateX(6px) rotate(4deg)" },
          "45%": { transform: "translateX(-6px) rotate(-2.4deg)" },
          "60%": { transform: "translateX(2px) rotate(1.6deg)" },
          "75%": { transform: "translateX(-1px) rotate(-0.8deg)" },
        },
        spinner: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        blink: {
          "0%": {
            opacity: "0.2",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0.2",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        "image-glow": {
          "0%": {
            opacity: "0",
            "animation-timing-function": "cubic-bezier(.74, .25, .76, 1)",
          },
          "10%": {
            opacity: "0.5",
            "animation-timing-function": "cubic-bezier(.12, .01, .08, .99)",
          },
          "100%": {
            opacity: "0.7",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        loading: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        grid: "grid 15s linear infinite",
        wiggle: "wiggle 0.75s infinite",
        spinner: "spinner 1.2s linear infinite",
        blink: "blink 1.4s infinite both",
        shimmer: "shimmer 5s infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "image-glow": "image-glow 4s ease-out 0.6s forwards",
        marquee: "marquee var(--duration) linear infinite",
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        loading: "loading 0.5s linear infinite",
        'pulse-subtle': 'pulse-subtle 3s infinite',
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar"),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
