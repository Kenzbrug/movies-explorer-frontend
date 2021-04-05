import './SavedMovies.css'

import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies({ movies, location }) {
    return (
        <MoviesCardList movies={movies} location={location} />
    )
}

export default SavedMovies