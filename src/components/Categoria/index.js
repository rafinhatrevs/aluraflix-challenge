import './Categoria.css';
import Card from '../Card';
import useCategoriasContext from '../../hooks/useCategoriasContext';

const Categoria = ({ id }) => {
    const {
        categorias,
    } = useCategoriasContext()

    const categoria = categorias.find((c) => c.id === id)

    return (
        categoria.cards.length > 0 ?
            <section className='categoria'>
                <h3 className='titulo' style={{ backgroundColor: categoria.corFundo }}>{categoria.nome}</h3>
                <div className='cards'>
                    {categoria.cards.map(card => (
                        <Card
                            key={card.id}
                            id={card.id}
                            video={card.video}
                            descricao={card.descricao}
                        />
                    ))}
                </div>
            </section>
            : ''
    )
}

export default Categoria