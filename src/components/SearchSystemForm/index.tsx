import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSystemContext } from "../../contexts/SystemContext";
import { searchSystemSchema } from "../../schemas/searchSystems.schema";
import { ISearchSystem } from "../../interfaces";

import { Input } from "../Input/input.style";
import * as S from "./searchSystemForm.style";
import { Text } from "../../styles/typography";
import { FaSearch, FaTrash, FaFolderPlus} from "react-icons/fa";

const FindSystemForm = () => {
  const { handleSearchData, setSystems } = useSystemContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchSystem>({
    resolver: yupResolver(searchSystemSchema),
  });

  return (
    <S.Form onSubmit={handleSubmit(handleSearchData)}>
      <Text tag={2} size="size2">
        Filtros de Consulta
      </Text>
      <label>
        Descrição:
        <Input type="text" {...register("description")} />
      </label>
      <label>
        Sigla:
        <Input type="text" {...register("acronym")} />
      </label>
      <label>
        E-mail de atendimento do sistema:
        <Input type="text" {...register("systemEmail")} />
      </label>
      <S.BoxButtons>
        <button>
          Procurar <FaSearch />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setSystems([]);
          }}
        >
          Limpar
          <FaTrash />
        </button>
        <button>
          Novo Sistema <FaFolderPlus />
        </button>
      </S.BoxButtons>
    </S.Form>
  );
};

export default FindSystemForm;
