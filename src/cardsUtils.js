export const adicionarCard = (novoCard, categorias) => {
    return categorias.map((categoria) => {
        if (categoria.nome === novoCard.categoria) {
            return {
                ...categoria,
                cards: [...categoria.cards, novoCard],
            }
        }

        return categoria
    })
}

export const editarCard = (cardEditado, cardSelecionado, categorias) => {
    let categoriasAtualizadas = [...categorias]

    if (cardEditado.categoria !== cardSelecionado.categoria) {

        // exclui o card da categoria anterior
        categoriasAtualizadas = categoriasAtualizadas.map((categoria) => {
            if (categoria.nome === cardSelecionado.categoria) {
                return {
                    ...categoria,
                    cards: categoria.cards.filter((card) => card.id !== cardSelecionado.id),
                }
            }

            return categoria
        })

        // adiciona o card à nova categoria
        categoriasAtualizadas = categoriasAtualizadas.map((categoria) => {
            if (categoria.nome === cardEditado.categoria) {
                return {
                    ...categoria,
                    cards: [...categoria.cards, { ...cardEditado, id: cardSelecionado.id }],
                }
            }

            return categoria
        })

    } else {

        // atualiza o card dentro da mesma categoria
        categoriasAtualizadas = categoriasAtualizadas.map((categoria) => {
            return {
                ...categoria,
                cards: categoria.cards.map((card) =>
                    card.id === cardSelecionado.id
                        ? { ...cardEditado, id: card.id }
                        : card
                ),
            }
        })
    }

    return categoriasAtualizadas
}

export const deletarCard = (id, categorias) => {
    return categorias.map((categoria) => ({
        ...categoria,
        cards: categoria.cards.filter((card) => card.id !== id),
    }))
}