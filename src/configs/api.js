import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.omdbapi.com",
  headers: {
    "Content-Type": "application/json" 
  }
});

export const API_KEY = "ca7f83a3";