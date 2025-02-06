module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',  // Assure-toi que tous tes fichiers Vue sont bien pris en compte
  ],
  theme: {
    extend: {
      height: {
        TrP: "30%",
      },
      width: {
        TrP: "30%",
      },
      screens: {
        mdSmaller: "735px",
      },
      colors: {
        textDark: 'rgba(100,100,100, 1)',
        backgroundDarker: '#161616',
        backgroundDark: '#222222',
        colorTextGray: '#9B9B9B',
        orange: '#f6b846',
        appleGray: "#1d1d1f",
        backgroundColorSkills: "rgba(23,23,23, .99)",
        bg_header: "rgba(245, 245, 247, .8)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.custom-big-div-img': {
          height: '692px',
          width: '100vw',  // screen width
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer',
        },
        '.custom-small-div-img': {
          height: '602px',  // ajoute l'unité px
          width: '48vw',  // screen width
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer',
          '@media (max-width: 800px)': { // écran petit (breakpoint 640px)
            height: '440px',
          },
          '@media (max-width: 735px)': { // écran petit (breakpoint 640px)
            width: '100vw',
          },
        },
      });
    },
  ],
}