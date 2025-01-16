import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { excluirCard, mostrarCategorias } from "./conexaoApi";
import { adicionarCard, deletarCard, editarCard } from "./cardsUtils";
import Banner from "./componentes/Banner";
import Cabecalho from "./componentes/Cabecalho";
import Categoria from "./componentes/Categoria";
import Modal from "./componentes/Modal";
import NovoVideo from "./componentes/NovoVideo";
import Rodape from "./componentes/Rodape";

function App() {
  const [categorias, setCategorias] = useState([])
  const [cardSelecionado, setCardSelecionado] = useState(null)
  const [modalVisivel, setModalVisivel] = useState(false)

  useEffect(() => {
    mostrarCategorias()
      .then((data) => setCategorias(data))
      .catch((error) => console.error("Erro ao buscar categorias: ", error))
  }, [])

  const aoAdicionarCard = (novoCard) => {
    setCategorias((categorias) =>
      adicionarCard(novoCard, categorias)
    )
  }

  const aoEditarCard = (card) => {
    setCardSelecionado(card)
    setModalVisivel(true)
  }

  const aoCardEditado = (cardEditado) => {
    setCategorias((categorias) =>
      editarCard(cardEditado, cardSelecionado, categorias)
    )

    setModalVisivel(false)
    setCardSelecionado(null)
  }

  const aoDeletarCard = async (id) => {
    await excluirCard(id)
      .then(() => setCategorias((categorias) => deletarCard(id, categorias)))
      .catch((error) => console.error("Erro ao excluir card: ", error))
  }

  return (
    <>
      <Cabecalho aoAdicionarCard={aoAdicionarCard} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner
                categoria="FRONT END"
                titulo="SEO com React"
                texto="Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma 'Pokedex'!"
                imagem="/imagens/teste-destaque.png"
              />

              {categorias.map((categoria) => (
                <Categoria
                  key={categoria.id}
                  id={categoria.id}
                  nome={categoria.nome}
                  corFundo={categoria.corFundo}
                  corBorda={categoria.corBorda}
                  cards={categoria.cards || []}
                  aoEditar={aoEditarCard}
                  aoDeletar={aoDeletarCard}
                />
              ))}

              <Modal
                visivel={modalVisivel}
                aoFechar={() => setModalVisivel(false)}
                card={cardSelecionado}
                categorias={categorias}
                aoCardEditado={aoCardEditado}
              />
            </>
          }
        />

        <Route
          path="/novo-video"
          element={
            <NovoVideo aoAdicionarCard={aoAdicionarCard} />
          }
        />
      </Routes>

      <Rodape />
    </>
  )
}

export default App