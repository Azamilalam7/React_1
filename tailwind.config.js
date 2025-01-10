/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteSlate: "#EFF3EA",
        darkGreen: "#181C14",  // Custom dark green
        slateGray: "#3C3D37", // Slate gray
        oliveGreen: "#697565", // Olive green
        warmGray: "#524C42",  // Warm gray
        black1: "#0C0C0C",    // Black variant 1
        black2: "#0F0F0F",    // Black variant 2
      },
    },
  },
  plugins: [],
}