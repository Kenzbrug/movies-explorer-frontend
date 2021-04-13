import { Route, Link } from 'react-router-dom';
import './Profile.css'


function Profile({ userData, onSignOut }) {
    return (
        <section className="profile">
            <p className="profile__welcome">
                {`Привет, ${userData.name}!`}
            </p>
            <div className='profile__container'>
                <p className='profile__placeholder'>Имя</p>
                <p className='profile__userData'>{userData.name}</p>
            </div>
            <div className='profile__container'>
                <p className='profile__placeholder'>E-mail</p>
                <p className='profile__userData'>{userData.email}</p>
            </div>
            <Route path='/profile'>
                <Link className='profile__button-edit' to='/editprofile'>
                    Редактировать
                </Link>
                <button className='profile__button-signout' onClick={onSignOut}>
                    Выйти из аккаунта
                </button>
            </Route>
        </section >
    )
}

export default Profile