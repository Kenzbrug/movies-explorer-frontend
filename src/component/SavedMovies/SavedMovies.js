import './SavedMovies.css'
// import { useEffect } from 'react';
// import {useHistory} from 'react-router-dom';

import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

function SavedMovies({ location, loggedIn, savesUserMovie, removeMovie }) {
    return (
        <section className='seved-movies' >
            <SearchForm />
            {savesUserMovie.length > 0 ? (
                <MoviesCardList movies={savesUserMovie} location={location}
                    loggedIn={loggedIn}
                    removeMovie={removeMovie}
                />
            ) :
                <></>}
        </section>

    )
}

export default SavedMovies