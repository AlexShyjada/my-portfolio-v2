import { keyframes, styled } from "../../../styles";

export const translateIconY = keyframes({
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-8px)",
  },

  "100%": {
    transform: "translateY(0)",
  },
});

export const StyledServicos = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "4rem 0",

  "div.container": {
    maxWidth: "1234px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "3rem",
    padding: "0 1.5rem",
  },
});

export const StyledHeder = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "3rem",
});

export const StyledTitleContainer = styled("li", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "569px",
  gap: "1rem",

  "div.mainInformation": {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    "span.subtitle": {
      fontWeight: "$medium",
      fontSize: "$body1",
      lineHeight: "32px",
      letterSpacing: "2.2px",
      textTransform: "uppercase",
      color: "$base400",
    },
    "h2.secundaryTitle": {
      fontWeight: "$bold",
      fontSize: "$h1",
      lineHeight: "4rem",
      color: "$base100",
    },
  },

  "p.description": {
    fontWeight: "$regular",
    fontSize: "$body1",
    lineHeight: "1.5rem",
    letterSpacing: "0.2px",
    color: "$base100",
  },
});

export const StyledListContainer = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  listStyle: "none",

  li: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
});

export const ServicesList = styled("ul", {
  listStyle: "none",
  display: "flex",
  gap: "1.5rem",

  "li.serviceCard": {
    maxHeight: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    padding: "3rem 1.5rem",
    borderRadius: "0.5rem",

    transition: "0.3s",
    backgroundColor: "$base700",

    figure: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      heigth: "80px",
    },

    h3: {
      fontWeight: "$bold",
      fontSize: "$h3",
      lineHeight: "2rem",
      textAlign: "center",
      color: "$base100",
    },

    span: {
      fontWeight: "$regular",
      fontSize: "$body1",
      lineHeight: "1.5rem",
      textAlign: "center",
      letterSpacing: "0.2px",
      color: "$base100",
    },



    "&.serviceOne:hover": {
      "-webkit-box-shadow": "0px 0px 71px 0px rgba(31,127,240,0.5)",
      "-moz-box-shadow": "0px 0px 71px 0px rgba(31,127,240,0.5)",
      boxShadow: "0px 0px 30px 0px rgba(31,127,240,0.5)",
    },

    "&.serviceOTwo:hover": {
      "-webkit-box-shadow": "0px 0px 71px 0px rgba(60, 184, 108, 0.5)",
      "-moz-box-shadow": "0px 0px 71px 0px rgba(60, 184, 108, 0.5)",
      boxShadow: "0px 0px 30px 0px rgba(60, 184, 108, 0.5)",
    },

    "&.serviceThree:hover": {
      "-webkit-box-shadow": "0px 0px 71px 0px rgba(247, 50, 110, 0.5)",
      "-moz-box-shadow": "0px 0px 71px 0px rgba(247, 50, 110, 0.5)",
      boxShadow: "0px 0px 30px 0px rgba(247, 50, 110, 0.5)",
    },

    "&:hover": {
      cursor: "pointer",
      background: "$base600",
      figure: {
        img: {
          animation: `1.5s ${translateIconY} infinite ease-in-out`,
        },
      },
    },
  },
});
