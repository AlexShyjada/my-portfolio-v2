import { styled } from "../../../styles";

export const StyledHeader = styled("header", {
  background: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "4rem",
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  backgroundColor: "$base900",
});

export const Container = styled("div", {
  width: "1236px",
  padding: "0 1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "nav.linksContainer": {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
});

export const Navlink = styled("nav", {
  color: "$base150",
});

export const Button = styled("button", {
  a: {
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",

    background: "rgba(255, 255, 255, 0.03)",
    padding: "0px 12px",
    color: "$base100",
    borderRadius: "0.25rem",
    transition: "0.3s",
    
    '&:hover': {
      background: "rgba(255, 255, 255, 0.1)",
    }
  },
});