import './FormModal.css';
import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const FormModal = ({ card, categorias, aoCardEditado }) => {
    const [titulo, setTitulo] = useState(card?.titulo || '')
    const [categoria, setCategoria] = useState(card?.categoria || '')
    const [imagem, setImagem] = useState(card?.imagem || '')
    const [video, setVideo] = useState(card?.video || '')
    const [descricao, setDescricao] = useState(card?.descricao || '')

    const aoSalvar = async (evento) => {
        evento.preventDefault()

        const cardEditado = {
            ...card,
            titulo,
            categoria,
            imagem,
            video,
            descricao
        }

        aoCardEditado(cardEditado)
    }

    const aoLimpar = () => {
        setTitulo('')
        setCategoria('')
        setImagem('')
        setVideo('')
        setDescricao('')
    }

    return (
        <section className="form-modal">
            <form onSubmit={aoSalvar}>
                <h2>EDITAR CARD:</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Título"
                    placeholder="o que é javascript?"
                    valor={titulo}
                    aoAlterado={setTitulo}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Categoria"
                    itens={categorias}
                    valor={categoria}
                    aoAlterado={setCategoria}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="https://link-da-imagem"
                    valor={imagem}
                    aoAlterado={setImagem}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Vídeo"
                    placeholder="https://link-do-video"
                    valor={video}
                    aoAlterado={setVideo}
                />
                <CampoTexto
                    obrigatorio={false}
                    label="Descrição"
                    placeholder="descrição do vídeo"
                    valor={descricao}
                    aoAlterado={setDescricao}
                    tipo="textarea"
                />

                <div className='botoes-modal'>
                    <Botao
                        corTexto='#2271D1'
                        corBorda='#2271D1'
                        tipo='submit'
                        texto='GUARDAR'
                    />
                    <Botao
                        corTexto='#FFFFFF'
                        corBorda='#FFFFFF'
                        aoClicar={aoLimpar}
                        texto='LIMPAR'
                    />
                </div>
            </form>
        </section>
    )
}

export default FormModal