import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  large: {
    width: 500,
    height: 500,
    backgroundColor: "#448aff",
  },
  small: {
    width: 150,
    height: 150,
    fontSize: "3rem",
    backgroundColor: "white",
    color: "#448aff",
  },
  smallother: {
    width: 150,
    height: 150,
    fontSize: "3rem",
    backgroundColor: "#448aff",
    color: "white",
  },
});

const SelectedCardUI = (props) => {
  const classes = useStyles();

  const display = () => {
    if (props.selected === props.opened) {
      return (
        <Avatar className={classes.large}>
          <Avatar className={classes.small}>{props.opened}</Avatar>
        </Avatar>
      );
    } else {
      return <Avatar className={classes.smallother}>{props.opened}</Avatar>;
    }
  };
  return display();
};

export default SelectedCardUI;
