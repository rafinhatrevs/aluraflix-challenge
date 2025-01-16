import './Cabecalho.css';
import { useNavigate } from 'react-router-dom';
import Botao from '../Botao';

const Cabecalho = () => {
    const navigate = useNavigate()

    const aoClicarHome = () => {
        navigate('/')
    }

    const aoClicarNovoVideo = () => {
        navigate('/novo-video')
    }

    return (
        <header className='cabecalho'>
            <img src='/imagens/logo.png' alt='Logotipo da AluraFlix.' />
            <nav className='botoes'>
                <Botao
                    corTexto='#2271D1'
                    corBorda='#2271D1'
                    aoClicar={aoClicarHome}
                    texto='HOME'
                />
                <Botao
                    corTexto='#FFFFFF'
                    corBorda='#FFFFFF'
                    aoClicar={aoClicarNovoVideo}
                    texto='NOVO VÍDEO'
                />
            </nav>
        </header>
    )
}

export default Cabecalho