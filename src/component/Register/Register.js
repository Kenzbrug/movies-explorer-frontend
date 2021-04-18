import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useFormValidation";
import "./Register.css";

function Register({ onRegister, resError, expectResult, setExpectResult }) {
  const [textResErorr, setTextResErorr] = useState("");

  const name = useInput("", { isEmpty: true, minLength: 1, isName: true });
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpectResult(true)
    onRegister(name.value, email.value, password.value);
  };

  useEffect(() => {
    if (resError === 409)
      setTextResErorr("Пользователь с таким email уже существует.");
    else if (resError === 400)
      setTextResErorr("При регистрации пользователя произошла ошибка.");
  }, [resError]);

  return (
    <section className="signup">
      <p className="signup__welcome">Добро пожаловать!</p>
      <form onSubmit={handleSubmit} className="signup__form" noValidate>
        <p className="signup__placeholder">Имя</p>
        <input
          className="signup__form-input"
          required
          autoComplete="off"
          id="name"
          name="name"
          type="name"
          value={name.value}
          onChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
          minLength="1"
        />
        {name.isDirty && name.isEmpty && (
          <span className="signup__form-input-error">Заполните это поле.</span>
        )}
        {name.isDirty && name.nameError && (
          <span className="signup__form-input-error">
            {" "}
            Имя содержит только латиницу, кириллицу, пробел или дефис.
          </span>
        )}
        <p className="signup__placeholder">E-mail</p>
        <input
          className="signup__form-input"
          required
          autoComplete="off"
          id="email"
          name="email"
          type="email"
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
        />
        {email.isDirty && email.isEmpty && (
          <span className="signup__form-input-error">Заполните это поле.</span>
        )}
        {email.isDirty && email.emailError && (
          <span className="signup__form-input-error">
            {" "}
            Введите корректно email.
          </span>
        )}
        <p className="signup__placeholder">Пароль</p>
        <input
          className="signup__form-input"
          required
          id="password"
          autoComplete="off"
          name="password"
          type="password"
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
        />
        {password.isDirty && password.isEmpty && (
          <span className="signup__form-input-error">
            Поле не должно быть пустым.
          </span>
        )}
        <div className="signup__button-container">
          {resError ? (
            <span className="signup__res-server-error">
              {textResErorr || ""}
            </span>
          ) : (
            <></>
          )}
          <button
            disabled={
              !name.inputValid || !email.inputValid || !password.inputValid || expectResult
            }
            type="submit"
            onSubmit={handleSubmit}
            className={`signup__button ${!name.inputValid || !email.inputValid || !password.inputValid || expectResult
              ? "signup__button_disabled"
              : ""
              }`}
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className="signup__signin-container">
        <p className="signup__question-signup">Уже зарегистрированы?</p>
        <Link className="signup__login-link" to="/signin">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
