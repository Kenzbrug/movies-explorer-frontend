import './Movies.css'
import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies({ movies, location }) {
    const [isPreloaderShow, setPreloaderShow] = useState(true);
    return (
        <section className='movies'>
            <SearchForm />
            <Preloader isShow={isPreloaderShow} />
            <MoviesCardList movies={movies} location={location} />
        </section>

    )
}

export default Movies