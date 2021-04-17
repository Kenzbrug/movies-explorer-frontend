import "./Movies.css";
import React, { useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MovieNotFound from "../MovieNotFound/MovieNotFound";
import { SearchMovies } from "../../utils/SearchMovies";

function Movies({
  location,
  clickLikeButton,
  savesUserMovie,
  removeMovieMain,
}) {
  const {
    getResultSearchFilm,
    isPreloaderShow,
    setShortFilms,
    movies,
    setMovies,
    isMovieNotFound,
  } = SearchMovies();

  const getLocation = location.pathname;

  useEffect(() => {
    const lastRequest = localStorage.getItem("movies");
    if (lastRequest) {
      setMovies(JSON.parse(lastRequest));
    }
  }, [setMovies]);

  return (
    <section className="movies">
      <SearchForm
        location={getLocation}
        getResultSearchInputFilm={getResultSearchFilm}
        onShortFilm={setShortFilms}
      />
      <Preloader isShow={isPreloaderShow} />
      {movies.length > 0 ? (
        <MoviesCardList
          movies={movies}
          location={getLocation}
          clickLikeButton={clickLikeButton}
          removeMovie={removeMovieMain}
          savesUserMovie={savesUserMovie}
        />
      ) : (
        <></>
      )}
      {isMovieNotFound ? <MovieNotFound /> : <></>}
    </section>
  );
}

export default Movies;
