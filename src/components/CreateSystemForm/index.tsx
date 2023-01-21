import { useForm } from "react-hook-form";
import { useSystemContext } from "../../contexts/SystemContext";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../Input/input.style";
import { Text } from "../../styles/typography";
import { Form } from "../Form/form.style";
import { FaFolderPlus, FaArrowLeft } from "react-icons/fa";
import * as S from "../SearchSystemForm/searchSystemForm.style";
import { createSystemSchema } from "../../schemas/createSystem.schema";
import { ICreateSystem } from "../../interfaces";
import { Container, FieldBox } from "../Container/container.style";

const CreateSystemForm = () => {
  const { createSystem, backToHome } = useSystemContext();

  const { register, handleSubmit} = useForm<ICreateSystem>();

  return (
    <Container>
      <Text tag={2} size="size1">
        Novo sistema
      </Text>
      <FieldBox>
        <Text tag={3} size="size2">
          Dasos do sistema
        </Text>
        <Form onSubmit={handleSubmit(createSystem)}>
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
          <label>
            URL:
            <Input type="text" {...register("url")} />
          </label>
          <S.BoxButtons content="space-between">
            <button onClick={backToHome}>
              <FaArrowLeft />
            </button>
            <button type="submit">
              Salvar <FaFolderPlus />
            </button>
          </S.BoxButtons>
        </Form>
      </FieldBox>
    </Container>
  );
};

export default CreateSystemForm;
