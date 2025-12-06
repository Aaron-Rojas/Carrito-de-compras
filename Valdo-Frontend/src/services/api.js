const API_URL =  "http://localhost:8080/api";
//const API_URL = import.meta.env.REACT_APP_API_URL ;

export const getHeaders = () => {
    return {
        "Content-Type": "application/json",
    };
};

export default API_URL;