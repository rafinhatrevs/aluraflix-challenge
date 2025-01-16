import './Categoria.css';
import Card from '../Card';

const Categoria = ({ cards = [], corFundo, corBorda, nome, aoEditar, aoDeletar }) => {
    return (
        cards.length > 0 ?
            <section className='categoria'>
                <h3 className='titulo' style={{ backgroundColor: corFundo }}>{nome}</h3>
                <div className='cards'>
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            id={card.id}
                            nome={card.nome}
                            imagem={card.imagem}
                            video={card.video}
                            descricao={card.descricao}
                            borda={corBorda}
                            aoEditar={() => aoEditar(card)}
                            aoDeletar={() => aoDeletar(card.id)}
                        />
                    ))}
                </div>
            </section>
            : ''
    )
}

export default Categoria