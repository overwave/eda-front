import axios, {AxiosRequestConfig} from 'axios';

const client = axios.create({
        baseURL: "https://overwave.dev/api/",
        headers: {}
    }
);

client.interceptors.request.use(function (config: AxiosRequestConfig) {
    const authToken = localStorage.getItem('auth_token');
    if (authToken) {
        config.headers!!.Authorization = authToken;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export function get<T>(url: string, config: AxiosRequestConfig<void>): Promise<T> {
    return client.get<T>(url, config).then(response => response.data);
}

export function post<T>(url: string, data: any): Promise<T> {
    return client.post<T>(url, data).then(response => response.data);
}
