import { createContext, useState } from "react";

export const CategoriasContext = createContext()

export const CategoriasProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([])
    const [cardSelecionado, setCardSelecionado] = useState(null)
    const [modalVisivel, setModalVisivel] = useState(false)

    return (
        <CategoriasContext.Provider value={{
            categorias, setCategorias,
            cardSelecionado, setCardSelecionado,
            modalVisivel, setModalVisivel,
        }}>
            {children}
        </CategoriasContext.Provider>
    )
}