// FUN: Reducer's function.

import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { name: "song one", duration: "4:50" },
    { name: "no scrubs", duration: "3:05" },
    { name: "macarena", duration: "2:50" },
    { name: "I want it that way ", duration: "2:15" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

const myData = () => {
  return {
    name: "noman",
    id: "290357",
  };
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
  MyData: myData,
});
