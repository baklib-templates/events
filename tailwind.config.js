/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./layout/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/**/*.liquid",
    "./statics/**/*.liquid",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: "var(--theme-color-base-100)",
          200: "var(--theme-color-base-200)",
          300: "var(--theme-color-base-300)",
          content: "var(--theme-color-base-content)",
        },
        primary: "var(--theme-color-primary)",
        "primary-content": "var(--theme-color-primary-content)",
        secondary: "var(--theme-color-secondary)",
        "secondary-content": "var(--theme-color-secondary-content)",
        accent: "var(--theme-color-accent)",
        "accent-content": "var(--theme-color-accent-content)",
        neutral: "var(--theme-color-neutral)",
        "neutral-content": "var(--theme-color-neutral-content)",
        info: "var(--theme-color-info)",
        "info-content": "var(--theme-color-info-content)",
        success: "var(--theme-color-success)",
        "success-content": "var(--theme-color-success-content)",
        warning: "var(--theme-color-warning)",
        "warning-content": "var(--theme-color-warning-content)",
        error: "var(--theme-color-error)",
        "error-content": "var(--theme-color-error-content)",
      },
    },
  },
  plugins: [],
};
