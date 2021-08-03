const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      blue: theme("colors.blue.100"),
    }),
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
        29.714: "29.714px",
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
      lineHeight: {
        11: "44px",
      },
      boxShadow: {
        "primary-xl":
          "0 20px 25px -5px rgb(180, 194, 247), 0 10px 10px -5px rgb(180, 194, 247)",
        "warning-xl":
          "0 20px 25px -5px rgb(244, 246, 156), 0 10px 10px -5px rgb(244, 246, 156)",
        "danger-xl":
          "0 20px 25px -5px rgb(249, 203, 199), 0 10px 10px -5px rgb(249, 203, 199)",
        "info-xl":
          "0 20px 25px -5px rgb(199, 245, 249), 0 10px 10px -5px rgb(199, 245, 249)",
        "success-xl":
          "0 20px 25px -5px rgb(187, 247, 180), 0 10px 10px -5px rgb(187, 247, 180)",
      },
      transitionDuration: {
        3000: "3000ms",
      },
      inset: {
        0: "0px",
        15: "60px",
        3.5: "18px",
      },
      screens: {
        break: { max: "980px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
