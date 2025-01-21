import { useContext, useEffect } from "react";
import { atualizarCard, criarCard, excluirCard, mostrarCategorias } from "../conexaoApi";
import { CategoriasContext } from "../contexts/CategoriasContext";

export const useCategoriasContext = () => {
    const { categorias, setCategorias, cardSelecionado, setCardSelecionado, modalVisivel, setModalVisivel } = useContext(CategoriasContext)

    useEffect(() => {
        mostrarCategorias()
            .then((data) => setCategorias(data))
            .catch((error) => console.error("Erro ao buscar categorias: ", error))
    }, [setCategorias])

    const adicionarCard = async (novoCard) => {
        try {
            const cardCriado = await criarCard(novoCard)
            setCategorias((categorias) =>
                categorias.map((categoria) =>
                    categoria.nome === novoCard.categoria
                        ? { ...categoria, cards: [...categoria.cards, cardCriado] }
                        : categoria
                )
            )

        } catch (error) {
            console.error("Erro ao adicionar card: ", error)
        }
    }

    const selecionarCard = async (card) => {
        setCardSelecionado(card)
        setModalVisivel(true)
    }

    const editarCard = async (cardEditado) => {
        try {
            const cardAtualizado = await atualizarCard(cardEditado)

            setCategorias((categorias) =>
                categorias.map((categoria) => {
                    // exclui o card da categoria anterior
                    if (cardEditado.categoria !== cardSelecionado.categoria) {
                        categoria = {
                            ...categoria,
                            cards: categoria.cards.filter((card) => card.id !== cardSelecionado.id),
                        }
                        // adiciona o card à nova categoria
                        if (categoria.nome === cardEditado.categoria) {
                            categoria = {
                                ...categoria,
                                cards: [...categoria.cards, cardAtualizado],
                            }
                        }

                    } else {
                        // atualiza o card dentro da mesma categoria
                        categoria = {
                            ...categoria,
                            cards: categoria.cards.map((card) =>
                                card.id === cardSelecionado.id ? cardAtualizado : card
                            ),
                        }
                    }

                    return categoria
                })
            )

            setModalVisivel(false)
            setCardSelecionado(null)

        } catch (error) {
            console.error("Erro ao editar card: ", error)
        }
    }

    const deletarCard = async (id) => {
        try {
            await excluirCard(id)
            setCategorias((categorias) =>
                categorias.map((categoria) => ({
                    ...categoria,
                    cards: categoria.cards.filter((card) => card.id !== id),
                }))
            )
        } catch (error) {
            console.error("Erro ao deletar card: ", error)
        }
    }

    return {
        categorias,
        cardSelecionado,
        modalVisivel,
        adicionarCard,
        selecionarCard,
        editarCard,
        deletarCard,
        fecharModal: () => setModalVisivel(false),
    }
}

export default useCategoriasContext