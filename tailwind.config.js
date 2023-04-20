const colors = require('tailwindcss/colors');

export default {
  theme: {
    extend: {
      screens: {
        xs: {
          min: '0px',
          max: '640px',
        },
        sxl: {
          min: '1536px',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
