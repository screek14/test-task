import axios from 'axios'
import config from "../../config";

const http = axios.create({
  baseURL: config.http.url,
  headers: config.http.defaultRequest.headers,
});

export default http;