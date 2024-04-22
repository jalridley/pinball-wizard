const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        digitalMonoItalic: [
          'digital-mono-italic',
          ...defaultTheme.fontFamily.sans,
        ],
        digitalMono: ['digital-mono', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'digital-mono-italic',
            src: 'url(/src/fonts/digital-7-monoitalic.ttf)',
          },
          {
            fontFamily: 'digital-mono',
            src: 'url(/src/fonts/digital-7-mono.ttf)',
          },
        ],
      });
    }),
  ],
};
