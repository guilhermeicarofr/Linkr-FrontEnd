import axios from "axios";

const API = process.env.REACT_APP_API_URL;


function signUp(body) {
	return axios.post(`${API}/sign-up`, body);
}

function publishPost(body) {
	return axios.post(`${API}/post`, body);
};

function signInApi(body) {
	return axios.post(`${API}/sign-in`, body)
	};
  
  function getTimeline() {
	return axios.get(`${API}/timeline`);
  }

  function listTrending() {
	return axios.get(`${API}/hashtag`);
}

export { signUp, publishPost, signInApi, getTimeline,listTrending };
