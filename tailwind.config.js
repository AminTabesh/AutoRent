/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#194BF0",
        "primary-darker": "#0D3BD0",
        secondary: "#FDB713",
        "secondary-darker": "#D79C10",
        background: "#F3F3F3",
      },
      fontFamily: {
        EstedadMed: ["Estedad-medium", "sans-serif"],
        EstedadLight: ["Estedad-light", "sans-serif"],
        EstedadBold: ["Estedad-bold", "sans-serif"],
        EstedadXBold: ["Estedad-Xbold", "sans-serif"],
      },
      backgroundImage: {
        header: "url('/public/images/header.png')",
        why: "url('/public/images/Carbg.png')",
        footer: "url('/public/images/Footer.png')",
        login: "url('/public/images/login-bg.png')",
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "come-in": {
          "0%": { transform: "translateY(-20%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        scroll: "slider 2s linear infinite",
        comeIn: "come-in 1s ease-out",
      },
    },
  },
  plugins: [],
};
