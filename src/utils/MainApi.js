import { MAIN_API } from './utils'
import {urlWithMovies} from './utils'
const { URL } = MAIN_API

const handleRes = (res) => {
    return res.ok ? res.json() : Promise.reject({ error: res.status, message: res.message })
}



export const getContent = (token) => {
    return fetch(`${URL}/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => handleRes(res));
};

export const register = (name, email, password) => {
    console.log(`${URL}/signup`);
    return fetch(`${URL}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
        .then((res) => handleRes(res))
}

export const authorize = (email, password) => {
    console.log(email, password);
    return fetch(`${URL}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then((res) => handleRes(res))
}

export const setProfileInfo = (inputData) => {
    return fetch(`${URL}/users/me`, {
        method: "PATCH",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
            email: inputData.email,
            name: inputData.name,
        })
    })
        .then((res) => handleRes(res))
}

export const savedMovie = (movieData, jwt) => {
    console.log(movieData);
    return fetch(`${URL}/movies`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
            
            country: movieData.country,
            director: movieData.director,
            duration: movieData.duration,
            year: movieData.year,
            description: movieData.description,
            image: `${urlWithMovies}${movieData.image.url}`,
            trailer: movieData.trailerLink,
            nameRU: movieData.nameRU,
            nameEN: movieData.nameEN,
            thumbnail: movieData.trailerLink,
            movieId: movieData.id,
            owner: movieData.owner
        })
    })
        .then((res) => handleRes(res))
};

export const getSavedMovie = (jwt) => {
    return fetch(`${URL}/movies`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
        },
    })
        .then((res) => handleRes(res))
};

export const removeMovie = (id, jwt) => {
    return fetch(`${URL}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => handleRes(res))
  };



// const config = {
//     url: "https://api.mestoken.students.nomoredomains.icu",


//     headers: {
//         'Accept': 'application/json',
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem('jwt')}`
//     }
// }

// const handleResponse = (res) => {
//     if (!res.ok) {
//         throw new Error('Данные введены неверно')
//     } 
//     return res.json()
// }

// class Api {
//     constructor(config) {
//         this._headers = config.headers
//         this._url = config.url
//         this._cohort = config.cohort
//     }
//     //запрос на отрисовку карточек 
//     getCardList() {
//         return fetch(`${this._url}/cards`, {
//             headers: this._headers
//         }).then(handleResponse)
//     }
//     //запрос на создание новой карточки
//     createCard(data) {
//         return fetch(`${this._url}/cards`, {
//             method: "POST",
//             headers: this._headers,
//             body: JSON.stringify({
//                 name: data.name,
//                 link: data.link,
//             })
//         })
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error('Данные введены неверно')
//             } 
//             return res.json()
//         })
//     }

//     //запрос на изменение данных профайла
//     setUserInfo(inputData) {
//         return fetch(`${this._url}/users/me`, {
//             method: "PATCH",
//             headers: this._headers,
//             body: JSON.stringify({
//                 name: inputData.name,
//                 about: inputData.about
//             })
//         })
//         // .then(handleResponse)
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error('Данные введены неверно')
//             } 
//             return res.json()
//         })
//     }

//     //забираем данные профайла с сервера
//     getProfileInfo() {
//         return fetch(`${this._url}/users/me`, {
//             headers: this._headers,
//         })
//         .then(handleResponse)
//     }

//     //удаляем карточку
//     setCardDelete(cardId) {
//         return fetch(`${this._url}/cards/${cardId}`, {
//             method: "DELETE",
//             headers: this._headers,
//         })
//             .then(handleResponse)
//     }

//     //запрос на удаление/добавление лайка
//     changeLikeCardStatus(cardId, LikeState) {
//         const method = LikeState ? "PUT" : "DELETE"
//         return fetch(`${this._url}/cards/${cardId}/likes`, {
//             method,
//             headers: this._headers,
//         })
//             .then(handleResponse)
//     }

//     //редактирвоание аватара
//     setUserAvatar(inputData) {
//         return fetch(`${this._url}/users/me/avatar`, {
//             method: "PATCH",
//             headers: this._headers,
//             body: JSON.stringify({
//                 avatar: inputData.avatar,
//             })
//         })
//         // .then(handleResponse)
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error('Данные введены неверно')
//             } 
//             return res.json()
//         })
//     }
// }

// const api = new Api(config)

// export default api