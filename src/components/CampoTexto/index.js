import './CampoTexto.css';

const CampoTexto = ({ label, valor, obrigatorio, placeholder, aoAlterado, tipo = 'input' }) => {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            {tipo === 'textarea'
                ? (
                    <textarea
                        value={valor}
                        onChange={aoDigitado}
                        required={obrigatorio}
                        placeholder={placeholder}
                    />
                )
                : (
                    <input
                        value={valor}
                        onChange={aoDigitado}
                        required={obrigatorio}
                        placeholder={placeholder}
                    />
                )
            }
        </div>
    )
}

export default CampoTexto