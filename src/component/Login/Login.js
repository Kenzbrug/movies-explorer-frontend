import { createRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { useFormValidation } from '../../hooks/useFormValidation';
import { validateEmail } from '../../hooks/useFormValidation'


function Login({ onLogin, resError }) {
    const validation = createRef();

    const {
        values,
        handleInputChange,
        errors,
        isValid,
        resetForm,
        setIsValid,
    } = useFormValidation();
    const [textResErorr, setTextResErorr] = useState('')

    useEffect(() => {
        if (resError === 401) setTextResErorr('Вы ввели неправильный логин или пароль.')
        else if (resError === 403) setTextResErorr('При авторизации произошла ошибка. Токен не передан или передан не в том формате.')

    }, [resError])

    useEffect(() => {
        setIsValid(validation.current.checkValidity());
    }, [setIsValid, validation]);
    useEffect(() => {
        resetForm();
    }, [resetForm]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = values;
        if (validateEmail(email)) {
            onLogin(email, password);
        } else {
            console.log('что-то пошло не так в почте');
        }
    }

    return (
        <div className='signin'>
            <p className='signin__welcome'>
                Рады видеть!
            </p>
            <form ref={validation} onSubmit={handleSubmit} className='signin__form'>
                <p className='signin__placeholder'>E-mail</p>
                <input className='signin__form-input' required autoComplete="off"
                    id='email' name='email' type='email' value={values.email || ''}
                    onChange={handleInputChange} />

                <span className='signin__form-input-error'>{errors.email || ''}</span>
                <p className='signin__placeholder'>Пароль</p>
                <input className='signin__form-input' required autoComplete="off"
                    id='password' name='password' type='password' value={values.password || ''}
                    onChange={handleInputChange} />

                <span className='signin__form-input-error'>{errors.password || ''}</span>

                <div className='signin__button-container'>
                    {/* {resError ? (<span className='signin__res-server-error'>{textResErorr || ''}</span>) : (<></>)} */}
                    <span className='signin__res-server-error'>{textResErorr || ''}</span>
                    <button onSubmit={handleSubmit} type='submit'
                        className={`signin__button ${isValid ? '' : 'signin__button_disabled'}`}
                        tupe='button'>Войти</button>
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