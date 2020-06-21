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
    width: 100,
    height: 100,
    backgroundColor: "white",
    fontSize: "2rem",
    color: "#448aff",
  },
});

const SelectedCardUI = (props) => {
  const classes = useStyles();
  return (
    <Avatar className={classes.large}>
      <Avatar className={classes.small}>{props.number}</Avatar>
    </Avatar>
  );
};

export default SelectedCardUI;
