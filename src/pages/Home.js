import Banner from "../components/Banner";
import Categoria from "../components/Categoria";
import Modal from "../components/Modal";
import useCategoriasContext from "../hooks/useCategoriasContext";

const Home = () => {
    const {
        categorias,
    } = useCategoriasContext()

    return (
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
                />
            ))}

            <Modal />
        </>
    )
}

export default Home