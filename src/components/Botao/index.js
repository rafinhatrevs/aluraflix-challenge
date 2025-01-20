import './Botao.css';

const Botao = ({ corTexto, corBorda, aoClicar, texto, tipo = 'button' }) => {
    return (
        <button className='botao'
            style={{
                color: corTexto,
                borderColor: corBorda
            }}
            onClick={aoClicar}
            type={tipo}
        >
            {texto}
        </button>
    )
}

export default Botao