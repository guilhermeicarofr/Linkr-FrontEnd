import axios from "axios";

function signUp(body) {
  return axios.post("http://localhost:4000/sign-up", body);
}

function publishPost(body) {
  return axios.post("http://localhost:4000/post", body);
}

export { signUp, publishPost };
