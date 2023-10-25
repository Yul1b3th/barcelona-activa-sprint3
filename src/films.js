// Exercise 1: Get the array of all directors.
function getAllDirectors( array ) {
 const directors = array.map( ( movie ) => movie.director );
 return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector( array, director ) {
 const selectedDirector = director;
 const filteredMoviesFromDirector = array.filter( ( movie ) => movie.director == selectedDirector );
 return filteredMoviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector( array, director ) {
 const moviesFromDirector = array.filter( ( movie ) => movie.director === director );
 const totalScore = moviesFromDirector.reduce( ( accumulator, movie ) => accumulator + movie.score, 0 );
 const averageScore = ( totalScore / moviesFromDirector.length ).toFixed( 2 );
 return parseFloat( averageScore );
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically( array ) {
 const sortedMovies = array
  .map( ( movie ) => movie.title )
  .sort( ( a, b ) => a.localeCompare( b ) );
 const top20Movies = sortedMovies.slice( 0, 20 );
 return top20Movies;
}

// Exercise 5: Order by year, ascending
function orderByYear( movies ) {
 const sortedMovies = movies.slice();
 sortedMovies.sort( ( a, b ) => {
  if ( a.year !== b.year ) {
   return a.year - b.year;
  } else {
   return a.title.localeCompare( b.title );
  }
 } );
 return sortedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory( category, movies ) {
 const filteredMovies = movies.filter( movie => movie.genre.includes( category ) );
 if ( filteredMovies.length > 0 ) {
  const totalScore = filteredMovies.reduce( ( accumulator, movie ) => accumulator + movie.score, 0 );
  const average = ( totalScore / filteredMovies.length ).toFixed( 2 );
  return parseFloat( average );
 } else {
  return 0;
 }
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes( movies ) {
 return movies.map( ( movie ) => {
  const parts = movie.duration.split( ' ' );
  let totalMinutes = 0;

  for ( const part of parts ) {
   if ( part.includes( 'h' ) ) {
    totalMinutes += parseInt( part, 10 ) * 60;
   } else if ( part.includes( 'min' ) ) {
    totalMinutes += parseInt( part, 10 );
   }
  }

  return {
   ...movie,
   duration: totalMinutes,
  };
 } );
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear( movies, year ) {
 const moviesOfTheYear = movies.filter( ( movie ) => movie.year === year );
 if ( moviesOfTheYear.length === 0 ) {
  return [];
 }
 const bestScore = Math.max( ...moviesOfTheYear.map( ( movie ) => movie.score ) );
 return moviesOfTheYear.filter( ( movie ) => movie.score === bestScore );
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if ( typeof module !== 'undefined' ) {
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