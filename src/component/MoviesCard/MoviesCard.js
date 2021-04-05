import './MoviesCard.css'
import { useState } from "react";

function MoviesCard({ movie, location }) {

    const [isMovieLike, setIsMovieLike] = useState(false)

    function handleLikeClick() {
        if (isMovieLike === true) {
            setIsMovieLike(false)
        } else {
            setIsMovieLike(true)
        }
    }

    const movieLikeButtonClassName = (`movie__button movie__button_like ${isMovieLike ? 'movie__button_like_active' : ''}`)
    const movieDeleteButtonClassName = ('movie__button movie__button_delete')
    return (
        <li className="movie">
            <img className="movie__img" src={movie.link} alt={movie.name} />
            <div className="movie__container-footer">
                <div className="movie__conteiner-like">
                    <h2 className="movie__footer-title">{movie.name}</h2>
                    <button className={location === '/saved-movies' ?
                        movieDeleteButtonClassName : movieLikeButtonClassName}
                        type="button" aria-label="кнопка-сердечко, нравится"
                        onClick={handleLikeClick}></button>
                </div>
                <p className='movie__time'>{movie.time}</p>
            </div>
        </li>
    );
}

export default MoviesCard