import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchUsers = () => API.get("/users");
export const submitUser = (userData) => API.post("/submit", userData);
