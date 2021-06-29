// FUN: action creator

export const selectSong = (song) => {
  // DOING: return an action

  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
