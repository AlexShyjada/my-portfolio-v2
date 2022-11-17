import { createStitches } from "@stitches/react";

export const {
  css,
  theme,
  config,
  styled,
  keyframes,
  globalCss,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      //Brand Collors
      brandColor: 'rgba(0, 97, 234, 1)',
      brandColorHover: 'rgba(41, 130, 255, 1)',
      brandColorAlpha: 'rgba(0, 97, 234, 0.15)',

      //Base Colors
      base900: 'rgba(25, 24, 27, 1)',
      base800: 'rgba(28, 27, 29, 1)',
      base700: 'rgba(32, 31, 35, 1)',
      base600: 'rgba(47, 46, 51, 1)',
      base400: 'rgba(126, 124, 138, 1)',
      base300: 'rgba(197, 196, 204, 1)',
      base200: 'rgba(226, 225, 230, 1)',
      base150: 'rgba(244, 244, 245, 1)',
      base100: 'rgba(255, 255, 255, 1)',

      //Red
      redDark: 'rgba(226, 54, 69, 1)',
      red: 'rgba(229, 77, 89, 1)',
      redAlpha: 'rgba(226, 54, 69, 0.15)',

      //Yellow
      yellowDark: 'rgba(237, 181, 7, 1)',
      yellow: 'rgba(247, 206, 81, 1)',
      yellowAlpha: 'rgba(237, 181, 7, 0.15)',

      //Green
      greenDark: 'rgba(0, 143, 102, 1)',
      green: 'rgba(0, 184, 132, 1)',
      greenAlpha: 'rgba(0, 143, 102, 0.15)',
    },

    fontSizes: {
      h1: '3rem',
      h2: '2rem',
      h3: '1.5rem',
      h4: '1.25rem',
      body1: '1rem',
      body2: '0.875rem',
      caption: '0.75rem', 
      small: '0.5rem',
    },

    fontWeights: {
      bold: '700',
      semiBOld: '600',
      medium: '500',
      regular: '400',
    },

    fonts: {
      mainFont: '"sora", sans-serif',
    }
  }
})