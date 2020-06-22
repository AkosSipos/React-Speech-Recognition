import React, { useState } from "react";
import CardUI from "./CardUI";
import SelectedCardUI from "./SelectedCardUI";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SpeechRecognition from "./SpeechRecognition";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import "./App.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "auto 100%",
    background: "linear-gradient(to bottom, white 50%, #2962ff 50%)",
  },

  root2: {
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "auto 100%",
  },

  avatar: {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#448aff",
    fontSize: "2rem",
  },
  icon: {
    width: 40,
    height: 40,
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

function App() {
  const [view, setView] = useState({
    page: 1,
    selected: 0,
    opened: 0,
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  });

  const classes = useStyles();

  const movedMouse = () => {
    if (view.selected > 0 || view.opened > 0)
      setView({ ...view, selected: 0, opened: 0 });
  };

  const cardSelected = (card) => {
    setView({ ...view, selected: card });
    //console.log("selected: " + view.selected + " " + card);
  };
  //console.log("selected: " + view.selected);

  const openCard = () => {
    setView({ ...view, opened: view.selected });
    //console.log("opened: " + view.opened + " " + view.selected);
  };
  //console.log("opened: " + view.opened);

  const openCardByMouse = (card) => {
    setView({ ...view, selected: card, opened: card });
  };

  const closeCard = () => {
    setView({ ...view, selected: 0, opened: 0 });
  };

  const previousPage = () => {
    setView({ ...view, page: 1 });
    //console.log("page 1");
  };

  const nextPage = () => {
    setView({ ...view, page: 2 });
    //console.log("page 2");
  };

  const previousCard = () => {
    if (view.page === 1) {
      if (
        view.selected > 1 &&
        view.selected < 6 &&
        view.opened > 1 &&
        view.opened < 6
      )
        setView({
          ...view,
          selected: view.selected - 1,
          opened: view.opened - 1,
        });
    }

    if (view.page === 2) {
      if (
        view.selected > 6 &&
        view.selected < 11 &&
        view.opened > 6 &&
        view.opened < 11
      )
        setView({
          ...view,
          selected: view.selected - 1,
          opened: view.opened - 1,
        });
    }
  };

  const nextCard = () => {
    if (view.page === 1) {
      if (
        view.selected > 0 &&
        view.selected < 5 &&
        view.opened > 0 &&
        view.opened < 5
      )
        setView({
          ...view,
          selected: view.selected + 1,
          opened: view.opened + 1,
        });
    }

    if (view.page === 2) {
      if (
        view.selected > 5 &&
        view.selected < 10 &&
        view.opened > 5 &&
        view.opened < 10
      )
        setView({
          ...view,
          selected: view.selected + 1,
          opened: view.opened + 1,
        });
    }
  };
  //console.log("selected: " + view.selected);
  //console.log("opened: " + view.opened);

  const displayCards = () => {
    if (view.page === 1) {
      return view.cards.slice(0, 5).map((cards) => (
        <Grid item justify="center" xs={12} sm={6} md={4} lg={3}>
          <CardUI
            onClick={openCardByMouse}
            number={cards}
            selected={view.selected}
          ></CardUI>
        </Grid>
      ));
    }

    if (view.page === 2) {
      return view.cards.slice(5).map((cards) => (
        <Grid item justify="center" xs={12} sm={6} md={4} lg={3}>
          <CardUI
            onClick={openCardByMouse}
            number={cards}
            selected={view.selected}
          ></CardUI>
        </Grid>
      ));
    }
  };

  const display = () => {
    if (view.opened === 0) {
      return (
        <div className={classes.root} onMouseMove={movedMouse}>
          <SpeechRecognition
            nextPage={nextPage}
            previousPage={previousPage}
            cardSelected={cardSelected}
            openCard={openCard}
            closeCard={closeCard}
            selected={view.selected}
            opened={view.opened}
            previousCard={previousCard}
            nextCard={nextCard}
          ></SpeechRecognition>
          <IconButton color="white">
            <Avatar className={classes.avatar}>
              <NavigateBeforeIcon
                className={classes.icon}
                onClick={previousPage}
              ></NavigateBeforeIcon>
            </Avatar>
          </IconButton>
          <Grid container justify="space-around" spacing={4}>
            {displayCards()}
          </Grid>
          <IconButton>
            <Avatar className={classes.avatar}>
              <NavigateNextIcon
                className={classes.icon}
                onClick={nextPage}
              ></NavigateNextIcon>
            </Avatar>
          </IconButton>
        </div>
      );
    }
    if (view.opened > 0) {
      return (
        <div className={classes.root2}>
          <SpeechRecognition
            nextPage={nextPage}
            previousPage={previousPage}
            cardSelected={cardSelected}
            openCard={openCard}
            closeCard={closeCard}
            selected={view.selected}
            opened={view.opened}
            previousCard={previousCard}
            nextCard={nextCard}
          ></SpeechRecognition>

          <SelectedCardUI
            selected={view.selected}
            opened={view.opened}
          ></SelectedCardUI>
          <IconButton className={classes.close}>
            <CloseIcon onClick={closeCard}></CloseIcon>
          </IconButton>
        </div>
      );
    }
  };

  return display();
}

export default App;
