/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "surface-container": "#e5eeff",
        "surface-container-highest": "#d3e4fe",
        "outline": "#757686",
        "primary-container": "#0d26c2",
        "surface-variant": "#d3e4fe",
        "surface-dim": "#cbdbf5",
        "secondary-container": "#fdc734",
        "surface-tint": "#394cde",
        "surface-container-low": "#eff4ff",
        "on-secondary-fixed-variant": "#5a4300",
        "tertiary-fixed": "#ffdad3",
        "error-container": "#ffdad6",
        "surface": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "tertiary": "#5b0900",
        "surface-container-high": "#dce9ff",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        "on-tertiary-fixed": "#3e0400",
        "on-surface": "#0b1c30",
        "on-primary-fixed": "#000b63",
        "inverse-primary": "#bcc2ff",
        "secondary": "#775a00",
        "surface-bright": "#f8f9ff",
        "primary-fixed": "#dfe0ff",
        "primary-fixed-dim": "#bcc2ff",
        "primary": "#00148e",
        "on-primary-container": "#9da8ff",
        "tertiary-container": "#841200",
        "inverse-surface": "#213145",
        "error": "#ba1a1a",
        "tertiary-fixed-dim": "#ffb4a5",
        "on-tertiary": "#ffffff",
        "on-tertiary-fixed-variant": "#8c1804",
        "on-secondary-container": "#6f5400",
        "on-surface-variant": "#454655",
        "on-background": "#0b1c30",
        "on-tertiary-container": "#ff8f78",
        "secondary-fixed-dim": "#f4bf2b",
        "on-primary-fixed-variant": "#182ec7",
        "inverse-on-surface": "#eaf1ff",
        "background": "#f8f9ff",
        "on-secondary-fixed": "#251a00",
        "outline-variant": "#c5c5d7",
        "secondary-fixed": "#ffdf98"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "md": "24px",
        "base": "4px",
        "sm": "16px",
        "lg": "48px",
        "xs": "8px",
        "xl": "80px",
        "container-max": "1280px",
        "gutter": "24px"
      },
      "fontFamily": {
        "display-hero": ["Poppins", "sans-serif"],
        "body-small": ["Poppins", "sans-serif"],
        "label-bold": ["Poppins", "sans-serif"],
        "body-main": ["Poppins", "sans-serif"],
        "headline-card": ["Poppins", "sans-serif"],
        "headline-section": ["Poppins", "sans-serif"]
      },
      "fontSize": {
        "display-hero": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "body-small": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
        "label-bold": ["14px", {"lineHeight": "1", "fontWeight": "600"}],
        "body-main": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-card": ["20px", {"lineHeight": "1.4", "fontWeight": "600"}],
        "headline-section": ["32px", {"lineHeight": "1.25", "letterSpacing": "-0.01em", "fontWeight": "600"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
