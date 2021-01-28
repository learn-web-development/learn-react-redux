import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Tum hi ho",
      duration: "4:31",
    },
    {
      title: "Tum hi ana",
      duration: "4:50",
    },
    {
      title: "Thodi jagah dede",
      duration: "5:19",
    },
    {
      title: "O saki saki",
      duration: "4:20",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
