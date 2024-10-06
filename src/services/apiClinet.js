import axios from "axios";
import appConfig from "@/appConfig";

const apiClient = axios.create({
    baseURL: appConfig.baseURL,
    timeout: 100000,
    headers: {
        "Content-Type": "application/json",
    }
});

// Request Interceptor
apiClient.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

// Response Interceptor
apiClient.interceptors.response.use(response => {
    return response.data;
}, error => {
    // Handle response errors
    if (!error.response) {
        throw new Error("Server not responding. Please check your network connection or try again later.");
    } else {
        const status = error.response.status;
        const message = error.response.data.message || error.message;

        switch (status) {
            case 400:
                console.error("Bad Request:", message);
                break;
            case 401:
                console.error("Unauthorized:", message);
                break;
            case 404:
                console.error("Not Found:", message);
                break;
            case 500:
                console.error("Server Error:", message);
                break;
            default:
                console.error("Unexpected Error:", message);
        }
        throw new Error(message);
    }
});

export default apiClient;