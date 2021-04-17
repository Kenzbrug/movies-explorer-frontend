import { useState, createRef, useEffect } from "react";

import { Link } from 'react-router-dom';
import './Register.css'

function Register({ onRegister }) {
    const [isValid, useIsValid] = useState(true)

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(data)
    }

    return (
        <section className="signup">
            <p className="signup__welcome">
                Добро пожаловать!
            </p>
            <form onSubmit={handleSubmit} className="signup__form" noValidate>
                <p className='signup__placeholder'>Имя</p>
                <input className="signup__form-input" required autoComplete="off" id="name" name="name" type="name"
                    value={data.name} onChange={handleChangeInput} />
                <p className='signup__placeholder'>E-mail</p>
                <input className="signup__form-input" required autoComplete="off" id="email" name="email" type="email"
                    value={data.email} onChange={handleChangeInput} />
                <p className='signup__placeholder'>Пароль</p>
                <input className="signup__form-input" id="password" autoComplete="off" name="password" type="password"
                    value={data.password} onChange={handleChangeInput} />

                <div className="signup__button-container">
                    <button disabled={!isValid} type="submit" onSubmit={handleSubmit}
                        className={`signup__button ${isValid ? '' : 'signup__button_disabled'}`}>Зарегистрироваться</button>
                </div>
            </form>
            <div className="signup__signin-container">
                <p className="signup__question-signup">Уже зарегистрированы?</p>
                <Link className="signup__login-link" to="/signin">Войти</Link>
            </div>
        </section>
    )
}

export default Register