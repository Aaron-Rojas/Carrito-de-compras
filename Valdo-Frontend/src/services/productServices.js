import API_URL from "./api.js"

export const  obtenerProductos = async () => {
    try{
        const response = await fetch(`${API_URL}/productos`);
        if(!response.ok){
            throw new Error("Error al cargar los  productos ");
            return await response.json();
        }
    } catch(err) {
        console.error(err);
        return [];
    }
};
