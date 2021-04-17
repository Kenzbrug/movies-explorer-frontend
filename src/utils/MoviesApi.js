const handleRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject({ error: res.status, message: res.message });
};

export const getMovie = () => {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => handleRes(res));
};
