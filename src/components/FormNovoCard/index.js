import './FormNovoCard.css';
import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const FormNovoCard = ({ categorias, aoCardAdicionado }) => {
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoSalvar = async (evento) => {
        evento.preventDefault()

        const novoCard = {
            titulo,
            categoria,
            imagem,
            video,
            descricao
        }

        aoCardAdicionado(novoCard)
    }

    const aoLimpar = () => {
        setTitulo('')
        setCategoria('')
        setImagem('')
        setVideo('')
        setDescricao('')
    }

    return (
        <section className="form-novo-card">
            <form onSubmit={aoSalvar}>
                <div className='cabecalho-descricao'>
                    <h2>NOVO VÍDEO</h2>
                    <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
                </div>
                <h3>Criar Card</h3>
                <div className='grupo-horizontal'>
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
                </div>

                <div className='grupo-horizontal'>
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
                </div>

                <CampoTexto
                    obrigatorio={false}
                    label="Descrição"
                    placeholder="descrição do vídeo"
                    valor={descricao}
                    aoAlterado={setDescricao}
                    tipo="textarea"
                />

                <div className='botoes-novo-card'>
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

export default FormNovoCard