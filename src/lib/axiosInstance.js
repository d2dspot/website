import axios from "axios";
import {  SERVICE_URLS } from "./apiPaths";

// default axios for fallback
const defaultAxios  = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});


const getServiceBaseUrl = (serviceName)=>{
  return SERVICE_URLS[serviceName]|| SERVICE_URLS.HEALTH;
}

export const getAxiosInstance =(serviceName)=>{
  const instance =axios.create({
    baseURL:getServiceBaseUrl(serviceName),
    timeout:60000,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json"
    }
  }) 

  
  instance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        if (
          error.response.status === 401 &&
          window.location.pathname !== "/login"
        ) {
          window.location.href = "/login";
        } else if (error.response.status === 500) {
          console.error("Server error , Please try again later.");
        }
      } else if (error.code === "ECONNABORTED") {
        console.error("Request timeout . please try again.");
      }
      return Promise.reject(error);
    }
  );
  return instance
}

export default defaultAxios;
