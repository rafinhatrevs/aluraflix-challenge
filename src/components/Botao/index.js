import './Botao.css';

const Botao = ({ corTexto, corBorda, aoClicar, texto, tipo = 'button', icone }) => {
    return (
        <button className='botao'
            style={{
                color: corTexto,
                borderColor: corBorda
            }}
            onClick={aoClicar}
            type={tipo}
        >
            {icone}
            <span className='texto'>{texto}</span>
        </button>
    )
}

export default Botao