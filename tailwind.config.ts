/** @type {import('tailwindcss').Config} */
export const content = ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"]
export const theme = {
  fontFamily: {
    sans: ["Roboto", "sans"],
  },
  extend: {
    colors: {
      background: "rgb(40 40 40 / <alpha-value>)",
      "on-background": "rgb(255 255 255 / <alpha-value>)",
    },
    data: {
      open: "open=true",
    },
  },
}
export const plugins = []
