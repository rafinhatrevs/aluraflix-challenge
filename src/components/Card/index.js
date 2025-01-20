import './Card.css';
import Opcao from '../Opcao';

const Card = ({ borda, imagem, nome, aoDeletar, aoEditar }) => {
    return (
        <div className='card' style={{ borderColor: borda }}>
            <img className='imagem' src={imagem} alt={nome} style={{ borderColor: borda }} />
            <div className='opcoes'>
                <Opcao
                    imagem={<img src='/images/deletar.png' alt='Icone de deletar.' />}
                    aoClicar={aoDeletar}
                    texto='DELETAR'
                />
                <Opcao
                    imagem={<img src='/images/editar.png' alt='Icone de editar.' />}
                    aoClicar={aoEditar}
                    texto='EDITAR'
                />
            </div>
        </div>
    )
}

export default Card