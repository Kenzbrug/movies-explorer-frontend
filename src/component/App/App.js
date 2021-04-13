import { useState, useEffect } from "react";
import { Route, Switch, withRouter, Redirect, useLocation, useHistory } from 'react-router-dom'
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile'
import Editprofile from '../Editprofile/Editprofile'
import Error404 from '../Error404/Error404'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import * as MainApi from '../../utils/MainApi';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// подписываемся на контекст
import CurrentUserContext from '../../contexts/CurrentUserContext'

function App() {
    const { pathname } = useLocation();
    const [loggedIn, setLoggedIn] = useState(false);
    // const [likeMovies, setSaveMovies] = useState([])
    const [currentUser, setCurrentUser] = useState('')
    const [savesUserMovie, setSaveUserMovies] = useState([]);
    const [userData, setUserData] = useState({
        name: '',
        email: ''
    })

    const history = useHistory()

    const handleTokenCheck = (jwt) => {
        MainApi.getContent(jwt)
            .then((data) => {
                if (data) {
                    let getUserData = {
                        name: data.name,
                        email: data.email
                    }
                    setCurrentUser(data)
                    setLoggedIn(true)
                    // обновляем стейт данных пользователя
                    setUserData(getUserData)
                    // при удачной проверке перебрасываем на главную страницу
                    history.push('/movies')
                }
            })
            .catch((err) => {
                console.log(err);
                // return new Error('Ошибка введенных данных')
            })
    }

    const handleRegister = (userData) => {
        const { name, email, password } = userData
        return MainApi.register(name, email, password)
            .then((res) => {
                console.log(res);
                history.push('/signin')
            })
            .catch((err) => {
                console.log(err);
                // return new Error('Ошибка введенных данных')
            })
    }

    const handleLogin = (dataInput) => {
        console.log(dataInput);
        const { email, password } = dataInput
        return MainApi.authorize(email, password)
            .then((data) => {
                console.log(data);
                if (data.token) {
                    setLoggedIn(true)
                    localStorage.setItem('jwt', data.token)
                    window.location.reload()
                    // проверяем токен для отрисовки нужного email в header
                    handleTokenCheck(localStorage.getItem('jwt'))
                    history.push('/movies')
                }
                //  else if (data.message || data.error) {
                //     return new Error('Ошибка введенных данных')
                // }
            })
            .catch((err) => {
                console.log(err);
                // return new Error('Ошибка введенных данных')
            })
    }

    const hendleSignOut = () => {
        localStorage.removeItem('jwt')
        history.push('/')
        setSaveUserMovies([])
    }

    const handleUpdateUser = (profileData) => {
        MainApi.setProfileInfo(profileData)
            .then((saveProfileData) => {
                //обновляем state профиля в контексте
                setCurrentUser(saveProfileData)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);
                // return new Error('Ошибка введенных данных')
            })
    }
    const handleSaveMovie = (movieData) => {
        console.log(movieData);
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
                setSaveUserMovies(moviesCard.reverse())
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const removeSaveMovie = (id) => {
        const jwt = localStorage.getItem('jwt');
        MainApi.removeMovie(id, jwt)
            .then((res) => {
                //перерисовываем карточки
                getSevedMoviesCard(jwt)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (loggedIn) {
          const jwt = localStorage.getItem('token');
          getSevedMoviesCard(jwt);
        }
    }, [loggedIn, history]);


    useEffect(() => {
        const jwt = localStorage.getItem('jwt')
        if (jwt) {
            handleTokenCheck(jwt)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // проверяем залогинены мы или нет, чтобы перенаправить на главную страницу с поиском фильмов
    useEffect(() => {
        if (loggedIn) {
            const jwt = localStorage.getItem('jwt')
            getSevedMoviesCard(jwt)
            history.push('/movies')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn])

    return (
        <div className="body">
            <CurrentUserContext.Provider value={currentUser}>
                <Header location={pathname} loggedIn={loggedIn} />
                <Switch>
                    <Route exact path='/signin'>
                        <Login onLogin={handleLogin} />
                    </Route>
                    <Route exact path='/signup'>
                        <Register onRegister={handleRegister} />
                    </Route>
                    <Route exact path='/'>
                        <Main />
                    </Route>
                    <Route path='/error404'>
                        <Error404 />
                    </Route>
                    <ProtectedRoute
                        exact path='/movies'
                        loggedIn={loggedIn}
                        component={Movies}
                        location={pathname}
                        clickLikeButton={handleSaveMovie}
                        savesUserMovie={savesUserMovie}
                        removeMovieMain={removeSaveMovie}
                        
                    />
                    <ProtectedRoute
                        exact path='/saved-movies'
                        loggedIn={loggedIn}
                        component={SavedMovies}
                        location={pathname}
                        savesUserMovie={savesUserMovie}
                        removeMovie={removeSaveMovie}
                        
                    />
                    <ProtectedRoute
                        exact path='/profile'
                        loggedIn={loggedIn}
                        component={Profile}
                        userData={userData}
                        onSignOut={hendleSignOut}

                    />
                    <ProtectedRoute
                        exect path='/editprofile'
                        loggedIn={loggedIn}
                        component={Editprofile}
                        onUpdateUser={handleUpdateUser}
                    />
                    {/* <Route path='/editprofile'>
                        <Editprofile userData={userData} />
                    </Route> */}


                    {/* <Route exact path='/profile'>
                        <Profile
                            userData={userData} onSignOut={hendleSignOut} />
                    </Route> */}


                    {/* <Route exact path='/movies'>
                        <Movies movies={movies} location = { pathname } />
                    </Route> */}

                    {/* <Route exact path='/saved-movies'>
                        <SavedMovies movies={likeMovies} location={pathname} />
                    </Route> */}
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>

                </Switch>
                <Footer location={pathname} />
            </CurrentUserContext.Provider>
        </div >
    );
}
export default withRouter(App);
