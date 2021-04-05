import { useState, useEffect } from "react";
import { Route, Switch, withRouter, Redirect, useLocation } from 'react-router-dom'
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile'
// import EditProfilePopup from '../EditProfilePopup/EditProfilePopup'
import Editprofile from '../Editprofile/Editprofile'
import Error404 from '../Error404/Error404'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import { initialMovies, saveMovies } from '../../utils/utils'

// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

//подписываемся на контекст
// import CurrentUserContext from '../../contexts/CurrentUserContext'

function App() {
    // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(true)
    const { pathname } = useLocation();
    const [loggedIn, setLoggedIn] = useState(true);
    const [movies, setMovies] = useState([])
    const [likeMovies, setSaveMovies] = useState([])
    const [userData, setuserData] = useState({
        name: 'Василий',
        email: 'pochta@yandex.ru'
    })

    useEffect(() => {
        const moviesList = initialMovies.map((item) => {
            return {
                owner: item.owner,
                movieId: item._id,
                link: item.link,
                name: item.name,
                likes: item.likes,
                time: item.time,
            }
        })
        setMovies(moviesList)
    }, [])

    useEffect(() => {
        const moviesSave = saveMovies.map((item) => {
            return {
                owner: item.owner,
                movieId: item._id,
                link: item.link,
                name: item.name,
                likes: item.likes,
                time: item.time,
            }
        })
        setSaveMovies(moviesSave)
    }, [])
    return (
        <div className="body">
            {/* <CurrentUserContext.Provider value={currentUser}> */}
            <Header location={pathname} loggedIn={loggedIn} />
            <Switch>
                <Route exact path='/signin'>
                    <Login />
                </Route>
                <Route exact path='/signup'>
                    <Register />
                </Route>
                <Route path='/editprofile'>
                    <Editprofile userData={userData} />
                </Route>
                <Route exact path='/'>
                    <Main />
                </Route>
                <Route exact path='/profile'>
                    <Profile
                        userData={userData} />
                </Route>
                <Route exact path='/movies'>
                    <Movies movies={movies} location={pathname} />
                </Route>
                <Route exact path='/saved-movies'>
                    <SavedMovies movies={likeMovies} location={pathname} />
                </Route>
                <Route path='/error404'>
                    <Error404 />
                </Route>
                <Route path="*">
                    <Redirect to="/error404" />
                </Route>
            </Switch>
            <Footer location={pathname} />
            {/* </CurrentUserContext.Provider> */}
        </div>
    );
}
export default withRouter(App);
