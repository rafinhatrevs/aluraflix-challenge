import './Opcao.css';

const Opcao = ({ imagem, texto, aoClicar }) => {
    return (
        <div className='opcao'>
            {imagem}
            <button onClick={aoClicar} >
                {texto}
            </button >
        </div>
    )
}

export default Opcao