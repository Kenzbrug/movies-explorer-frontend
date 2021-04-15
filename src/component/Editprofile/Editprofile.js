import './Editprofile.css'
import { useContext, useState, useEffect } from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext'

function Editprofile({ onUpdateUser, resError }) {
    const currentUser = useContext(CurrentUserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textResErorr, setTextResErorr] = useState('')

    //забираем значения инпутов 
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser({
            name,
            email,
        });
    }

    useEffect(() => {
        if (resError === 409) setTextResErorr('Пользователь с таким email уже существует. ')
        else if (resError === 400) setTextResErorr('При обновлении профиля произошла ошибка.')
    }, [resError])

    return (
        <section className='editprofile'>
            <form onSubmit={handleSubmit} className='editprofile__form'>
                <div className='editprofile__container'>
                    <p className='editprofile__placeholder'>Имя</p>
                    <input className='editprofile__userdata-input' placeholder='Введите имя' minLength='2' maxLength='30'
                        autoComplete="off" required type='text' defaultValue={currentUser.name} onChange={handleNameChange} />
                </div>
                <div className='editprofile__container'>
                    <p className='editprofile__placeholder'>E-mail</p>
                    <input className='editprofile__userdata-input' placeholder='Введите почту'
                        autoComplete="off" required type='email' defaultValue={currentUser.email} onChange={handleEmailChange} />
                </div>
                <div className='editprofile__button-container'>
                    {/* {resError ? (<span className='signin__res-server-error'>{textResErorr || ''}</span>) : (<></>)} */}

                    <span className='editprofile__res-server-error'>{textResErorr || ''}</span>
                    <button onSubmit={handleSubmit} type='submit' className='editprofile__button-save' tupe='button'>Сохранить</button>
                </div>

            </form>
        </section>
    )
}

export default Editprofile