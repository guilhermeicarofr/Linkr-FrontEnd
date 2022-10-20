import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function signUp(body) {
  return axios.post(`${API}/sign-up`, body);
}

function publishPost(body) {
  return axios.post(`${API}/post`, body);
}

export { signUp, publishPost };
