/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.tsx"],
    theme: {
      extend: {
        colors: {
          brand: {
            "dark-grey": "#0e0e0e",
            "orange": "#ff6444",
            "orange-1": "#e98024",
            "secondary": "#85acb0"
          },
          general: {
            "section-1": "#f2f3f4",
          },
          text: {
            prominent:" #333333",
            "colored-barrier": "#008000"
          },
          purchase: {
            "section-1": "#3d9494",
            "section-2": "#d33636",
          },
          primary:  {
            DEFAULT: "#ff444f",
            hover: "#eb3e48"
          },
          secondary: "#999999",
          disabled: {
            DEFAULT: "#eaeced",
            100: "#e6e9e9",
            200: "#d6d6d6"
          },
          active: "#d6dadb",
          danger: "#ec3f3f",
          success: "#4bb4b3",
          warning: "#ffad3a",
          info: "#377cfc",
          transparent: "transparent",
        },
        backgroundImage: {
          "gradient-success": "linear-gradient(to top, #ffffff, rgba(75, 180, 179, 0.16))",
          "gradient-danger": "linear-gradient(to top, #ffffff, rgba(255, 68, 79, 0.16))",
        },
      },
    },
    plugins: [],
}
