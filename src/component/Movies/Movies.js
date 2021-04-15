import './Movies.css'
import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MovieNotFound from '../MovieNotFound/MovieNotFound'
import { getMovie } from '../../utils/MoviesApi'
import { SearchMovies } from '../../utils/SearchMovies'

function Movies({ location, clickLikeButton, savesUserMovie, removeMovieMain }) {
    const {
        getResultSearchFilm,
        isPreloaderShow,
        setShortFilms,
        movies,
        setMovies, // потом удалить
        isMovieNotFound,
    } = SearchMovies()

    const getLocation = location.pathname
    // нужно удалить

    const getMovies = () => {
        getMovie()
            .then((res) => {
                console.log(res);
                setMovies(res)
            })
    }
    console.log(movies);

    useEffect(() => {
        //нужно удалить
        getMovies()

        //нужно раскомитить

        // const lastRequest = localStorage.getItem('movies');
        // if (lastRequest) {
        //     setMovies(JSON.parse(lastRequest));
        // }
    }, []);

    return (
        <section className='movies'>
            <SearchForm location={getLocation} getResultSearchInputFilm={getResultSearchFilm} onShortFilm={setShortFilms} />
            <Preloader isShow={isPreloaderShow} />
            {movies.length > 0 ? (<MoviesCardList movies={movies}
                location={getLocation}
                clickLikeButton={clickLikeButton}
                removeMovie={removeMovieMain}

                savesUserMovie={savesUserMovie}

            />) :
                (<></>)}
            {isMovieNotFound ? <MovieNotFound /> : <></>}
        </section>

    )
}

export default Movies