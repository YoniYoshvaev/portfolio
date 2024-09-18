module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#93c47d',
        // accent: '#B809C3',

      },
   
      backgroundImage: {
        site: "url('./assets/site-bg6.jpg')",
        about: "url('./assets/image.png')",
        services: "url('./assets/servicepic.png')",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'html': { scrollBehavior: 'smooth' },
      });
    },
  ],
};