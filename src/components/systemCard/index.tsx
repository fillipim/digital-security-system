import { ISystem } from "../../interfaces";
import { FaPenAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSystemContext } from "../../contexts/SystemContext";

const SystemCard = ({ system }: { system: ISystem }) => {
  const { setCurrentSystem } = useSystemContext();

  const navigate = useNavigate();

  const handleSystem = () => {
    setCurrentSystem(system)
    navigate("updateSystem")
  };
  return (
    <tr>
      <td>{system.description}</td>
      <td>{system.acronym}</td>
      <td>{system.systemEmail}</td>
      <td>{system.status}</td>
      <td>
        <button onClick={handleSystem}>
          <FaPenAlt />
        </button>
      </td>
    </tr>
  );
};

export default SystemCard;
