import './SavedMovies.css'

import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

function SavedMovies({ movies, location }) {
    return (
        <section className='seved-movies' >
            <SearchForm />
            <MoviesCardList movies={movies} location={location} />
        </section>

    )
}

export default SavedMovies