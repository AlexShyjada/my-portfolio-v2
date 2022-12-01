import { keyframes, styled } from "../../../styles";

export const rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },

  "100%": {
    transform: "rotate(360deg)",
  },
});

export const translateXOnPhotos = keyframes({
  "0%": {
    transform: "translateX(0)",
  },
  "100%": {
    transform: "translateX(-100%)",
  },
});

export const StyledSobreMim = styled("section", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "60px",
  padding: "60px 0",
});

export const MainInofrmationContainer = styled("article", {
  maxWidth: "1234px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px",
});

export const TextContainer = styled("aside", {
  display: "flex",
  flexDirection: "column",
  gap: "32px",

  "div.titleContainer": {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",

    "span.subtile": {
      fontSize: "$body1",
      fontWeight: "$medium",
      color: "$base400",
      textTransform: "uppercase",
      letterSpacing: "2.2px",
    },

    "h2.secundaryTitle": {
      fontWeight: "$bold",
      fontSize: "$h1",
      color: "$base100",
    },
  },

  "div.descriptionContainer": {
    width: "100%",
    maxWidth: "610px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",

    "p.description": {
      fontSize: "$body1",
      lineHeight: "2rem",
      color: "$base150",
    },

    "button.learnMoreAboutMe": {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      color: "$base150",
      fontSize: "$body1",
      textDecoration: "underline",
      lineHeight: "2rem",
      letterSpacing: "0.2px",
      cursor: "pointer",
      transition: "0.3s",

      "&:hover": {
        color: "$brandColorHover",
      },
    },
  },

  "div.buttonContainer": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",

    "button a": {
      height: "3rem",
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      color: "$base100",
      borderRadius: "0.15rem",
      transition: "0.3s",
    },

    "button.linkedin a": {
      background: "$brandColorAlpha",

      "&:hover": {
        background: "$brandColor",
      },
    },

    "button.curriculum a": {
      background: "$base700",

      "&:hover": {
        background: "$base600",
      },
    },
  },
});

export const PhotosContainer = styled("div", {
  svg: {
    position: "absolute",
    zIndex: "2",

    marginTop: "48px",
    marginLeft: "-30.5px",

    animation: `${rotate} 5s infinite linear`,
  },

  figure: {
    position: "relative",
    width: "428px",
    height: "571px",
    filter: "saturate(0)",
    transition: "0.3s",

    "&:hover": {
      filter: "saturate(1)",
    },
  },
});

export const AnimatedPhotosContainer = styled("div", {
  width: "100%",
  overflow: "hidden",
  display: "flex",

  "div.photosContainer": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1.5rem",
    paddingLeft: "48px",
    animation: `${translateXOnPhotos} 50s infinite alternate linear`,

    img: {
      filter: "saturate(0%)",
      transition: "0.3s",

      "&:hover": {
        filter: "saturate(100%)",
      },
    },
  },
});
