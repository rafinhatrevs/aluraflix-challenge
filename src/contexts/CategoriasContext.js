import { createContext, useState } from "react";

export const CategoriasContext = createContext()

export const CategoriasProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([])

    return (
        <CategoriasContext.Provider value={{ categorias, setCategorias }}>
            {children}
        </CategoriasContext.Provider>
    )
}