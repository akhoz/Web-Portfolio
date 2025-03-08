/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT.js";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#1a1b26',
        'secondary-bg': '#1e1e2e',
        'main-fg': '#ffffff',
        'hover-fg': '#1a1b26',
        'base-a': '#04a5e5',
        'base-b': '#ff757f',
        'base-c': '#7287fd',
        'base-d': '#89b4fa',
        'base-e': '#1e66f5',
        'base-f': '#cba6f7',
        'base-g': '#eba0ac',
        'base-h': '#fab387',
        'base-i': '#f9e2af',
        'base-j': '#a6e3a1',
        'base-k': '#94e2d5',
        'base-l': '#74c7ec',
      }
    },
  },
  plugins: [],
});
