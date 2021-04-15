const MAIN_API = {
    URL: 'http://localhost:3010'
    // URL: 'http://api.vzh.release.students.nomoredomains.icu'
}
const urlWithMovies = 'https://api.nomoreparties.co'

const validateEmail = (email) => {
    const reMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reMail.test(String(email).toLowerCase());
}

const validateName = (name) => {
    const reName = /[А-Яа-яёЁA-Za-z -]+$/i;
    return reName.test(String(name).toLowerCase());
}


export { MAIN_API, urlWithMovies, validateEmail, validateName }

