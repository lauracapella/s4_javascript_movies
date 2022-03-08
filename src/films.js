const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let array = movies.filter((movie) => movie.director === director);
  console.log("EXERCICE 2 ->", array);
  return array;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDir = array.filter(movie => movie.director === director);
  let puntuaDirector = moviesFromDir.reduce((acc, b) => (acc + b.score), 0);
  let mediaDirector = (puntuaDirector / moviesFromDir.length);
  let mediaDecimales = Number((mediaDirector).toFixed(2));
  return mediaDecimales;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let moviesTitle = array.map(movie => movie.title);
  let moviesByName = moviesTitle.sort();
  let movies20Primeras = moviesByName.slice(0,20);
  return movies20Primeras;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let moviesYear = movies.map(movie => movie);
  let moviesByYear = moviesYear.sort((a,b) => a.year - b.year || a.title.localeCompare(b.title) );
  return moviesByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesCatFiltered = array.filter(moviex => moviex.genre.includes(genre));
  let moviesCatSum = moviesCatFiltered.reduce((a, mov) => (a + mov.score), 0);
  let moviesWhithoutScore = moviesCatFiltered.filter(movie => movie.score === '');
  let moveCatMedia = moviesCatSum / (moviesCatFiltered.length - moviesWhithoutScore.length);
  let moveCatMediaDecimales = Number((moveCatMedia).toFixed(2));
  return moveCatMediaDecimales;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  /* let moviesToMinutes = movies.map(function(m){
    return {...m,duration:m.duration.slice(0, m.duration.indexOf('h')) * 60 + m.duration.slice(m.duration.indexOf(' ') + 1, m.duration.indexOf('m')) * 1};
  }); */

  let moviesToMinutes = movies.map(function(m){
    if(m.duration.indexOf('m') === -1){
      return {...m,duration:m.duration.slice(0, m.duration.indexOf('h')) * 60};
    }else{
      return {...m,duration:m.duration.slice(0, m.duration.indexOf('h')) * 60 + m.duration.slice(m.duration.indexOf(' ') + 1, m.duration.indexOf('m')) * 1};
    }});
  
  return moviesToMinutes;
};

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let movieOfYear = movies.filter(movie => movie.year === year);
  let MovieOfYearScore = movieOfYear.map(movie => movie.score);
  let bestMovieOfYearScore = Math.max(...MovieOfYearScore);
  let bestMovieOfYear = movieOfYear.filter(movie => movie.score === bestMovieOfYearScore);
  return bestMovieOfYear;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
