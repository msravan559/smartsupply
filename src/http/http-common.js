import axios from 'axios';

import { appConfig } from '../constants';

const defaultOptions = {
  baseURL: appConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000 * 30,
};

const AXIOS = axios.create(defaultOptions);

AXIOS.interceptors.request.use((request) => {
  return request;
});

AXIOS.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response.data);

    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (typeof error.response === 'undefined') {
      // console.log(
      //   'A network error occurred. This could be a CORS issue or a dropped internet connection.It is not possible for us to know.',
      // );
    }

    return Promise.reject(error);
  }
);

export default AXIOS;
