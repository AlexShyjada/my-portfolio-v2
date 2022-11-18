import { styled } from "../../../styles";

export const StyledPortfolio = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "60px 0px",

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

export const StyledHeaderPortifolio = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",

  "div.mainInformation": {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",

    "span.subtitle": {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "32px",
      letterSpacing: "2.2px",
      textTransform: "uppercase",
      color: "$base400",
    },
    "h2.secundaryTitle": {
      fontWeight: "700",
      fontSize: "3rem",
      lineHeight: "4rem",
      color: "$base100",
    },
  },

  button: {
    a: {
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      padding: "0px 48px",

      color: "$base100",
      fontSize: '$body2',
      textTransform: 'uppercase',
      fontWeight: '$bold',
      borderRadius: "0.25rem",

      transition: "0.3s",
      background: "rgba(255, 255, 255, 0.03)",

      "&:hover": {
        background: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
});

export const StyledPortifólioList = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1.5rem",
  listStyle: "none",
});

export const StyledCardPortfolio = styled("article", {
  transition: "0.3s",
  backgroundColor: "$base700",
  borderRadius: "0.25rem",
  overflow: "hidden",

  "figure.imageContainer": {
    position: "relative",
    maxHeight: "435px",
    height: "435px",
    width: "100%",
    overflow: "hidden",

    img: {
      objectFit: "cover",
    },
  },

  "div.textContainer": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2rem 1rem",

    "div.mainInformationContainer": {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",

      "h3.tertiaryTitle": {
        fontWeight: "$bold",
        fontSize: "1.5rem",
        lineHeight: "2rem",
        color: "$base100",
      },

      "span.postDescription": {
        fontWeight: "$regular",
        fontSize: "1rem",
        lineHeight: "1.5rem",
        letterSpacing: "0.2px",
        color: "$base100",
      },
    },

    "a.cardLink": {
      width: "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginTop: "2.25rem",

      fontSize: "$body1",
      fontWeight: "$bold",
      color: "$base100",

      transition: "0.3s",

      "&:hover": {
        color: "$brandColorHover",
      },
    },
  },

  "&:hover": {
    backgroundColor: "$base600",
  },
});
