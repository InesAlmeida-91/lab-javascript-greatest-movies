// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)


function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(allDirectors => allDirectors.director)
  return directors
}
//console.log(getAllDirectors(movies))

function removeDuplicates(directorsArray) {
  const removeDirectors = directorsArray.filter((directorDuplicate, index) => directorsArray.indexOf(directorDuplicate) === index);
  return removeDirectors
}
//console.log(removeDuplicates(getAllDirectors(movies)))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielbergDrama = moviesArray.filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'))
    return stevenSpielbergDrama.length
}
//console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if(moviesArray.length === 0){
    return 0
  }
  const allScores = moviesArray.map(function (movies) {
    return movies.score
});
  const sumScores = allScores.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  const avg = sumScores / allScores.length
  const roundAvg = Math.round(avg * 100) / 100;
  return roundAvg
}
//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies - 


function dramaMoviesScore(moviesArray) {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  const dramaScore = dramaMovies.reduce((accumulator, drama) => {return accumulator + drama.score}, 0);
  const avg = dramaScore / dramaMovies.length
  const roundAvg = Math.round(avg * 100) / 100;
  return roundAvg
}
  //console.log(dramaMoviesScore());


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const yearMovies = moviesArray.sort((oldest, newest) => oldest.year - newest.year)
  if(yearMovies === yearMovies.year){
  const sameYear = yearMovies.sort(function (a, b) {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if(titleA < titleB) return -1;
      if(titleA > titleB) return 1;
      if(titleA === 0) return 0;
    });
  }
  return Array.from(yearMovies);
}
//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if(moviesArray < 20){
    return moviesArray
  };
  const titleOrder = moviesArray.sort(function (a, b) {
       const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if(titleA < titleB) return -1;
      if(titleA > titleB) return 1;
      if(titleA === 0) return 0;
  });
  const titleOnly = titleOrder.slice(0,20).map(movies => movies.title);
  return titleOnly
}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
