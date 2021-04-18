import "./SavedMovies.css";
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
  } = SearchMovies();

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
