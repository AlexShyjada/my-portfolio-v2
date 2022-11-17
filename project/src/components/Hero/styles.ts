import { keyframes, styled } from "@stitches/react";

export const shake = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },

  '10%': {
    transform: 'rotate(14deg)'
  },

  '20%': {
    transform: 'rotate(-8deg)'
  },

  '30%': {
    transform: 'rotate(14deg)'
  },

  '40%': {
    transform: 'rotate(-4deg)'
  },

  '50%': {
    transform: 'rotate(10deg)'
  },

  '60%': {
    transform: 'rotate(0deg)'
  },

  '100%': {
    transform: 'rotate(0deg)'
  },
})

export const translateYHeroLeft = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
    transform: 'translateY(70px)',
  },

  '100%': {
    transform: 'translateY(0)',
  }
})

export const translateYHeroRight = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
    transform: 'translateY(180px)',
  },

  '100%': {
    transform: 'translateY(0)',
  }
})

export const translateX = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(-100%)'
  }
})

export const StyledImage = styled("figure", {
  animation: `${shake} 2.5s infinite`,
})

export const StyledHero = styled("section", {
  display: "flex",
  justifyContent: "center",
  marginTop: "-60px",
  paddingTop: "130px",
  zIndex: "-1",

  backgroundImage: 'url("/heroBG.svg")',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  "div.container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
  },
});

export const StyledTextContainer = styled("div", {
  maxWidth: "1026px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",

  "span.hellow": {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    fontSize: '1.25rem',
    lineHeight: '2rem',
    textAlign: 'center',
    letterSpacing: '0.2px',

    color: '#6BA9FF',
  },
  
  'h1.mainTitle': {
    fontWeight: "$bold",
    fontSize: "3rem",
    lineHeight: "4rem",
    textAlign: "center",
    color: "$base100",
  },

  "span.subtitle": {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  
    fontWeight: '$regular',
    fontSize: '1.25rem',
    lineHeight: '2rem',
    textAlign: 'center',
    letterSpacing: '0.2px',
  
    color: '$base100',
  },
});

export const StyledButtonContato = styled("button", {
  'a.linkContato': {
    height: "60px",
    width: "fit-content",
    padding: "0 3rem",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "center",

    fontWeight: "$bold",
    fontSize: "0.85rem",
    lineHeight: "1.25rem",
    letterSpacing: "0.17px",
    textTransform: "uppercase",
    color: "$base100",

    borderRadius: '0.25rem',
    transition: '0.3s',
    backgroundColor: "$brandColorAlpha",

    '&:hover': {
      backgroundColor: "$brandColor"
    }
  },
});

export const StyledFigure = styled('figure', {
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'flex-start',
  svg: {
    '#wireframeHero': {
      '#Left': {
        animation: `${translateYHeroLeft} 8s infinite ease-in-out`,
      },
      '#Right': {
        animation: `${translateYHeroRight} 14s infinite ease-in-out`,
      }
    }
  }
})

export const StyledHeroFooter = styled('footer', {
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  gap: '1rem',
  padding: '1rem',
  background: '$base700',
  
  'div.contentContainer': {
    display: "flex",
    alignItems: "center",
    gap: '1rem',
    animation: `28s ${translateX} infinite alternate linear`,
    h2: {
      whiteSpace: "nowrap",
      display: "flex",
      gap: '1rem',
      alignItems: "center"
    }
  }
})