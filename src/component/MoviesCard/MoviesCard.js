import './MoviesCard.css'
// import { useState } from "react";
import { urlWithMovies } from '../../utils/utils'

function MoviesCard({ movie, location, clickLikeButton, savesUserMovie, removeMovie }) {

    const secondsToHms = (time) => {
        let h = Math.floor(time / 60);
        let m = Math.floor(time % 60);

        let hDisplay = h > 0 ? h + (h === 1 ? " час " : " часа ") : "";
        let mDisplay = m > 0 ? m + (m === 1 ? " мин " : " мин ") : "";

        return hDisplay + mDisplay;
    }

    const handleClickLikeButton = () => {
        // проверка на дублирование
        // если мы уже поставили like, второй раз фильм не появится в сохраненных
        if (handlebuttonLikeActive()) {
            savesUserMovie.forEach((saveMovie) => {
                if (saveMovie.nameRU === movie.nameRU) {
                    removeMovie(saveMovie._id)
                }
            })
        }
        // добавляем фильм в сохраненные
        clickLikeButton({ ...movie })
    }

    const handleClickDeleteButton = () => {
        removeMovie(movie._id)
    }

    const handlebuttonLikeActive = () => {
        return savesUserMovie.find((e) => {
            return e.nameRU.includes(movie.nameRU);
        });
    }
    console.log(movie);

    const movieLikeButtonClassName = ('movie__button movie__button_like movie__button_like_active')
    const movieDeleteButtonClassName = ('movie__button movie__button_delete')
    return (
        <li className="movie">
            <a href={location === '/saved-movies' ? movie.trailer : movie.trailerLink} target='blank' className='movie__trailer'>
                <img className="movie__img" src={location === '/saved-movies' ? movie.image : `${urlWithMovies}${movie.image.url}`} alt={movie.nameRU} />
            </a>

            <div className="movie__container-footer">
                <div className="movie__conteiner-like">
                    <h2 className="movie__footer-title">{movie.nameRU}</h2>
                    <button className={location === '/saved-movies' ?
                        movieDeleteButtonClassName : handlebuttonLikeActive() ? movieLikeButtonClassName : 'movie__button movie__button_like'}
                        type="button" aria-label="кнопка-сердечко, нравится"
                        onClick={location === '/saved-movies' ? handleClickDeleteButton : handleClickLikeButton}>
                    </button>
                </div>
                <p className='movie__time'>{secondsToHms(movie.duration)}</p>
            </div>
        </li>
    );
}

export default MoviesCard