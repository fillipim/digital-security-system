import { ICardSystem } from "../../interfaces";
import { FaPenAlt } from "react-icons/fa"


const SystemCard = ({description, status, systemEmail, acronym}: ICardSystem) => {
    return(
        <tr>
            <td>{description}</td>
            <td>{acronym}</td>
            <td>{systemEmail}</td>
            <td>{status}</td>
            <td><button><FaPenAlt/></button></td>
        </tr>
    )
};

export default SystemCard;