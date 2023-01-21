import { useSystemContext } from "../../contexts/SystemContext";
import { Container, FieldBox } from "../Container/container.style";
import FindSystemForm from "../SearchSystemForm";
import SystemCard from "../systemCard";
import * as S from "./systemList.style";
import { Text } from "../../styles/typography";
import Pagination from "../Pagination";

const SystemList = () => {
  const { systems, offset } = useSystemContext();
  
  return (
    <Container>
      <FindSystemForm />
      {systems && (
        <FieldBox>
          <Text tag={3} size="size2" color="#00b679">
            Resultados da Pesquisa
          </Text>
          <div>
            <S.Table>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Sigla</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                { systems.systems.map((system) => (
                  <SystemCard system={system} key={system.id} />
                ))}
              </tbody>
            </S.Table>
          </div>
          {systems.systems.length === 10 && <Pagination offset={offset} total={systems.total}/>}
        </FieldBox>
      )}
    </Container>
  );
};
export default SystemList;
