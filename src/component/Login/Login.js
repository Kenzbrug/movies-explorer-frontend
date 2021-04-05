import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    return (
        <div className='signin'>
            {/* <img className='signin__logo' src={logo} alt='Логотип дипломнйо работы' /> */}
            <p className='signin__welcome'>
                Рады видеть!
            </p>
            <form className='signin__form'>
                <p className='signin__placeholder'>E-mail</p>
                <input className='signin__form-input' required id='email' name='email' type='email' />
                <p className='signin__placeholder'>Пароль</p>
                <input className='signin__form-input' required id='password' name='password' type='password' />

                <div className='signin__button-container'>
                    <button type='submit' className='signin__button' tupe='button'>Войти</button>
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