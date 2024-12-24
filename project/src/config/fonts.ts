// Central configuration for all font assets
export const fonts = {
  // Display Fonts
  display: {
    greatVibes: {
      name: 'GreatVibes',
      weights: {
        regular: {
          path: '/fonts/GreatVibes-Regular.ttf',
          weight: 400,
        },
      },
    },
    lexend: {
      name: 'Lexend',
      weights: {
        medium: {
          path: '/fonts/Lexend-Medium.ttf',
          weight: 500,
        },
      },
    },
  },

  // Body Fonts
  body: {
    quicksand: {
      name: 'Quicksand',
      weights: {
        light: {
          path: '/fonts/Quicksand-Light.ttf',
          weight: 300,
        },
        regular: {
          path: '/fonts/Quicksand-Regular.ttf',
          weight: 400,
        },
        medium: {
          path: '/fonts/Quicksand-Medium.ttf',
          weight: 500,
        },
        semibold: {
          path: '/fonts/Quicksand-SemiBold.ttf',
          weight: 600,
        },
        bold: {
          path: '/fonts/Quicksand-Bold.ttf',
          weight: 700,
        },
      },
    },
  },
};

// CSS for font-face declarations
export const fontFaces = `
  /* Display Fonts */
  @font-face {
    font-family: '${fonts.display.greatVibes.name}';
    src: url('${fonts.display.greatVibes.weights.regular.path}') format('truetype');
    font-weight: ${fonts.display.greatVibes.weights.regular.weight};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: '${fonts.display.lexend.name}';
    src: url('${fonts.display.lexend.weights.medium.path}') format('truetype');
    font-weight: ${fonts.display.lexend.weights.medium.weight};
    font-style: normal;
    font-display: swap;
  }

  /* Body Fonts */
  @font-face {
    font-family: '${fonts.body.quicksand.name}';
    src: url('${fonts.body.quicksand.weights.light.path}') format('truetype');
    font-weight: ${fonts.body.quicksand.weights.light.weight};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: '${fonts.body.quicksand.name}';
    src: url('${fonts.body.quicksand.weights.regular.path}') format('truetype');
    font-weight: ${fonts.body.quicksand.weights.regular.weight};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: '${fonts.body.quicksand.name}';
    src: url('${fonts.body.quicksand.weights.medium.path}') format('truetype');
    font-weight: ${fonts.body.quicksand.weights.medium.weight};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: '${fonts.body.quicksand.name}';
    src: url('${fonts.body.quicksand.weights.semibold.path}') format('truetype');
    font-weight: ${fonts.body.quicksand.weights.semibold.weight};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: '${fonts.body.quicksand.name}';
    src: url('${fonts.body.quicksand.weights.bold.path}') format('truetype');
    font-weight: ${fonts.body.quicksand.weights.bold.weight};
    font-style: normal;
    font-display: swap;
  }
`;

// CSS Variables for font families
export const fontVariables = `
  :root {
    --font-display: '${fonts.display.greatVibes.name}', cursive;
    --font-heading: '${fonts.display.lexend.name}', sans-serif;
    --font-body: '${fonts.body.quicksand.name}', sans-serif;
  }
`;