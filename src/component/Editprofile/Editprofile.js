import './Editprofile.css'
import { useContext, useState } from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext'

function Editprofile({ onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    console.log(currentUser);

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
                <button onSubmit={handleSubmit} type='submit' className='editprofile__button-save' tupe='button'>Сохранить</button>
            </form>
        </section>
    )
}

export default Editprofile