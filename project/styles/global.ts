import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    background: "none",
    border: "none"
  },

  body: {
    color: '$base300',
    backgroundColor: '$base900',
    '-webkit-font-smoothing': 'antialised',
  },

  'body, input, textarea, button': {
    fontFamily: "$mainFont",
    fontWeight: "$regular",
  },

  a: {
    textDecoration: "none"
  }
})