import axios from "axios";
import * as https from "https";
axios.defaults.headers.common["ForceUseSession"] = true;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.withCredentials = true

const instance = axios.create({
    baseURL: "https://dev-freshmarket.cloudbpm.ru",
});



export const agent = new https.Agent({
    rejectUnauthorized: false
});
export default instance;