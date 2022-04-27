import axios, {AxiosRequestConfig} from 'axios';

const client = axios.create({
    baseURL: "https://overwave.dev/api/",
});

export function get<T>(url: string, config: AxiosRequestConfig<void>): Promise<T> {
    return client.get<T>(url, config)
        .then(response => response.data);
}
