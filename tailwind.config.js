/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        red: {
          light: 'hsl(0, 100%, 67%)',
        },
        orangey: {
          yellow: 'hsl(39, 100%, 56%)',
        },
        green: {
          teal: 'hsl(166, 100%, 37%)',
        },
        cobalt: {
          blue: 'hsl(234, 85%, 45%)',
        },
      },
      neutral: {
        white: 'hsl(0, 0%, 100%)',
        pale: {
          blue: 'hsl(221, 100%, 96%)',
        },
        light: {
          lavender: 'hsl(241, 100%, 89%)',
        },
        dark: {
          grayblue: 'hsl(224, 30%, 27%)',
        },
      },
      gradient: {
        light: {
          slateblue: 'hsl(252, 100%, 67%)',
          royalblue: 'hsl(241, 81%, 54%)',
        },
        violet: {
          blue: 'hsla(256, 72%, 46%, 1)',
        },
        persian: {
          blue: 'hsla(241, 72%, 46%, 0)',
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
