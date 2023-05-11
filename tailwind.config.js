/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
    colors: {
      primary: {
        red: {
          light: 'hsl(0, 100%, 67%)',
          trans: 'hsla(0, 100%, 67%, 14%)',
        },
        orangey: {
          yellow: 'hsl(39, 100%, 56%)',
          trans: 'hsla(39, 100%, 56%, 14%)',
        },
        green: {
          teal: 'hsl(166, 100%, 37%)',
          trans: 'hsla(166, 100%, 37%, 14%)',
        },
        cobalt: {
          blue: 'hsl(234, 85%, 45%)',
          trans: 'hsla(234, 85%, 45%, 14%)',
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
    fontFamily: {
      sans: ['Hanken Grotesk', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        section: 'repeat(2, 1fr)',
        leftComponent: 'max-content 1fr max-content',
        itemRight: 'max-content 1fr max-content',
        'repeat-3-max': 'repeat(3, max-content)',
      },
      gridTemplateRows: {
        leftComponent: 'max-content 1fr max-content',
        circle: '1fr max-content',
        footer: 'max-content 1fr',
        rightComponent: 'max-content 1fr max-content',
        rightContainer: 'repeat(4, max-content)',
      },
    },
  },
  plugins: [],
};
