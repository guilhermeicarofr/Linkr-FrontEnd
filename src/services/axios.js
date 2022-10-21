import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function signUp(body) {
  return axios.post(`${API}/sign-up`, body);
}

function publishPost(body, config) {
  return axios.post(`${API}/post`, body, config);
}

function signInApi(body) {
  return axios.post(`${API}/sign-in`, body);
}

function getTimeline() {
  return axios.get(`${API}/timeline`);
}

function listTrending() {
  return axios.get(`${API}/hashtag`);
}

function getUserPosts(id) {
  return axios.get(`${API}/user/${id}`);
}

export {
  signUp,
  publishPost,
  signInApi,
  getTimeline,
  getUserPosts,
  listTrending,
};
