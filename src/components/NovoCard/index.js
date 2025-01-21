import './NovoCard.css';
import { useNavigate } from 'react-router-dom';
import FormNovoCard from '../FormNovoCard';
import useCategoriasContext from '../../hooks/useCategoriasContext';

const NovoCard = () => {
    const navigate = useNavigate()

    const {
        categorias,
        adicionarCard,
    } = useCategoriasContext()

    const aoCardAdicionado = (novoCard) => {
        adicionarCard(novoCard)
        navigate('/')
    }

    return (
        <div className='novo-card'>
            <div className='conteudo'>
                <FormNovoCard
                    categorias={categorias}
                    aoCardAdicionado={aoCardAdicionado}
                />
            </div>
        </div>
    )
}

export default NovoCard