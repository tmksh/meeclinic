/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': '768px',   // タブレット版
        'xl': '1440px',  // PC版
      },
      colors: {
        "d-mk-rg5": "var(--d-mk-rg5)",
        "harmonized-palette-azure-1000": "var(--harmonized-palette-azure-1000)",
        "harmonized-palette-azure-600": "var(--harmonized-palette-azure-600)",
        "harmonized-palette-azure-700": "var(--harmonized-palette-azure-700)",
        "harmonized-palette-azure-800": "var(--harmonized-palette-azure-800)",
        "harmonized-palette-azure-900": "var(--harmonized-palette-azure-900)",
        "harmonized-palette-fuchsia-1000":
          "var(--harmonized-palette-fuchsia-1000)",
        "harmonized-palette-fuchsia-600":
          "var(--harmonized-palette-fuchsia-600)",
        "harmonized-palette-fuchsia-700":
          "var(--harmonized-palette-fuchsia-700)",
        "harmonized-palette-fuchsia-800":
          "var(--harmonized-palette-fuchsia-800)",
        "harmonized-palette-fuchsia-900":
          "var(--harmonized-palette-fuchsia-900)",
        "harmonized-palette-mustard-1000":
          "var(--harmonized-palette-mustard-1000)",
        "harmonized-palette-mustard-600":
          "var(--harmonized-palette-mustard-600)",
        "harmonized-palette-mustard-700":
          "var(--harmonized-palette-mustard-700)",
        "harmonized-palette-mustard-800":
          "var(--harmonized-palette-mustard-800)",
        "harmonized-palette-mustard-900":
          "var(--harmonized-palette-mustard-900)",
        "harmonized-palette-red-1000": "var(--harmonized-palette-red-1000)",
        "harmonized-palette-red-600": "var(--harmonized-palette-red-600)",
        "harmonized-palette-red-700": "var(--harmonized-palette-red-700)",
        "harmonized-palette-red-800": "var(--harmonized-palette-red-800)",
        "harmonized-palette-red-900": "var(--harmonized-palette-red-900)",
        "harmonized-palette-turquoise-1000":
          "var(--harmonized-palette-turquoise-1000)",
        "harmonized-palette-turquoise-600":
          "var(--harmonized-palette-turquoise-600)",
        "harmonized-palette-turquoise-700":
          "var(--harmonized-palette-turquoise-700)",
        "harmonized-palette-turquoise-800":
          "var(--harmonized-palette-turquoise-800)",
        "harmonized-palette-turquoise-900":
          "var(--harmonized-palette-turquoise-900)",
        "p-tp-SAU": "var(--p-tp-SAU)",
        "x-100": "var(--x-100)",
        "x-2": "var(--x-2)",
      },
      boxShadow: {},
    },
  },
  plugins: [],
};
