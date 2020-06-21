import React, { useState } from "react";
import "./CardUI.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 300,
    width: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#448aff",
    },
    "&:hover $avatar": {
      backgroundColor: "white",
      color: "#448aff",
    },
  },

  roothovered: {
    minWidth: 275,
    height: 300,
    width: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#448aff",
  },
  content: {},
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: "#448aff",
    fontSize: "2rem",
  },
  avatarhovered: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    color: "#448aff",
    fontSize: "2rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CardUI = (props) => {
  const classes = useStyles();
  const [style, setStyle] = useState({
    styles: [classes.root, classes.roothovered],
  });

  console.log(style.styles[0]);
  console.log(style.styles[1]);

  const changeStyle = () => {
    let newstyles = [style.styles[1], style.styles[0]];
    setStyle({ ...setStyle, styles: newstyles });
  };
  //if (props.number === props.selected)

  const display = () => {
    console.log(props.number);
    console.log(props.selected);

    if (props.number === props.selected) {
      return (
        <Card
          className={classes.roothovered}
          onClick={(e) => props.onClick(props.number)}
        >
          <CardContent className={classes.content}>
            <Avatar className={classes.avatarhovered}>{props.number}</Avatar>
          </CardContent>
        </Card>
      );
    } else {
      return (
        <Card
          className={classes.root}
          onClick={(e) => props.onClick(props.number)}
        >
          <CardContent className={classes.content}>
            <Avatar className={classes.avatar}>{props.number}</Avatar>
          </CardContent>
        </Card>
      );
    }
  };

  return display();
};

export default CardUI;
