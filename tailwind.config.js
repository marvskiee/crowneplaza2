module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        icon: '40px',
      },
      minWidth: {
        card: '300px',
      },
      maxWidth: {
        card: '300px',
        container: '1300px',
        modal: '800px',
      },
      minHeight: {
        card: '250px',
      },
      maxHeight: {
        card: '250px',
      },
      height: {
        carouselImage: '700px',
      },
    },
  },
  plugins: [],
}
