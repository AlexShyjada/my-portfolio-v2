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
  
  '::-webkit-scrollbar': {
    width: '6px',
    height: '0',
    scrollbarWidth: '6px',
  },

  '::-webkit-scrollbar, ::-webkit-scrollbar-track': {
    background: '$base800'
  },
  
  '::-webkit-scrollbar-thumb': {
    background: '$base600'
  },

  'body, input, textarea, button': {
    fontFamily: "$mainFont",
    fontWeight: "$regular",
  },
  
  a: {
    textDecoration: "none"
  },
  
})