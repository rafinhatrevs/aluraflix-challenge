import './Modal.css';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { mostrarCategorias } from '../../conexaoApi';
import FormModal from '../FormModal';

const Modal = ({ visivel, card, aoFechar, aoCardEditado, aoLimpar }) => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        mostrarCategorias()
            .then((data) => setCategorias(data))
            .catch((error) => console.error("Erro ao buscar categorias: ", error))
    }, [])

    if (!visivel) return null

    return (
        <div className='modal'>
            <div className='conteudo'>
                <AiOutlineCloseCircle
                    className="fechar"
                    size={45}
                    onClick={aoFechar}
                />
                <FormModal
                    card={card}
                    categorias={categorias}
                    aoCardEditado={(cardEditado) => {
                        aoCardEditado(cardEditado)
                        aoFechar()
                    }}
                    aoLimpar={aoLimpar}
                />
            </div>
        </div>
    )
}

export default Modal