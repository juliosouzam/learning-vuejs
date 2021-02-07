import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3333';
// axios.defaults.headers.common['Authorization'] = '';
// axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios;
    Vue.prototype.$http = axios.create({
      baseURL: 'http://localhost:3333',
      headers: {
        // Authorization: 'abc123',
        get: {
          Authorization: 'def456',
        },
      },
    });

    Vue.prototype.$http.interceptors.request.use(
      (config) => {
        // eslint-disable-next-line no-console
        console.log(config);

        return config;
      },
      (error) => Promise.reject(error)
    );

    Vue.prototype.$http.interceptors.response.use(
      (response) => {
        // eslint-disable-next-line no-console
        console.log(response);

        return response;
      },
      (error) => Promise.reject(error)
    );
  },
});
