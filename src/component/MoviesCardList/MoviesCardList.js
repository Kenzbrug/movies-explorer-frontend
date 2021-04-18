import { useState, useEffect, useMemo } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useWindowSize } from '../../hooks/useWindowSize';
import { numberOfFilms } from '../../utils/utils'

function MoviesCardList({
  movies,
  location,
  clickLikeButton,
  savesUserMovie,
  removeMovie,
}) {
  const [countMovies, setCountMovies] = useState(12);
  const windowSize = useWindowSize();
  const { addMoviesAtWindowSizeMore768px, addMoviesAtWindowSizeLess768px } = numberOfFilms
  const addMoreMovies = () => {
    if (windowSize > 768) {
      setCountMovies(countMovies + addMoviesAtWindowSizeMore768px);
    } else if (windowSize <= 768) {
      setCountMovies(countMovies + addMoviesAtWindowSizeLess768px);
    }
  };

  useEffect(() => {
    if (windowSize > 768) {
      setCountMovies(12);
    } else if (windowSize <= 768 && windowSize > 480) {
      setCountMovies(8);
    } else if (windowSize <= 480) {
      setCountMovies(5);
    }
  }, [windowSize, movies]);

  const lengthDisplayMovies = useMemo(() => {
    return countMovies >= movies.length ? 'movies-list__button_hidden' : '';
  }, [countMovies, movies]);
  return (
    <div className='movies-list'>
      <ul className='movies-list__lists'>
        {/* отрисовываем карточки */}
        {movies.slice(0, countMovies).map((movie, id) => {
          return (
            <MoviesCard
              key={id}
              movie={movie}
              location={location}
              clickLikeButton={clickLikeButton}
              savesUserMovie={savesUserMovie}
              removeMovie={removeMovie}
            />
          );
        })}
      </ul>
      <button
        type='button'
        aria-label='показать ещё фильмы'
        onClick={addMoreMovies}
        className={
          location === '/movies'
            ? `movies-list__button-more ${lengthDisplayMovies}`
            : 'movies-list__button-more movies-list__button_hidden'
        }
      >
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
