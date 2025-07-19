import api from "./axios"; // your axios.js with token auto attached

export const createPost = (data) => api.post("/posts", data);
export const getAllPosts = () => api.get("/posts");
export const getMyPosts = () => api.get("/posts/mine");
export const getPostById = (id) => api.get(`/posts/${id}`);
export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/posts/${id}`);
