import { useState, useEffect, useMemo } from "react";

import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'


function MoviesCardList({ movies, location }) {
    const [countMovies, setCountMovies] = useState(12);

    const addMovies = () => {
        setCountMovies(countMovies + 6)
    }
    useEffect(() => {
        location === '/movies' ? setCountMovies(12) : setCountMovies(movies.length);
    }, [movies, location]);

    const lengthDisplayMovies = useMemo(() => {
        return countMovies >= movies.length ? 'movies-list__button_hidden' : '';
    }, [countMovies, movies]);

    return (
        <div className="movies-list">
            <ul className="movies-list__lists">
                {/* отрисовываем карточки */}
                {movies.slice(0, countMovies).map((movie, index) => {
                    return (<MoviesCard key={index} movie={movie} location={location} />)
                })}
            </ul>
            <button type="button" aria-label="показать ещё фильмы" onClick={addMovies} className={
                location === '/movies' ? `movies-list__button-more ${lengthDisplayMovies}` : 'movies-list__button-more movies-list__button_hidden'
            }
            >
                Ещё
            </button>
        </div>
    )
}

export default MoviesCardList