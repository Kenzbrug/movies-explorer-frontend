import './Movies.css'
import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MovieNotFound from '../MovieNotFound/MovieNotFound'
import { getMovie } from '../../utils/MoviesApi'

function Movies({ location, clickLikeButton, savesUserMovie, removeMovieMain }) {
    const [isPreloaderShow, setPreloaderShow] = useState(false);
    const [movies, setMovies] = useState([]);
    const [isMovieNotFound, setIsMovieNotFound] = useState(false)
    const [shortFilms, setShortFilms] = useState(true)

    console.log(shortFilms);

    const getResultSearchFilm = (enterFilm) => {
        setMovies([]);
        setIsMovieNotFound(false)
        setPreloaderShow(true);
        getMovie()
            .then((arrayMovies) => {
                const filterMovies = arrayMovies.filter((film) => {
                    return film.nameRU.includes(enterFilm);
                })
                console.log(filterMovies);
                if (filterMovies.length === 0) return setIsMovieNotFound(true)
                filterMovies.forEach((getMovie) => {
                    //short film, покажу только короткие
                    if (!shortFilms && getMovie.duration <= 40) {
                        return setMovies(filterMovies)
                        //найденный фильм длинее 40, я его не покажу
                    } else if (!shortFilms && getMovie.duration > 40) {
                        return setIsMovieNotFound(true)
                        //'short film отключен, покажу любую длину'
                    } else if (shortFilms) {
                        return setMovies(filterMovies)
                    }
                })
                localStorage.setItem('movies', JSON.stringify(filterMovies));
            })
            .finally(() => {
                setPreloaderShow(false);
            });
    }

    useEffect(() => {
        const lastRequest = localStorage.getItem('movies');
        if (lastRequest) {
            setMovies(JSON.parse(lastRequest));
        }
    }, []);

    return (
        <section className='movies'>
            <SearchForm getResultSearchFilm={getResultSearchFilm} onShortFilm={setShortFilms} />
            <Preloader isShow={isPreloaderShow} />
            {movies.length > 0 ? (<MoviesCardList movies={movies}
                location={location}
                clickLikeButton={clickLikeButton}
                savesUserMovie={savesUserMovie}
                removeMovie={removeMovieMain}
            />) :
                (<></>)}
            {isMovieNotFound ? <MovieNotFound /> : <></>}
        </section>

    )
}

export default Movies