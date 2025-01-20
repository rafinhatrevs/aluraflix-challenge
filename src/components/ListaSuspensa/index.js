import './ListaSuspensa.css';
import { IoMdArrowDropdown } from "react-icons/io";

const ListaSuspensa = ({ label, valor, obrigatorio, itens, aoAlterado }) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <div className="itens">
                <select onChange={evento => aoAlterado(evento.target.value)} value={valor} required={obrigatorio}>
                    <option value=""></option>
                    {itens.map(item => <option key={item.id} value={item.nome}>
                        {item.nome}
                    </option>)}
                </select>
                <IoMdArrowDropdown size={25} className="icone-seta" />
            </div>
        </div>
    )
}

export default ListaSuspensa