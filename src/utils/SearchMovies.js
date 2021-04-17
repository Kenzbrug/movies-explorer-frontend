import { useState } from 'react';
import { getMovie } from './MoviesApi';
import { getSavedMovie } from './MainApi';

export function SearchMovies() {
  const [isPreloaderShow, setPreloaderShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movies1, setMovies1] = useState([]);
  const [saveAlreadyMovies, setSaveAlreadyMovies] = useState([]);
  const [isMovieNotFound, setIsMovieNotFound] = useState(false);
  const [shortFilms, setShortFilms] = useState(false);
  const [searchInSaveMovies, setSearchInSaveMovies] = useState(true);

  const getResultSearchFilm = (enterWord) => {
    setMovies([]);
    setIsMovieNotFound(false);
    setPreloaderShow(true);
    getMovie()
      .then((movies) => {
        const arrayMovies = localStorage.setItem(
          'arrayMovies',
          JSON.stringify(movies)
        );
        setMovies(movies);

        console.log(` shortFilms ${shortFilms}`);

        const arrayFilterMovies = movies.filter((film) => {
          return film.nameRU.includes(enterWord);
        });
        console.log(arrayFilterMovies);

        if (arrayFilterMovies.length === 0) return setIsMovieNotFound(true);
        console.log(shortFilms);
        arrayFilterMovies.forEach((findedMovie) => {
          // const setFindMovies =
          console.log(findedMovie);
          const p =
            findedMovie.duration > 40 && shortFilms
              ? 'меньше 40 и '
              : 'меньше 40';
          console.log(p);
          if (!shortFilms && findedMovie.duration <= 40) {
            console.log('отобразить короткометражки');
            return setMovies(arrayFilterMovies);
            //найденный фильм длинее 40, я его не покажу
          } else if (!shortFilms && findedMovie.duration > 40) {
            console.log(' отобразить все');
            return setIsMovieNotFound(true);
            //'short film отключен, покажу любую длину'
          } else if (shortFilms) {
            console.log('any');
            return setMovies(arrayFilterMovies);
          } else {
            console.log('aaaaa');
          }
        });
        localStorage.setItem('movies', JSON.stringify(arrayFilterMovies));
      })
      .finally(() => {
        setPreloaderShow(false);
      });
  };

  const getREsultSearchSaveFilm = (enterWord, jwt) => {
    setSearchInSaveMovies(false);
    setSaveAlreadyMovies([]);
    setIsMovieNotFound(false);
    setPreloaderShow(true);
    getSavedMovie(jwt)
      .then((arrayMovies) => {
        const arrayFilterMovies = arrayMovies.filter((film) => {
          return film.nameRU.includes(enterWord);
        });
        if (arrayFilterMovies.length === 0) return setIsMovieNotFound(true);
        arrayFilterMovies.forEach((findedMovie) => {
          //short film, покажу только короткие
          if (!shortFilms && findedMovie.duration <= 40) {
            return setSaveAlreadyMovies(arrayFilterMovies);
            //найденный фильм длинее 40, я его не покажу
          } else if (!shortFilms && findedMovie.duration > 40) {
            return setIsMovieNotFound(true);
            //'short film отключен, покажу любую длину'
          } else if (shortFilms) {
            return setSaveAlreadyMovies(arrayFilterMovies);
          }
        });
      })
      .finally(() => {
        setPreloaderShow(false);
      });
  };

  return {
    getResultSearchFilm,
    isPreloaderShow,
    setShortFilms,
    movies,
    setMovies,
    isMovieNotFound,
    getREsultSearchSaveFilm,
    saveAlreadyMovies,
    searchInSaveMovies,
    shortFilms,
  };
}
