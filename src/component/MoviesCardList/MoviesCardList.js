import { useState, useEffect, useMemo } from "react";

import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'


function MoviesCardList({ movies, location, clickLikeButton, savesUserMovie, removeMovie }) {
    const [countMovies, setCountMovies] = useState(12);
    let locationName = location.pathname
    
    const addMoreMovies = () => {
        setCountMovies(countMovies + 6)
    }
    useEffect(() => {
        locationName === '/movies' ? setCountMovies(12) : setCountMovies(movies.length);
    }, [movies, locationName]);

    const lengthDisplayMovies = useMemo(() => {
        return countMovies >= movies.length ? 'movies-list__button_hidden' : '';
    }, [countMovies, movies]);

    return (
        <div className="movies-list">
            <ul className="movies-list__lists">
                {/* отрисовываем карточки */}
                {movies.slice(0, countMovies).map((movie, index) => {
                    return (<MoviesCard key={index} movie={movie} location={locationName}
                         clickLikeButton={clickLikeButton}
                          savesUserMovie={savesUserMovie}
                          removeMovie={removeMovie}
                          />)
                })}
            </ul>
            <button type="button" aria-label="показать ещё фильмы" onClick={addMoreMovies} className={
                locationName === '/movies' ? `movies-list__button-more ${lengthDisplayMovies}` : 'movies-list__button-more movies-list__button_hidden'
            }
            >
                Ещё
            </button>
        </div>
    )
}

export default MoviesCardList