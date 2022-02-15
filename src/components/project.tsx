import React from "react";
import CardList from "./cardList";
import SideBar from "./sideBar";
import Header from "./header";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import theme from "./projectTheme";

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(0),
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.background.default
  },
  sideBar: {
    minWidth: 190,
    margin: theme.spacing(10, 1, 1, 1)
  },
  cardList: {
    margin: theme.spacing(10, 1, 1, 1),
    flexGrow: 1,
    minWidth: 350
  }
});

export default function Body() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Hidden xsDown>
        <div className={classes.sideBar}>
          <SideBar />
        </div>
      </Hidden>
      <div className={classes.cardList}>
        <CardList />
      </div>
    </div>
  );
}
