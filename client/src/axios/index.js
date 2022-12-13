import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signUp = async (formData) => await API.post('/users/signup', formData)

export const signIn = async (formData) => await API.post('users/signin', formData)

export const logOut = async (id) => await API.get(`/users/logout/${id}`)