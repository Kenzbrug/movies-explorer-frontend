import { useState } from "react";
import { Link } from 'react-router-dom';
import './Login.css'

function Login({ onLogin }) {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(data)
    }
    return (
        <div className='signin'>
            <p className='signin__welcome'>
                Рады видеть!
            </p>
            <form onSubmit={handleSubmit} className='signin__form'>
                <p className='signin__placeholder'>E-mail</p>
                <input className='signin__form-input' required autoComplete="off" id='email' name='email' type='email' value={data.email} onChange={handleChange} />
                <p className='signin__placeholder'>Пароль</p>
                <input className='signin__form-input' required autoComplete="off" id='password' name='password' type='password' value={data.password} onChange={handleChange} />

                <div className='signin__button-container'>
                    <button onSubmit={handleSubmit} type='submit' className='signin__button' /*className={`signin__button ${isValid ? '' : 'signin__button_disabled'}`}*/ tupe='button'>Войти</button>
                </div>
            </form>
            <div className='signin__signin-container'>
                <p className='signin__question-signup'>Ещё не зарегистрированы?</p>
                <Link className='signin__login-link' to='/signup'>Регистрация</Link>
            </div>
        </div>
    )
}

export default Login