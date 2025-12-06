import {createContext, useState, useEffect} from  "react" ;
import {loginServices} from "../services/authServices.js";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    //Verifica si existe un usuario guardado
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email, password) =>{
        setError("");
        try{
            const userData = await loginServices(email, password);
            setUser(userData);
            localStorage.setItem("valdo_user", JSON.stringify(userData));
            return true;
        }catch(err){
            setError(err.message);
            return false;
        }
    };

    const logout = async () => {
        setUser(null);
        localStorage.removeItem("valdo:_user");
    };

    return(
        <AuthContext.Provider value={{user, login, logout,error}}>
            {children}
        </AuthContext.Provider>
    );
}


