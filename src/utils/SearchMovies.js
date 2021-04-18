import { useState } from 'react';
import { getMovie } from './MoviesApi';
import { getSavedMovie } from './MainApi';
import { durationOfShortFilms } from './utils'


export function SearchMovies() {
  const [isPreloaderShow, setPreloaderShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [saveAlreadyMovies, setSaveAlreadyMovies] = useState([]);
  const [isMovieNotFound, setIsMovieNotFound] = useState(false);
  const [shortFilms, setShortFilms] = useState(true);
  const [searchInSaveMovies, setSearchInSaveMovies] = useState(true);

  const localStorageMovies = (enterWord) => {
    setMovies([])
    const movies = JSON.parse(localStorage.arrayMovies)
    try {
      const arrayFilterMovies = movies.filter((film) => {
        return film.nameRU.includes(enterWord);
      });
      // выводим сообщение, если совпадений нет
      if (arrayFilterMovies.length === 0) return setIsMovieNotFound(true);

      // фиотруем по продолжительности фильмы
      const arrayFilterDurationMovies = arrayFilterMovies.filter((findedMovie) => {
        return shortFilms
          ? findedMovie
          : findedMovie.duration <= durationOfShortFilms
            ? findedMovie
            : '';
      });
      if (arrayFilterDurationMovies.length === 0) return setIsMovieNotFound(true);
      localStorage.setItem('findedMovies', JSON.stringify(arrayFilterDurationMovies));
      setMovies(arrayFilterDurationMovies)
    }
    finally {
      setPreloaderShow(false);
    }
  }

  const getResultSearchFilm = (enterWord) => {
    setIsMovieNotFound(false);
    setPreloaderShow(true);
    localStorage.arrayMovies ? localStorageMovies(enterWord) :
      getMovie()
        .then((movies) => {
          localStorage.setItem('arrayMovies', JSON.stringify(movies));
          localStorageMovies(enterWord)
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
        // выводим сообщение, если совпадений нет
        if (arrayFilterMovies.length === 0) return setIsMovieNotFound(true);
        // фильтруем по продолжительности фильмы
        const arrayFilterDurationMovies = arrayFilterMovies.filter((findedMovie) => {
          return shortFilms
            ? findedMovie
            : findedMovie.duration <= durationOfShortFilms
              ? findedMovie
              : '';
        });
        if (arrayFilterDurationMovies.length === 0) return setIsMovieNotFound(true);
        localStorage.setItem('findedMovies', JSON.stringify(arrayFilterDurationMovies));
        setSaveAlreadyMovies(arrayFilterDurationMovies)
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
