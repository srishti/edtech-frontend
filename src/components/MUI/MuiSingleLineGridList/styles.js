import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridListContainer: {
    height: "15rem",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into its own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    height: "100%",
  },
  gridListItem: {
    height: "100% !important",
  },
  gridImage: {
    height: "100%",
    objectFit: "cover",
  },
  titleBar: {
    background: "var(--clr-black)",
  },
  title: {
    fontWeight: "300",
    color: "var(--clr-white)",
    fontSize: "0.875rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
}));

export { useStyles };