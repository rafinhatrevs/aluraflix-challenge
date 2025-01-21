import './Card.css';
import Opcao from '../Opcao';
import useCategoriasContext from '../../hooks/useCategoriasContext';

const Card = ({ id }) => {
    const {
        categorias,
        selecionarCard,
        deletarCard,
    } = useCategoriasContext()

    const categoria = categorias.find((c) => c.cards.some((card) => card.id === id))
    const card = categoria ? categoria.cards.find((card) => card.id === id) : null

    return (
        <div className='card' style={{ borderColor: categoria.corBorda }}>
            <img className='imagem' src={card.imagem} alt={card.nome} style={{ borderColor: categoria.corBorda }} />
            <div className='opcoes'>
                <Opcao
                    imagem={<img src='/images/deletar.png' alt='Icone de deletar.' />}
                    aoClicar={() => deletarCard(card.id)}
                    texto='DELETAR'
                />
                <Opcao
                    imagem={<img src='/images/editar.png' alt='Icone de editar.' />}
                    aoClicar={() => selecionarCard(card)}
                    texto='EDITAR'
                />
            </div>
        </div>
    )
}

export default Card