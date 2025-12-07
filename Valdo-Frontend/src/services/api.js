//const API_URL =  "http://localhost:8080";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";
export const getHeaders = () => {
    return {
        "Content-Type": "application/json",
    };
};

export default API_URL;