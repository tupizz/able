import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5005",
});

async function get(path) {
  try {
    const response = await api.get(path);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

class APIError extends Error {
  constructor(status, message = "") {
    super(message);
    this.status = status;
  }
}

async function post(path, body) {
  try {
    const response = await api.post(path, body);
    return response.data;
  } catch (error) {
    throw new APIError(error.response.status, error.response.data?.message || 'Please, check your data')
  }
}

async function put(path, body) {
  try {
    const response = await api.put(path, body);
    return response.data;
  } catch (error) {
    throw new APIError(error.response.status, error.response.data?.message || 'Please, check your data')
  }
}

async function del(path) {
  try {
    const response = await api.delete(path);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { get, post, del, put };
