import { MAIN_API } from './utils'
import { urlWithMovies } from './utils'
const { URL } = MAIN_API

const handleRes = (res) => {
    return res.ok ? res.json() : Promise.reject({ error: res.status, message: res })
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
    console.log(name, email, password);
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
    return fetch(`${URL}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
        },
    }).then((res) => handleRes(res))
};