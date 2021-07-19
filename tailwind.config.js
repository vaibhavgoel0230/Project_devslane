const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      "3/4": "75%",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      authBgColor: "#060818",
    }),
    fontFamily: {
      CorkFont: "'Nunito', sans-serif",
    },
    extend: {
      maxWidth: {
        "1/2": "50%",
      },
      backgroundImage: (theme) => ({
        AuthImg: "url('/src/media/cork-logo.png')",
      }),
      spacing: {
        11.429: "11.429px",
        45.714: "45.714px",
        434.285: "600.285px",
        631.667: "631.667px",
      },
      fontSize: {
        40: "40px",
        14: "14px",
      },
      textColor: {
        AuthHeadColor: "#3b3f5c",
        AuthNoteColor: "#888ea8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
