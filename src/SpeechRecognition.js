import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  cardSelected: PropTypes.func,
  openCard: PropTypes.func,
  closeCard: PropTypes.func,
  selected: PropTypes.number,
  opened: PropTypes.number,
  nextCard: PropTypes.func,
  previousCard: PropTypes.func,
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  nextPage,
  previousPage,
  cardSelected,
  openCard,
  closeCard,
  selected,
  opened,
  nextCard,
  previousCard,
}) => {
  /* window.setInterval(function () {
    resetTranscript();
  }, 3000);*/

  console.log(transcript);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  if (transcript.includes("next")) {
    resetTranscript();
    if (selected > 0 || opened > 0) {
      nextCard();
    } else nextPage();
  }
  if (transcript.includes("previous") || transcript.includes("back")) {
    resetTranscript();
    if (selected > 0 || opened > 0) {
      previousCard();
    } else previousPage();
  }

  if (transcript.includes("1")) {
    console.log(transcript);
    resetTranscript();
    if (selected < 6 || opened < 6) cardSelected(1);
  }
  if (transcript.includes("2")) {
    resetTranscript();
    console.log(transcript);
    if (selected < 6 || opened < 6) cardSelected(2);
  }
  if (transcript.includes("3")) {
    resetTranscript();
    console.log(transcript);
    if (selected < 6 || opened < 6) cardSelected(3);
  }
  if (transcript.includes("4")) {
    resetTranscript();
    console.log(transcript);
    if (selected < 6 || opened < 6) cardSelected(4);
  }
  if (transcript.includes("5")) {
    resetTranscript();
    console.log(transcript);
    if (selected < 6 || opened < 6) cardSelected(5);
  }
  if (transcript.includes("6")) {
    resetTranscript();
    console.log(transcript);
    if (selected > 5 || opened > 5) cardSelected(6);
  }
  if (transcript.includes("7")) {
    resetTranscript();
    console.log(transcript);
    if (selected > 5 || opened > 5) cardSelected(7);
  }
  if (transcript.includes("8")) {
    resetTranscript();
    console.log(transcript);
    if (selected > 5 || opened > 5) cardSelected(8);
  }
  if (transcript.includes("9")) {
    resetTranscript();
    console.log(transcript);
    if (selected > 5 || opened > 5) cardSelected(9);
  }
  if (transcript.includes("10")) {
    resetTranscript();
    console.log(transcript);
    if (selected > 5 || opened > 5) cardSelected(10);
  }

  if (transcript.includes("open")) {
    resetTranscript();
    openCard();
  }

  if (transcript.includes("close")) {
    resetTranscript();
    closeCard();
  }

  return null;
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
