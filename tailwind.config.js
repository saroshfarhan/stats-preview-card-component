/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBackround: "hsl(233, 47%, 7%)",
        cardBackground: "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
        mainHeading_stats: "hsl(0, 0%, 100%)",
        mainParagraph: "hsla(0, 0%, 100%, 0.75)",
        statHeading: "hsla(0, 0%, 100%, 0.6)",
      },
      backgroundImage: (theme) => ({
        "test-device-lg": "url('/images/image-header-desktop.jpg')",
        "test-device-sm": "url('/images/image-header-mobile.jpg')",
      }),
    },
    container: {
      center: true,
    },
    fontFamily: {
      para: ["Lexend Deca"],
      heading: ["Inter"],
    },
  },
  plugins: [],
};
