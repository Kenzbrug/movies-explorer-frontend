import { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Editprofile from '../Editprofile/Editprofile';
import Error404 from '../Error404/Error404';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as MainApi from '../../utils/MainApi';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// подписываемся на контекст
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [savesUserMovie, setSaveUserMovies] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });
  const [responseServerError, setResponseServerError] = useState(null);
  const [infoStatus, setInfoStatus] = useState(false);
  const [expectResult, setExpectResult] = useState(false)
  const history = useHistory();

  const handleTokenCheck = (jwt) => {
    MainApi.getContent(jwt)
      .then((data) => {
        if (data) {
          let getUserData = {
            name: data.name,
            email: data.email,
          };
          setCurrentUser(data);
          setLoggedIn(true);
          // обновляем стейт данных пользователя
          setUserData(getUserData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onRegister = (name, email, password) => {
    return MainApi.register(name, email, password)
      .then((data) => {
        if (data.token) {
          setExpectResult(false)
          setLoggedIn(true);
          localStorage.setItem('jwt', data.token);
          handleTokenCheck(localStorage.getItem('jwt'));
          history.push('/movies');
          setResponseServerError(null);
        }
      })
      .catch((err) => {
        setExpectResult(false)
        if (err.error === 409) setResponseServerError(409);
        else if (err.error === 400) setResponseServerError(400);

        console.log(err.error);
      });
  };

  const onLogin = (email, password) => {
    return MainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
          setExpectResult(false)
          setLoggedIn(true);
          localStorage.setItem('jwt', data.token);
          handleTokenCheck(localStorage.getItem('jwt'));
          history.push('/movies');
          setResponseServerError(null);
        }
      })
      .catch((err) => {
        setExpectResult(false)
        if (err.error === 401) setResponseServerError(401);
        else if (err.error === 403) setResponseServerError(403);
        console.log(err);
      });
  };

  const hendleSignOut = () => {
    localStorage.removeItem('jwt');
    history.push('/');
    window.location.reload();
    setSaveUserMovies([]);
  };

  const handleUpdateUser = (profileName, profileEmail) => {
    MainApi.setProfileInfo(profileEmail, profileName)
      .then((res) => {
        setExpectResult(false)
        if (res.error || res.message) {
          setInfoStatus(false);
        } else {
          //обновляем state профиля в контексте
          setCurrentUser(res);
          setInfoStatus(true);
        }
      })
      .catch((err) => {
        setExpectResult(false)
        setInfoStatus(false);
        if (err.error === 409) setResponseServerError(409);
        else if (err.error === 400) setResponseServerError(400);
        console.log(err);
      });
  };
  const handleSaveMovie = (movieData) => {
    const jwt = localStorage.getItem('jwt');
    MainApi.savedMovie(movieData, jwt)
      .then(() => {
        getSevedMoviesCard(jwt);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSevedMoviesCard = (jwt) => {
    MainApi.getSavedMovie(jwt)
      .then((moviesCard) => {
        setSaveUserMovies(moviesCard.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeSaveMovie = (id) => {
    const jwt = localStorage.getItem('jwt');
    MainApi.removeMovie(id, jwt)
      .then((res) => {
        //перерисовываем карточки
        getSevedMoviesCard(jwt);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (loggedIn) {
      const jwt = localStorage.getItem('jwt');
      getSevedMoviesCard(jwt);
    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      handleTokenCheck(jwt);
    }
  }, []);

  return (
    <div className='body'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header location={pathname} loggedIn={loggedIn} />
        <Switch>
          <Route exact path='/signin'>
            <Login onLogin={onLogin} resError={responseServerError} setExpectResult={setExpectResult}
              expectResult={expectResult} />
          </Route>
          <Route exact path='/signup'>
            <Register onRegister={onRegister} resError={responseServerError} setExpectResult={setExpectResult}
              expectResult={expectResult} />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>

          <ProtectedRoute
            exact
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
            location={pathname}
            clickLikeButton={handleSaveMovie}
            savesUserMovie={savesUserMovie}
            removeMovieMain={removeSaveMovie}
          />
          <ProtectedRoute
            exact
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            location={pathname}
            savesUserMovie={savesUserMovie}
            removeMovie={removeSaveMovie}
          />
          <ProtectedRoute
            exact
            path='/profile'
            loggedIn={loggedIn}
            component={Profile}
            userData={userData}
            onSignOut={hendleSignOut}
          />
          <ProtectedRoute
            exect
            path='/editprofile'
            setExpectResult={setExpectResult}
            expectResult={expectResult}
            infoStatus={infoStatus}
            loggedIn={loggedIn}
            component={Editprofile}
            onUpdateUser={handleUpdateUser}
            resError={responseServerError}
          />
          <Route path='*'>
            <Redirect to='/error404' />
          </Route>
          <Route path='/error404'>
            <Error404 />
          </Route>
        </Switch>
        <Footer location={pathname} />
      </CurrentUserContext.Provider>
    </div>
  );
}
export default withRouter(App);
