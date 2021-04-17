import './MoviesCard.css';
import { urlWithMovies } from '../../utils/utils';

function MoviesCard({
  movie,
  location,
  clickLikeButton,
  savesUserMovie,
  removeMovie,
}) {
  const movieLikeButtonClassName =
    'movie__button movie__button_like movie__button_like_active';
  const movieDeleteButtonClassName = 'movie__button movie__button_delete';
  const secondsToHM = (time) => {
    const h = Math.floor(time / 60);
    const m = Math.floor(time % 60);

    const hDisplay = h > 0 ? h + 'ч ' : '';
    const mDisplay = m > 0 ? m + 'м ' : '';

    return hDisplay + mDisplay;
  };

  const handleClickLikeButton = () => {
    // если есть like, то убираем like и удаляем из сохраненных
    if (handlebuttonLikeActive()) {
      savesUserMovie.forEach((saveMovie) => {
        if (saveMovie.nameRU === movie.nameRU) {
          removeMovie(saveMovie._id);
        }
      });
      // добавляем фильм в сохраненные
    } else {
      clickLikeButton({ ...movie });
    }
  };

  const handleClickDeleteButton = () => {
    removeMovie(movie._id);
  };

  const handlebuttonLikeActive = () => {
    return savesUserMovie.find((e) => {
      return e.nameRU.includes(movie.nameRU);
    });
  };
  return (
    <li className='movie'>
      <a
        href={location === '/saved-movies' ? movie.trailer : movie.trailerLink}
        target='blank'
        className='movie__trailer'
      >
        <img
          className='movie__img'
          src={
            location === '/saved-movies'
              ? movie.image
              : `${urlWithMovies}${movie.image.url}`
          }
          alt={movie.nameRU}
        />
      </a>

      <div className='movie__container-footer'>
        <div className='movie__conteiner-like'>
          <h2 className='movie__footer-title'>{movie.nameRU}</h2>
          <button
            className={
              location === '/saved-movies'
                ? movieDeleteButtonClassName
                : handlebuttonLikeActive()
                ? movieLikeButtonClassName
                : 'movie__button movie__button_like'
            }
            type='button'
            aria-label='кнопка-сердечко, нравится'
            onClick={
              location === '/saved-movies'
                ? handleClickDeleteButton
                : handleClickLikeButton
            }
          ></button>
        </div>
        <p className='movie__time'>{secondsToHM(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
