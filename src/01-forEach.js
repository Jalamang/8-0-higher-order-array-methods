/*
  Do not change the line below. If you'd like to run code from this file, you may use 
  the `exampleSongData` variable below to gain access to tickets data. This data is pulled from 
  the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the 
  same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.
const log = console.log
/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printAllSongTitles(songs) {
//for each song object the callback function logs the song's title
songs.forEach((songTitle) => console.log(songTitle.title))
}

/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 *
 * EXAMPLE:
 *  printSongDetails(songs);
 *  //> "Berlin Tsukin by Taiyo Ky"
 *  //> "Up by Sebastian Kamae"
 *  //> ...
 */
function printSongDetails(songs) {
  //for each song object the callback function fetches the song title and the artist who sings the song
  songs.forEach((songTitle) => console.log(`${songTitle.title} by ${songTitle.artist}`))
}

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongTitlesOverThreeMinutes(songs) {
  songs.forEach((songTitle) => {if(songTitle.runtimeInSeconds > 180){
    console.log(songTitle.title)
  }
  } )
}


module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
