import FindSystemForm from "../../components/SearchSystemForm/";
import SystemCard from "../../components/systemCard";
import { useSystemContext } from "../../contexts/SystemContext";
import * as S from "./style";

const FindSystem = () => {
  const { systems } = useSystemContext();
  
  return (
    <S.Main>
      <FindSystemForm />
      {systems && (
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
            {systems.map((system) => (
              <SystemCard
                description={system.description}
                acronym={system.acronym}
                systemEmail={system.systemEmail}
                status={system.status}
                url={system.url}
                key={system.id}
              />
            ))}
          </tbody>
        </S.Table>
      )}
    </S.Main>
  );
};

export default FindSystem;
