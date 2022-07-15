/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    screens: {
      xxxs: "320px",
      xxs: "360px",
      xs: "420px",
      "sm.5": "541px",
      "2md": "769px",
      "3md": "991px",
      ...defaultTheme.screens,
    },

    extend: {
      screens: {
   
        "3xl": "1540px",
      },
      colors: {
        "primary-black": "#140700",
        "primary-black-90": "rgb(20 7 0 / 90%)",
        "primary-black-80": "rgb(20 7 0 / 80%)",
        "primary-orange": "#F6611A",
        "primary-white": "#FAFCFE",
        "primary-gray": "#565656",
        "primary-brown": "#68574A",
        "primary-white-90": "rgb(255 255 255 / 90%)",
        "primary-white-40": "#FFFFFF66",
        "primary-gray-02": "#F4F0EC",
      },
      lineHeight: {
        tighter: "60px",
      },
      fontSize: {
        "3.5xl": "32px",
        "4.5xl": "40px",
        "4.8xl": "44px",
        "5.2xl": "52px",
        "6.5xl": "68px",
      },
      padding: {
        6.5: "26px",
      },
      skew: {
        18: "18deg",
      },
      width: {
        400: "400px",
      },
      height: {
        400: "400px",
      },
      boxShadow: {
        "btn-shadow": "10px 10px 9px rgb(107 107 107 / 20%)"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
