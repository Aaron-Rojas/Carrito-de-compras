import API_URL, { getHeaders } from "./api";

export const procesarCompra = async  (ordenData) => {
    try{
        const response = await fetch(`${API_URL}/ordenes`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(ordenData),
        });
        if (!response.ok){
            const errorText = await response.text();
            throw new Error (errorText || "Error al procesar la compra");
        }
        return await response.json();
    }catch(err){
        throw err;
    }
};