import { useState, createRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Register.css'

import { useFormValidation } from '../../hooks/useFormValidation';
import { validateEmail, validateName } from '../../hooks/useFormValidation'
// import { useInput } from '../../hooks/useFormValidation';

function Register({ onRegister, resError }) {

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
        if (resError === 409) setTextResErorr('Пользователь с таким email уже существует.')
        else if (resError === 400) setTextResErorr('При регистрации пользователя произошла ошибка.')
    }, [resError])


    useEffect(() => {
        setIsValid(validation.current.checkValidity());
    }, [setIsValid, validation]);
    useEffect(() => {
        resetForm();
    }, [resetForm]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = values;
        if (validateEmail(email)) {
            if (validateName(name)) {
                onRegister(name, email, password);
            } else {
                setIsValid(false)
                console.log('что-то пошло не так в имени');
            }
        } else {
            setIsValid(false)
            console.log('что-то пошло не так в почте');
        }
    }

    return (
        <section className='signup'>
            <p className='signup__welcome'>
                Добро пожаловать!
            </p>
            <form ref={validation} onSubmit={handleSubmit} className='signup__form' noValidate>
               
                <p className='signup__placeholder'>Имя</p>
                <input className='signup__form-input' required autoComplete='off' id='name' name='name' type='name'
                    value={values.name || ''}
                    onChange={handleInputChange}
                    maxLength='30' />               
                <span className='signup__form-input-error'>{errors.name || ''}</span>
                
                <p className='signup__placeholder'>E-mail</p>
                <input className='signup__form-input' required autoComplete='off' id='email' name='email' type='email'
                    value={values.email || ''}
                     onChange={handleInputChange}
                      />
                <span className='signup__form-input-error'>{errors.email || ''}</span>

                <p className='signup__placeholder'>Пароль</p>
                <input className='signup__form-input' required id='password' autoComplete='off' name='password' type='password'
                    value={values.password || ''}
                     onChange={handleInputChange}
                      />
                <span className='signup__form-input-error'>{errors.password || ''}</span>




                <div className='signup__button-container'>

                    {resError ? (<span className='signup__res-server-error'>{textResErorr || ''}</span>) : (<></>)}
                    {/* <span className='signup__res-server-error'>{textResErorr || ''}</span> */}

                    <button disabled={!isValid} type='submit' onSubmit={handleSubmit}
                        className={`signup__button ${isValid ? '' : 'signup__button_disabled'}`}>Зарегистрироваться</button>
                    
                </div>
            </form>
            <div className='signup__signin-container'>
                <p className='signup__question-signup'>Уже зарегистрированы?</p>
                <Link className='signup__login-link' to='/signin'>Войти</Link>
            </div>
        </section>
    )
}

export default Register