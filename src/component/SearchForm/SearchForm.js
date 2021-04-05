import './SearchForm.css'
import searchImgButton from '../../images/search-img-button.svg'

function SearchForm() {
    return (
        <section className="search-form">
            <div className='search-form__container'>
                <form className='search-form__form'>
                    <div className="search-form__input-container">
                        <input className='search-form__input' size='16'
                            type="text" placeholder='Фильм' autoComplete="off" required>
                        </input>
                        <div className='search-form__button-container'>
                            <button className='search-form__button'
                                type="submit" aria-label="Найти фильм"></button>
                            <img className="search-form__img-button" src={searchImgButton} alt='' />
                        </div>
                    </div>
                </form>
                <div className='search-form__switch-container'>
                    <p className='search-form__title'>Короткометражки</p>
                    <label className="search-form__switch">
                        <input className='search-form__checkbox' type="checkbox"></input>
                        <span className="search-form__slider"></span>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default SearchForm