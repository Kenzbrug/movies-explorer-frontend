import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
    return (
        <section className="signup">
            <p className="signup__welcome">
                Добро пожаловать!
            </p>
            <form className="signup__form">
                <p className='signup__placeholder'>Имя</p>
                <input className="signup__form-input" required id="name" name="name" type="name" />
                <p className='signup__placeholder'>E-mail</p>
                <input className="signup__form-input" required id="email" name="email" type="email" />
                <p className='signup__placeholder'>Пароль</p>
                <input className="signup__form-input" id="password" name="password" type="password" />

                <div className="signup__button-container">
                    <button type="submit" className="signup__button">Зарегистрироваться</button>
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