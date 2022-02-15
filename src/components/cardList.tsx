import React from "react";
import { Typography, Card, Chip, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./projectTheme";
import { cardList, projectTitle } from "./store";

if (theme.palette.type === "light") {
  //light mode shadows
  var myCardBackground = "#ffffff";
  var myNormalShadow =
    "5px 5px 10px #999999, -5px -5px 10px #ffffff, inset 5px 5px 10px #999999, inset -5px -5px 10px #ffffff";
  var myHoverShadow =
    "8px 8px 16px #999999, -8px -8px 16px #ffffff, inset 0px 0px 0px #ffffff, inset 0px 0px 0px #999999";
} else {
  //dark mode shadows
  var myCardBackground = "linear-gradient(145deg, #2b2b2b, #333333)";
  var myNormalShadow =
    "5px 5px 10px #282828, -5px -5px 10px #383838, inset 5px 5px 10px #242424, inset -5px -5px 10px #3c3c3c";
  var myHoverShadow =
    "8px 8px 16px #282828, -8px -8px 16px #383838, inset 0px 0px 0px #242424, inset 0px 0px 0px #3c3c3c";
}

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(0, 1),
    backgroundColor: theme.palette.background.default
  },
  projectTitle: {
    textAlign: "left",
    color: theme.palette.text.primary
  },
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: 1200,
    marginRight: "auto",
    marginLeft: "auto",
    border: 0,
    borderRadius: 24,
    background: myCardBackground,
    boxShadow: myNormalShadow,
    "&:hover": {
      boxShadow: myHoverShadow
    }
  },
  information: {
    display: "flex"
  },
  cardTitle: {
    textAlign: "left",
    margin: theme.spacing(0, 0, 1.5, 0),
    color: theme.palette.text.primary
  },
  leftPanel: {
    flexGrow: 1,
    minWidth: "30%"
  },
  citation: {
    textAlign: "left",
    noWrap: true,
    color: theme.palette.text.secondary
  },
  chip: {
    margin: theme.spacing(0.5),
    color: theme.palette.text.secondary
  },
  rightPanel: {
    flexGrow: 1
  },
  quote: {
    margin: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary
  }
});

export default function CardList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.projectTitle}>
        {projectTitle()}
      </Typography>
      {cardList().map((card) => (
        <Card variant="outlined" key={card.id} className={classes.card}>
          <Typography variant="h5" className={classes.cardTitle}>
            {card.tag}
          </Typography>
          <div className={classes.information}>
            <div className={classes.leftPanel}>
              <div className={classes.citation}>
                <Typography variant="body1">
                  <b>
                    {`${card.author[0] && card.author[0]} ${card.time.year}`}
                  </b>
                </Typography>
              </div>
              <div className={classes.citation}>
                <Typography variant="body1">
                  {card.author.join(" and ")}
                </Typography>
              </div>
              <div className={classes.citation}>
                <Typography variant="body1">
                  {`${card.publisher}, ${card.time.month} ${card.time.year}`}
                </Typography>
              </div>
              <div className={classes.citation}>
                <Typography variant="body1">
                  <Link
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    {" "}
                    {card.articleTitle}{" "}
                  </Link>
                </Typography>
              </div>
              <div className={classes.citation}>
                {card.tags.map((tag) => (
                  <Chip
                    variant="outlined"
                    size="small"
                    key={tag}
                    className={classes.chip}
                    label={tag}
                  />
                ))}
              </div>
            </div>
            <div className={classes.rightPanel}>
              <Typography variant="body1" className={classes.quote}>
                <i>{`"${card.quote}"`}</i>
              </Typography>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
