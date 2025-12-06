import API_URL, {getHeaders} from "./api.js" ;

export const loginServices = async (email, password) => {
    try{
        const response = await fetch(`${API_URL}/auth/login`,{
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ email, password }),
        });
        if(!response.ok){
            const errorData = await response.text();
            throw new Error(errorData || "Error en credenciales de logeo");
        }
        return await response.json();
    }catch(error){
        throw error;
    }
};
