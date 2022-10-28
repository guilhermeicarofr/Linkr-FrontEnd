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

function getTimeline(config) {
  return axios.get(`${API}/timeline`, config);
}

function listTrending(config) {
  return axios.get(`${API}/hashtag`, config);
}

function getUserPosts(id, config) {
  return axios.get(`${API}/user/${id}`, config);
}

function getHashtagsPosts(hashtag, config) {	
	return axios.get(`${API}/hashtag/${hashtag}`, config);
}

function getLikes(postId, config) {
  return axios.get(`${API}/likes/${postId}`, config);
}

function toggleLike(postId, config) {
  return axios.post(`${API}/likes/${postId}`, {}, config);
}

function getUserByName({ config, search }) {
  return axios.get(`${API}/user?name=${search}`, config);
}

function deletePost(postId, config) {
	return axios.delete(`${API}/post/${postId}`, config);
}

function updatePost({ body, config, postId }) {
  return axios.put(`${API}/post/update/${postId}`, body, config);
}

function followUser({ config, followedId }) {
  return axios.post(`${API}/follow/${followedId}`, {}, config);
}

function isFollowing({ config, followedId }) {
  return axios.get(`${API}/following/${followedId}`, config)
}

function getPostComments({config, postId}) {
  return axios.get(`${API}/comments/${postId}`, config);
}

function createComment({body, config, postId}) {
  return axios.post(`${API}/comments/${postId}`, body, config);
}

function getCountComments({config, postId}) {
  return axios.get(`${API}/comments/count/${postId}`, config);
}

function sharePost({ config, postId }) {
  return axios.post(`${API}/shares/${postId}`, {}, config);
}

function unsharePost({ config, shareId }) {
  return axios.delete(`${API}/shares/${shareId}`, config);
}

function countShares({ config, postId }) {
  return axios.get(`${API}/shares/${postId}`, config);
}

function countProfilesFollowed( config ) {
  return axios.get(`${API}/following`, config);
}

export {
  signUp,
  publishPost,
  signInApi,
  getTimeline,
  getUserPosts,
  listTrending,
  getLikes,
  toggleLike,
  getUserByName,
  getHashtagsPosts,
  updatePost,
	deletePost,
  followUser,
  isFollowing,
  getPostComments,
  createComment,
  getCountComments,
  sharePost,
  unsharePost,
  countProfilesFollowed,
  countShares
};
