import "./Editprofile.css";
import { useContext, useState, useEffect } from "react";
import { useInput } from "../../hooks/useFormValidation";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Editprofile({ onUpdateUser, resError, infoStatus }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [textResErorr, setTextResErorr] = useState("");
  const validName = useInput("", { isEmpty: true, minLength: 1, isName: true });
  const validEmail = useInput("", { isEmpty: true, isEmail: true });

  ///заполняем попап профиля данными с сервера
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(validName.value, validEmail.value);
  };

  useEffect(() => {
    if (resError === 409)
      setTextResErorr("Пользователь с таким email уже существует. ");
    else if (resError === 400)
      setTextResErorr("При обновлении профиля произошла ошибка.");
  }, [resError]);

  return (
    <section className="editprofile">
      <form onSubmit={handleSubmit} className="editprofile__form">
        <div className="editprofile__container">
          <p className="editprofile__placeholder">Имя</p>
          <div className="editprofile_container-input">
            <input
              className="editprofile__userdata-input"
              placeholder="Введите имя"
              minLength="1"
              autoComplete="off"
              required
              type="text"
              value={validName.value || name || ""}
              onChange={(e) => validName.onChange(e)}
              onBlur={(e) => validName.onBlur(e)}
            />
            {validName.isDirty && validName.isEmpty && (
              <span className="signup__form-input-error">
                Заполните это поле.
              </span>
            )}
            {validName.isDirty && validName.nameError && (
              <span className="signup__form-input-error">
                {" "}
                Имя содержит только латиницу, кириллицу, пробел или дефис.
              </span>
            )}
          </div>
        </div>
        <div className="editprofile__container">
          <p className="editprofile__placeholder">E-mail</p>
          <div className="editprofile_container-input">
            <input
              className="editprofile__userdata-input"
              placeholder="Введите почту"
              autoComplete="off"
              required
              type="email"
              value={validEmail.value || email || ""}
              onChange={(e) => validEmail.onChange(e)}
              onBlur={(e) => validEmail.onBlur(e)}
            />
            {validEmail.isDirty && validEmail.isEmpty && (
              <span className="signup__form-input-error">
                Заполните это поле.
              </span>
            )}
            {validEmail.isDirty && validEmail.emailError && (
              <span className="signup__form-input-error">
                {" "}
                Введите корректно email.
              </span>
            )}
          </div>
        </div>
        <div className="editprofile__button-container">
          {infoStatus ? (
            <span className="signin__res-server-ok">
              Вы успешно изменили данные!
            </span>
          ) : resError ? (
            <span className="signin__res-server-error">
              {textResErorr || ""}
            </span>
          ) : (
            <></>
          )}

          {/* <span className='editprofile__res-server-error'>{textResErorr || ''}</span> */}
          <button
            disabled={!validName.inputValid || !validEmail.inputValid}
            onSubmit={handleSubmit}
            type="submit"
            className={`editprofile__button-save ${
              !validName.inputValid || !validEmail.inputValid
                ? "editprofile__button_disabled"
                : ""
            }`}
            tupe="button"
          >
            Сохранить
          </button>
        </div>
      </form>
    </section>
  );
}

export default Editprofile;
