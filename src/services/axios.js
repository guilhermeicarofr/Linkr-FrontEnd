import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function signUp(body) {
	return axios.post(`${API}/sign-up`, body);
}

function publishPost(body, config) {
	return axios.post(`${API}/post`, body, config);
};

function signInApi(body) {
	return axios.post(`${API}/sign-in`, body)
};
  
function getTimeline(config) {
	return axios.get(`${API}/timeline`, config);
}

function listTrending(config) {
	return axios.get(`${API}/hashtag`, config);
}

export { signUp, publishPost, signInApi, getTimeline,listTrending };
