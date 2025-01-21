import './Modal.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import FormModal from '../FormModal';
import useCategoriasContext from '../../hooks/useCategoriasContext';

const Modal = () => {
    const {
        categorias,
        cardSelecionado,
        modalVisivel,
        editarCard,
        fecharModal,
    } = useCategoriasContext()

    console.log("Modal visível?", modalVisivel);

    return modalVisivel ? (
        <>
            <div className="overlay-modal" onClick={fecharModal}></div>
            <div className='modal'>
                <div className='conteudo'>
                    <AiOutlineCloseCircle
                        className="fechar"
                        size={45}
                        onClick={fecharModal}
                    />
                    <FormModal
                        card={cardSelecionado}
                        categorias={categorias}
                        aoCardEditado={(cardEditado) => {
                            editarCard(cardEditado)
                            fecharModal()
                        }}
                    />
                </div>
            </div>
        </>
    ) : null
}

export default Modal