import './Cabecalho.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Botao from '../Botao';

const Cabecalho = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const aoClicarHome = () => {
        navigate('/')
    }

    const aoClicarNovoVideo = () => {
        navigate('/novo-video')
    }

    const paginaHome = location.pathname === '/'
    const paginaNovoVideo = location.pathname === '/novo-video'

    return (
        <header className='cabecalho'>
            <img src='/images/logo.png' alt='Logotipo da AluraFlix.' />
            <nav className='botoes'>
                <Botao
                    corTexto={paginaHome ? '#2271D1' : '#FFFFFF'}
                    corBorda={paginaHome ? '#2271D1' : '#FFFFFF'}
                    aoClicar={aoClicarHome}
                    texto='HOME'
                />
                <Botao
                    corTexto={paginaNovoVideo ? '#2271D1' : '#FFFFFF'}
                    corBorda={paginaNovoVideo ? '#2271D1' : '#FFFFFF'}
                    aoClicar={aoClicarNovoVideo}
                    texto='NOVO VÍDEO'
                />
            </nav>
        </header>
    )
}

export default Cabecalho