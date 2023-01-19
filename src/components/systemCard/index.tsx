import { ICardSystem, ISystem } from "../../interfaces";
import { FaPenAlt } from "react-icons/fa";

const SystemCard = ({ system }: {system: ISystem}) => {
  return (
    <tr>
      <td>{system.description}</td>
      <td>{system.acronym}</td>
      <td>{system.systemEmail}</td>
      <td>{system.status}</td>
      <td>
        <button>
          <FaPenAlt />
        </button>
      </td>
    </tr>
  );
};

export default SystemCard;
