import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import { useInput } from "../../hooks/useFormValidation";

function Login({ onLogin, resError, expectResult, setExpectResult }) {
  const [textResErorr, setTextResErorr] = useState("");
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 1 });
  useEffect(() => {
    if (resError === 401)
      setTextResErorr("Вы ввели неправильный логин или пароль.");
    else if (resError === 403)
      setTextResErorr(
        "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
      );
  }, [resError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpectResult(true)
    onLogin(email.value, password.value);
  };

  return (
    <div className="signin">
      <p className="signin__welcome">Рады видеть!</p>
      <form onSubmit={handleSubmit} className="signin__form">
        <p className="signin__placeholder">E-mail</p>
        <input
          className="signin__form-input"
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
          <span className="signin__form-input-error">Заполните это поле.</span>
        )}
        {email.isDirty && email.emailError && (
          <span className="signin__form-input-error">
            {" "}
            Введите корректно email.
          </span>
        )}
        <p className="signin__placeholder">Пароль</p>
        <input
          className="signin__form-input"
          required
          autoComplete="off"
          id="password"
          name="password"
          type="password"
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
        />
        {password.isDirty && password.isEmpty && (
          <span className="signin__form-input-error">
            Поле не должно быть пустым.
          </span>
        )}
        <div className="signin__button-container">
          {resError ? (
            <span className="signin__res-server-error">
              {textResErorr || ""}
            </span>
          ) : (
            <></>
          )}
          <button
            disabled={!email.inputValid || !password.inputValid || expectResult}
            onSubmit={handleSubmit}
            type="submit"
            className={`signin__button ${!email.inputValid || !password.inputValid || expectResult
                ? "signin__button_disabled"
                : ""
              }`}
            tupe="button"
          >
            Войти
          </button>
        </div>
      </form>
      <div className="signin__signin-container">
        <p className="signin__question-signup">Ещё не зарегистрированы?</p>
        <Link className="signin__login-link" to="/signup">
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Login;
