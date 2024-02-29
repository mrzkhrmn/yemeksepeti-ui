/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#EA004B",
        "color-interaction-primary": "#ff75a1",
        "color-interaction-secondary": "#cd0042",
      },
      backgroundImage: {
        "partner-texture":
          "url('https://images.deliveryhero.io/image/foodpanda/home-vendor-tr.jpg?width=2000&height=1280')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      backgroundSize: {
        "150%": "170%",
        "100%": "150%",
        16: "4rem",
      },
    },
  },
  plugins: [],
};
