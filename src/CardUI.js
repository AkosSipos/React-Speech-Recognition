import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 350,
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
    height: 350,
    width: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#448aff",
  },

  avatar: {
    width: 100,
    height: 100,
    backgroundColor: "#448aff",
    fontSize: "3rem",
  },

  avatarhovered: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    color: "#448aff",
    fontSize: "3rem",
  },
});

const CardUI = (props) => {
  const classes = useStyles();

  const display = () => {
    //console.log(props.number);
    //console.log(props.selected);

    let cardstyle;
    let avatarstyle;
    if (props.number === props.selected) {
      cardstyle = classes.roothovered;
      avatarstyle = classes.avatarhovered;
    } else {
      cardstyle = classes.root;
      avatarstyle = classes.avatar;
    }

    return (
      <Card className={cardstyle} onClick={(e) => props.onClick(props.number)}>
        <CardContent className={classes.content}>
          <Avatar className={avatarstyle}>{props.number}</Avatar>
        </CardContent>
      </Card>
    );
  };

  return display();
};

export default CardUI;
