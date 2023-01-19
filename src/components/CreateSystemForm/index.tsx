import { useForm } from "react-hook-form";

import { Input } from "../Input/input.style";
import { Text } from "../../styles/typography";

import { FaFolderPlus, FaArrowLeft } from "react-icons/fa";
import * as S from "../SearchSystemForm/searchSystemForm.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSystemSchema } from "../../schemas/createSystem.schema";
import { ICreateSystem } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { useSystemContext } from "../../contexts/SystemContext";

const CreateSystemForm = () => {

    const { createSystem } = useSystemContext()

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm<ICreateSystem>({
    resolver: yupResolver(createSystemSchema),
  });

  return (
    <S.Form onSubmit={handleSubmit(createSystem)}>
      <Text tag={2} size="size2">
        Novo Sistema
      </Text>
      <label>
        Descrição <span>*</span>:
        <Input type="text" {...register("description")} />
      </label>
      <label>
        Sigla <span>*</span>:
        <Input type="text" {...register("acronym")} />
      </label>
      <label>
        E-mail de atendimento do sistema:
        <Input type="text" {...register("systemEmail")} />
      </label>
      <S.BoxButtons content="space-between">
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <FaArrowLeft />
        </button>
        <button>
          Salvar <FaFolderPlus />
        </button>
      </S.BoxButtons>
    </S.Form>
  );
};

export default CreateSystemForm;
