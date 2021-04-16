import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabsContainer: {
    background: "var(--clr-white)",
    border: "1px solid #ccc",
    borderRadius: "var(--radius)",
    boxShadow: "var(--dark-shadow)",
  },
  tab: {
    cursor: "pointer",
  },
}));

export { useStyles };
