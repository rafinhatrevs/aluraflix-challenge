import NovoCard from "../components/NovoCard";
import useCategoriasContext from "../hooks/useCategoriasContext";

const NovoVideo = () => {
    const {
        adicionarCard,
    } = useCategoriasContext()

    return (
        <NovoCard
            aoAdicionarCard={adicionarCard}
        />
    )
}

export default NovoVideo