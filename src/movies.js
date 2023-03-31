// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const directors = movies.map(function getAllDirectors(moviesArray) {//the name of the function (getAllDirectors) can stay??
    return moviesArray.director
})
console.log(directors)

function removeDuplicates(directors) {
    return directors.filter((director, index) => directors.indexOf(director) === index);
}
console.log(removeDuplicates(directors));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const stevenSpielbergDrama = movies.filter(moviesArray => moviesArray.director.includes('Steven Spielberg') && moviesArray.genre.includes('Drama'))
    return stevenSpielbergDrama
}
console.log(howManyMovies(movies))
// console.log(howManyMovies(movies).length) -> just the nº of movies

//const stevenSpielbergDrama = movies.filter(moviesArray => moviesArray.director.includes('Steven Spielberg') && moviesArray.genre.includes('Drama'))
//console.log(stevenSpielbergDrama)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const allScores = movies.map(function (moviesArray) {
    return moviesArray.score
})

const sumScores = allScores.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

  function scoresAverage(moviesArray) {
    const avg = sumScores / allScores.length
    const roundAvg = Math.round(avg * 100) / 100;
    return roundAvg
  }
  console.log(scoresAverage());

// Iteration 4: Drama movies - Get the average of Drama Movies - function dramaMoviesScore(moviesArray) {}

//look for every drama movie
const dramaMovies = movies.filter(moviesArray => moviesArray.genre.includes('Drama'))
//console.log(dramaMovies)

//for every drama movies get an array of score 
/*const dramaMoviesScore = dramaMovies.map(function(score) {
    return dramaMovies.score
})- return undefined */ 

function dramaScoresAverage(moviesArray) {
    const avg = dramaMoviesScore / dramaMoviesScore.length
    const roundAvg = Math.round(avg * 100) / 100;
    return roundAvg
  }
  console.log(dramaScoresAverage());

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
