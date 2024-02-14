/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'gradientBg1' : '#e5939c',
        'gradientBg2' : '#eeaad5',
        'terminalBg'  : '#22202c',
        'topbarBg'    : '#f7c196',
        'topbarBlue'  : '#a4b9ef',
        'accentBlue'  : '#8ea8eb',
        'topbarViola' : '#c6aae8',
        'topbarOrange': '#e28c8c',
        'accentOrange': '#dd7878',
        'topbarGreen' : '#b3e1a3',

      }
    }
  },
  plugins: []
};
