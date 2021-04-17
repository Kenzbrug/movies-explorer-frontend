import { useState } from "react";
import { getMovie } from "./MoviesApi";
import { getSavedMovie } from "./MainApi";

export function SearchMovies() {
  const [isPreloaderShow, setPreloaderShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [saveAlreadyMovies, setSaveAlreadyMovies] = useState([]);
  const [isMovieNotFound, setIsMovieNotFound] = useState(false);
  const [shortFilms, setShortFilms] = useState(true);
  const [searchInSaveMovies, setSearchInSaveMovies] = useState(true);

  const getResultSearchFilm = (enterFilm) => {
    setMovies([]);
    setIsMovieNotFound(false);
    setPreloaderShow(true);
    getMovie()
      .then((arrayMovies) => {
        const filterMovies = arrayMovies.filter((film) => {
          return film.nameRU.includes(enterFilm);
        });
        if (filterMovies.length === 0) return setIsMovieNotFound(true);
        filterMovies.forEach((getMovie) => {
          //short film, покажу только короткие
          if (!shortFilms && getMovie.duration <= 40) {
            return setMovies(filterMovies);
            //найденный фильм длинее 40, я его не покажу
          } else if (!shortFilms && getMovie.duration > 40) {
            return setIsMovieNotFound(true);
            //'short film отключен, покажу любую длину'
          } else if (shortFilms) {
            return setMovies(filterMovies);
          }
        });
        localStorage.setItem("movies", JSON.stringify(filterMovies));
      })
      .finally(() => {
        setPreloaderShow(false);
      });
  };

  const getREsultSearchSaveFilm = (enterFilm, jwt) => {
    setSearchInSaveMovies(false);
    setSaveAlreadyMovies([]);
    setIsMovieNotFound(false);
    setPreloaderShow(true);
    getSavedMovie(jwt)
      .then((arrayMovies) => {
        const filterMovies = arrayMovies.filter((film) => {
          return film.nameRU.includes(enterFilm);
        });
        if (filterMovies.length === 0) return setIsMovieNotFound(true);
        filterMovies.forEach((getMovie) => {
          //short film, покажу только короткие
          if (!shortFilms && getMovie.duration <= 40) {
            return setSaveAlreadyMovies(filterMovies);
            //найденный фильм длинее 40, я его не покажу
          } else if (!shortFilms && getMovie.duration > 40) {
            return setIsMovieNotFound(true);
            //'short film отключен, покажу любую длину'
          } else if (shortFilms) {
            return setSaveAlreadyMovies(filterMovies);
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
  };
}
