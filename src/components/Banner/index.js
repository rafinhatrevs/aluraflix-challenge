import './Banner.css';

const Banner = ({ categoria, titulo, texto, imagem }) => {
    return (
        <div className='banner'>
            <div className='overlay-banner'></div>
            <div className='info'>
                <h1>{categoria}</h1>
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>

            <img src={imagem} alt={titulo} />
        </div>
    )
}

export default Banner