import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { updateSystemSchema } from "../../schemas/updateSystem.schema";
import { useSystemContext } from "../../contexts/SystemContext";
import { IUpdateSystem } from "../../interfaces";

import { Input } from "../Input/input.style";
import { Text } from "../../styles/typography";
import * as S from "./updateSystemForm.style";
import { BoxButtons } from "../SearchSystemForm/searchSystemForm.style";
import { Container, FieldBox } from "../Container/container.style";
import {FaArrowLeft, FaFolderPlus} from "react-icons/fa"

const UpdateSystemForm = () => {
  const { currentSystem, updateSystem, backToHome } = useSystemContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateSystem>({
    resolver: yupResolver(updateSystemSchema),
  });

  return (
    <Container>
      <Text tag={2} size="size1">
        Manter Sistema
      </Text>
      <form onSubmit={handleSubmit(updateSystem)}>
        <FieldBox>
          <S.Box>
            <Text tag={3} size="size2">
              Dados do sistema
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
          </S.Box>
        </FieldBox>
        <FieldBox>
          <S.Box>
            <Text tag={3} size="size2">
              Controle do Sistema
            </Text>
            <label>
              Status
              <select {...register("status")}>
                <option value="ativo">Ativo</option>
                <option value="cancelado">Cancelado</option>
              </select>
            </label>
            <label>
              Usuário responsável pela ultima alteração:
              <Input
                placeholder={`${
                  currentSystem.lastChangeUser
                    ? currentSystem.lastChangeUser
                    : "Digite seu nome de usuário."
                }`}
                {...register("lastChangeUser")}
              />
            </label>
            <label>
              Data da ultima alteração:
              <Input placeholder={`${currentSystem.updatedAt}`} />
            </label>
            <S.TextAreaLabel>
              Justificativa da última alteração:
              <textarea
                placeholder={`${currentSystem.justificationChange}`}
                id=""
                cols={30}
                rows={10}
              ></textarea>
            </S.TextAreaLabel>
            <S.TextAreaLabel>
              Nova justificativa de alteração:
              <textarea
                {...register("justificationChange")}
                placeholder={`${currentSystem.justificationChange}`}
                id=""
                cols={30}
                rows={10}
              ></textarea>
            </S.TextAreaLabel>
          </S.Box>
        </FieldBox>
        <BoxButtons content="space-between">
            <button onClick={backToHome}>
              <FaArrowLeft />
            </button>
            <button>
              Salvar <FaFolderPlus />
            </button>
          </BoxButtons>
      </form>
    </Container>
  );
};

export default UpdateSystemForm;
