// TODO: Try to make it into tailwindcss plugin
//
// This module has to be used in tailwind.config.js _and_ the css must be included, e.g.
// in tailwind.config.js add:
//   module.exports = {
//     content: [...],
//     ...require("inscribe-theme"),
//   };
// in main.ts:
//   import "inscribe-theme/styles.css";

module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      mono: ["Fira Mono", "Andale Mono", "Courier New", "monospace"],
      sans: [
        "Open Sans",
        "Optima",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      serif: ["EB Garamond", "Garamond", "Georgia", "Times", "serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    // Conflicts with daisyui
    // require("@tailwindcss/forms"),
    // TODO: don't use aspec-ratio? it still has bad support on Safari:
    // https://caniuse.com/mdn-css_properties_aspect-ratio
    // require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        inscribe: {
          primary: "#e5bf86",
          secondary: "#a0c1c5",
          accent: "#ea9366",
          "accent-focus": "#e4743a",
          neutral: "#7a7469",
          // neutral: "#5b5549",
          "base-100": "#efe9d6",
          info: "#9fc7cb",
          success: "#9cd370",
          warning: "#f8ac4a",
          error: "#f82a1c",
          "--rounded-box": "0.8rem",
          "--rounded-btn": "0.6rem",
          "--rounded-badge": "0.4rem",
          "--animation-btn": "0s",
          "--animation-input": "0s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.6rem",
        },
      },
    ],
  },
};
