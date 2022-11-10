import axios from "axios";

const baseURL = "https://rickandmortybackend.vercel.app/";

export const Api = axios.create({
  baseURL,
});
