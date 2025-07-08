import axios from "axios";
const WEB = "https://wyndclub.onrender.com/api";
const LOCAL = "http://localhost:5000/api";

const BASE_URL = WEB;
export const API = axios.create({
	baseURL: BASE_URL,
});

export const getNumericCode = (variantId) => {
	const parts = variantId.split("/");
	const numericId = parts[parts.length - 1];
	return numericId;
};

const withAuthHeader = {
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
};

export const buildURL = (path, queryParams) => {
	const url = new URL(BASE_URL);
	url.pathname += path;

	url.searchParams.set("page", queryParams?.page);
	url.searchParams.set("limit", queryParams?.limit);
	return url.href;
};

const fetchData = async (path, queryParams, params, signal) => {
	return API.get(buildURL(path, queryParams), params, signal);
	// return await (await fetch(url.href)).json();
};

const postData = async (path, data) => {
	return API.post(buildURL(path), data);
};

const putData = async (path, data, id, token) => {
	return token
		? API.put(buildURL(path), data, withAuthHeader(token))
		: API.put(buildURL(path), data);
};

const deleteData = async (path, data) => {
	return API.delete(buildURL(path), data);
};

export const apiService = {
	async get(path, queryParams, searchParams, signal) {
		return fetchData(path, queryParams, searchParams, signal);
	},

	async post(path, data) {
		return postData(path, data);
	},

	async put(path, data, id, token) {
		return putData(path, data, id, token);
	},

	async delete(path, data, id, token) {
		return deleteData(path, data, id, token);
	},
};

export default apiService;
