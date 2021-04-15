import './SavedMovies.css'
// import { useEffect } from 'react';
// import {useHistory} from 'react-router-dom';

import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import { SearchMovies } from '../../utils/SearchMovies'

function SavedMovies({
    location,
    loggedIn,
    savesUserMovie,
    removeMovie,
}) {
    const getLocation = location.pathname
    const {
        isPreloaderShow,
        getREsultSearchSaveFilm,
        setShortFilms,
    } = SearchMovies()

    return (
        <section className='seved-movies' >
            <SearchForm getResultSearchInputFilm={getREsultSearchSaveFilm} location={getLocation} onShortFilm={setShortFilms} />
            <Preloader isShow={isPreloaderShow} />
            {savesUserMovie.length > 0 ? (
                <MoviesCardList
                    movies={savesUserMovie}
                    location={getLocation}
                    loggedIn={loggedIn}
                    removeMovie={removeMovie}

                />
            ) :
                <></>}
        </section>

    )
}

export default SavedMovies