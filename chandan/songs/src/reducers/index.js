import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Sand In My Boots', duration: '3:40' },
    { title: 'Good Days', duration: '3:10' },
    { title: 'On Me', duration: '4:20' },
    { title: 'Blinding Lights', duration: '2:70' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
