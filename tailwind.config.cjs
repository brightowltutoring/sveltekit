module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte,md,svx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: null,
          },
        },
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // btred: '#ff0005',
        // btgreen: '#59d0ae',
        // btgray: '#37465a',
      },
    },
  },
};
