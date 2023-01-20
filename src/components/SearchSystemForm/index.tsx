import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSystemContext } from "../../contexts/SystemContext";
import { searchSystemSchema } from "../../schemas/searchSystems.schema";
import { ISearchSystem } from "../../interfaces";

import { Input } from "../Input/input.style";
import * as S from "./searchSystemForm.style";
import { Text } from "../../styles/typography";
import { FaSearch, FaTrash, FaFolderPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Form } from "../Form/form.style";
import { FieldBox } from "../Container/container.style";
import { FormEvent } from "react";

const FindSystemForm = () => {
  const { setSystems, setSearchData, findSystems} = useSystemContext();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm<ISearchSystem>({
    resolver: yupResolver(searchSystemSchema),
  });

  const handleSearchData = (searchData: ISearchSystem) => {
    setSearchData(searchData)
    findSystems()
  }

  const clearSearchReult = (e: FormEvent) => {
    e.preventDefault()
    setSystems(null)
  }

  return (
    <>
      <Text tag={2} size="size1">
        Pesquisar Sistema
      </Text>
      <FieldBox>
        <Form onSubmit={handleSubmit(handleSearchData)}>
            <Text tag={3} size="size2">
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
            <S.BoxButtons content="end">
              <button>
                Procurar <FaSearch />
              </button>
              <button
                onClick={clearSearchReult}
              >
                Limpar
                <FaTrash />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/createSystem");
                }}
              >
                Novo Sistema <FaFolderPlus />
              </button>
            </S.BoxButtons>
        </Form>
      </FieldBox>
    </>
  );
};

export default FindSystemForm;
