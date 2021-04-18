import "./SavedMovies.css";
import { useEffect } from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { SearchMovies } from "../../utils/SearchMovies";
import MovieNotFound from "../MovieNotFound/MovieNotFound";

function SavedMovies({ location, loggedIn, savesUserMovie, removeMovie }) {
  const getLocation = location.pathname;
  const {
    isPreloaderShow,
    getREsultSearchSaveFilm,
    setShortFilms,
    isMovieNotFound,
    saveAlreadyMovies,
    searchInSaveMovies,
    setMovies
  } = SearchMovies();

  useEffect(() => {
    const lastRequest = localStorage.getItem('saveFindedMovies');
    if (lastRequest) {
      setMovies(JSON.parse(lastRequest));
    }
  }, [setMovies]);

  return (
    <section className="seved-movies">
      <SearchForm
        getResultSearchInputFilm={getREsultSearchSaveFilm}
        location={getLocation}
        onShortFilm={setShortFilms}
      />
      <Preloader isShow={isPreloaderShow} />
      {savesUserMovie.length > 0 ? (
        <MoviesCardList
          movies={searchInSaveMovies ? savesUserMovie : saveAlreadyMovies}
          location={getLocation}
          loggedIn={loggedIn}
          removeMovie={removeMovie}
        />
      ) : (
        <></>
      )}
      {isMovieNotFound ? <MovieNotFound /> : <></>}
    </section>
  );
}

export default SavedMovies;
