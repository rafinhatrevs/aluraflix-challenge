import { v4 as uuidv4 } from "uuid";

const API_URL = "http://localhost:3001"

export const mostrarCategorias = async () => {
    try {
        const resposta = await fetch(`${API_URL}/categorias`, {
            method: "GET",
        })

        if (!resposta.ok) {
            throw new Error(`Erro ao carregar categorias: ${resposta.statusText}`);
        }

        const categorias = await resposta.json()
        const cards = await fetch(`${API_URL}/cards`).then(res => res.json())

        categorias.forEach(categoria => {
            categoria.cards = cards.filter(card => card.categoria === categoria.nome)
        })

        return categorias

    } catch (error) {
        console.error("Erro ao carregar categorias: ", error)
        throw error
    }
}

export const criarCard = async (novoCard) => {
    try {
        const cardComId = { ...novoCard, id: uuidv4() }

        const resposta = await fetch(`${API_URL}/cards`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cardComId),
        })

        if (!resposta.ok) {
            throw new Error(`Erro ao criar card: ${resposta.statusText}`)
        }

        const cardCriado = await resposta.json()

        return cardCriado

    } catch (error) {
        console.error("Erro ao criar card: ", error)
        throw error
    }
}

export const atualizarCard = async (cardEditado) => {
    try {
        const resposta = await fetch(`${API_URL}/cards/${cardEditado.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                titulo: cardEditado.titulo,
                categoria: cardEditado.categoria,
                imagem: cardEditado.imagem,
                video: cardEditado.video,
                descricao: cardEditado.descricao
            }),
        })

        if (!resposta.ok) {
            throw new Error(`Erro ao atualizar card: ${resposta.statusText}`)
        }

        const cardAtualizado = await resposta.json()

        return cardAtualizado

    } catch (error) {
        console.error("Erro ao atualizar card: ", error)
        throw error
    }
}

export const excluirCard = async (id) => {
    try {
        const resposta = await fetch(`${API_URL}/cards/${id}`, {
            method: 'DELETE'
        })

        if (!resposta.ok) {
            throw new Error(`Erro ao excluir card: ${resposta.statusText}`)
        }

    } catch (error) {
        console.error("Erro ao excluir card: ", error)
        throw error
    }
}