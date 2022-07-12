/** @type {import('tailwindcss').Config} */
const withAnimations = require("animated-tailwindcss");
module.exports = withAnimations({
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accentPrimary: "#5802AD",
        accentSecondary: "#35006A",
        accentText: "#DBECFF",
        main: "#100020",
      },
      backgroundImage: {
        heroMobile:
          " linear-gradient(to bottom, rgb(0 0 0 / 43%),rgb(0 0 0 / 67%)),url('./assets/images/HeroMobile.jpg')",
        heroDesktop:
          " linear-gradient(to bottom, rgb(0 0 0 / 43%),rgb(0 0 0 / 67%)),url('./assets/images/HeroDesktop.jpg')",
        sectionImg: "url('./assets/images/endless-constellation.svg')",
      },
    },
  },
  plugins: [
    require("tailwindcss-animatecss")({
      classes: [
        "animate__animated",
        "animate__fadeIn",
        "animate__bounceIn",
        "animate__lightSpeedOut",
        "animate__rubberBand",
      ],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ["responsive", "hover", "reduced-motion"],
    }),
  ],
});
