import './NovoCard.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mostrarCategorias } from '../../conexaoApi';
import FormNovoCard from '../FormNovoCard';

const NovoCard = ({ aoAdicionarCard, aoLimpar }) => {
    const [categorias, setCategorias] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        mostrarCategorias()
            .then((data) => setCategorias(data))
            .catch((error) => console.error("Erro ao buscar categorias: ", error))
    }, [])

    const aoCardAdicionado = (novoCard) => {
        aoAdicionarCard(novoCard)
        navigate('/')
    }

    return (
        <div className='novo-card'>
            <div className='conteudo'>
                <FormNovoCard
                    categorias={categorias}
                    aoCardAdicionado={aoCardAdicionado}
                    aoLimpar={aoLimpar}
                />
            </div>
        </div>
    )
}

export default NovoCard