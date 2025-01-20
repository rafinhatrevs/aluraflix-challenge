import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho";
import Categoria from "./components/Categoria";
import Modal from "./components/Modal";
import NovoVideo from "./components/NovoVideo";
import Rodape from "./components/Rodape";
import useCards from "./hooks/useCards";

function App() {
  const {
    categorias,
    modalVisivel,
    cardSelecionado,
    adicionarCard,
    selecionarCard,
    editarCard,
    deletarCard,
    fecharModal,
  } = useCards()

  return (
    <>
      <Cabecalho aoAdicionarCard={adicionarCard} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner
                categoria="FRONT END"
                titulo="SEO com React"
                texto="Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma 'Pokedex'!"
                imagem="/images/teste-destaque.png"
              />

              {categorias.map((categoria) => (
                <Categoria
                  key={categoria.id}
                  id={categoria.id}
                  nome={categoria.nome}
                  corFundo={categoria.corFundo}
                  corBorda={categoria.corBorda}
                  cards={categoria.cards || []}
                  aoEditar={selecionarCard}
                  aoDeletar={deletarCard}
                />
              ))}

              <Modal
                visivel={modalVisivel}
                aoFechar={fecharModal}
                card={cardSelecionado}
                categorias={categorias}
                aoCardEditado={editarCard}
              />
            </>
          }
        />

        <Route
          path="/novo-video"
          element={
            <NovoVideo aoAdicionarCard={adicionarCard} />
          }
        />
      </Routes>

      <Rodape />
    </>
  )
}

export default App