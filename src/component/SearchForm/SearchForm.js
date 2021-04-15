import './SearchForm.css'
import { useState, createRef } from 'react';
import searchImgButton from '../../images/search-img-button.svg'

function SearchForm({ getResultSearchInputFilm, onShortFilm, location }) {
    const [searchFilm, setSearchFilm] = useState('');
    const [placeholder, setPlaceHolder] = useState(
        'Фильм'
    );

    const [isPlaceholderShow, setPlaceholderShow] = useState(false);
    const inputRef = createRef();
    const jwt = localStorage.getItem('jwt')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchFilm.trim().length === 0) {
            setPlaceHolder('Нужно ввести ключевое слово');
            setPlaceholderShow(true)
            inputRef.current.focus()
        } else {
            console.log(getResultSearchInputFilm);
            getResultSearchInputFilm(searchFilm, jwt, location)
            setSearchFilm('')
        }
    }

    const enterFilm = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const handleChangeSearchInput = (e) => {
        setSearchFilm(enterFilm(e.target.value));
        handleEmptySearchQuery();
    }
    const handleEmptySearchQuery = () => {
        setPlaceholderShow(false);
        setPlaceHolder('Фильм');
    };

    const [longFilmOn, setlongFilmOn] = useState(true)
    const handleClickShortFilm = () => {
        if (longFilmOn === true) {
            setlongFilmOn(false)
            return onShortFilm(false)
        } else {
            setlongFilmOn(true)
            return onShortFilm(true)

        }


    }
    return (
        <section className="search-form">
            <div className='search-form__container'>
                <form className='search-form__form' onSubmit={handleSubmit}>
                    <div className='search-form__input-container'>
                        <input className={`search-form__input ${isPlaceholderShow ?
                            'search-form__input-enter-empty search-form__input-enter-empty-placeHolder' : ''}`
                        }
                            value={searchFilm}
                            onChange={handleChangeSearchInput}
                            onBlur={handleEmptySearchQuery}
                            ref={inputRef}
                            type="text"
                            placeholder={placeholder}
                            autoComplete="off">
                        </input>
                        <div className='search-form__button-container'>
                            <button className='search-form__button'
                                type="submit" aria-label="Найти фильм" onSubmit={handleSubmit}></button>
                            <img className="search-form__img-button" src={searchImgButton} alt='' />
                        </div>
                    </div>
                </form>
                <div className='search-form__switch-container'>
                    <p className='search-form__title'>Короткометражки</p>
                    <label className="search-form__switch">
                        <input className='search-form__checkbox' onClick={handleClickShortFilm} type="checkbox"></input>
                        <span className="search-form__slider"></span>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default SearchForm