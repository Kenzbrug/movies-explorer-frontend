import "./AboutMe.css";
import me from "../../images/me.png";
import gotoprogile_arrow from "../../images/gotoprogile_arrow.svg";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme__header">
        <p className="aboutme__header-title">Студент</p>
      </div>
      <div className="aboutme__container">
        <div className="aboutme__about-student">
          <div className="aboutme__resume">
            <h1 className="aboutme__resume-name">Виктор</h1>
            <p className="aboutme__resume-subtitle">
              Фронтенд-разработчик, 31 год
            </p>
            <p className="aboutme__resume-description">
              Всем привет, меня зовут Виктор. Я родом из России, московская
              область. Окончил машиностроительный институт по специальности
              инженер, автоматизация и управление. Люблю кататься на велосипеде
              по бездорожью, по неизвестным местам. Решил сменить сферу
              деятельности и выбрал направление web-разработка. Закончил курс по
              данному направлению и буду двигаться дальше!
            </p>
          </div>
          <nav className="aboutme__contacts">
            <ul className="aboutme__contacts-links">
              <li className="aboutme__contacts-list">
                <a
                  href="https://www.facebook.com/victor.zhabolenko"
                  target="blank"
                  className="aboutme__contacts-link"
                >
                  Facebook
                </a>
              </li>
              <li className="aboutme__contacts-list">
                <a
                  href="https://github.com/Kenzbrug"
                  target="blank"
                  className="aboutme__contacts-link"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="aboutme__foto">
          <img
            className="aboutme__myfoto"
            src={me}
            alt="Как выглядит Виктор Жаболенко"
          />
        </div>
      </div>
      <h3 className="aboutme__gotoportfolio-title">Портфолио</h3>
      <div className="aboutme__gotoportfolio">
        <nav className="">
          <ul className="aboutme__gotoportfolio-links">
            <li className="aboutme__gotoportfolio-list">
              <a
                href="https://github.com/Kenzbrug"
                target="blank"
                className="aboutme__gotoportfolio-link"
              >
                Статичный сайт
              </a>
              <img
                className="aboutme__icon"
                src={gotoprogile_arrow}
                alt="Стрелка вверх направо"
              />
            </li>
            <li className="aboutme__gotoportfolio-list">
              <a
                href="https://github.com/Kenzbrug"
                target="blank"
                className="aboutme__gotoportfolio-link"
              >
                Адаптивный сайт
              </a>
              <img
                className="aboutme__icon"
                src={gotoprogile_arrow}
                alt="Стрелка вверх направо"
              />
            </li>
            <li className="aboutme__gotoportfolio-list">
              <a
                href="https://github.com/Kenzbrug"
                target="blank"
                className="aboutme__gotoportfolio-link"
              >
                Одностраничное приложение
              </a>
              <img
                className="aboutme__icon"
                src={gotoprogile_arrow}
                alt="Стрелка вверх направо"
              />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default AboutMe;
