import { api } from "../configs";
import { API_KEY } from "../configs/api";

async function getAll(search = "star", page = 1) {
  const data = await (await api.get(`?apikey=${API_KEY}&s=${search}&page=${page}`)).data;
  return data;
};

async function getTopOne() {
  const data = await (await api.get(`?apikey=${API_KEY}&i=tt9114286`)).data;
  return data;
}

async function getById(id) {
  const data = await (await api.get(`?apikey=${API_KEY}&i=${id}`)).data;
  return data;
}

export const HomeService = {
  getAll,
  getTopOne,
  getById
}