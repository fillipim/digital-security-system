import { Outlet } from "react-router-dom";
import FindSystemForm from "../../components/SearchSystemForm/";
import SystemCard from "../../components/systemCard";
import { useSystemContext } from "../../contexts/SystemContext";
import * as S from "./style";

const Home = () => {
  const { systems } = useSystemContext();
  
  return (
    <S.Main>
      {/* <FindSystemForm />
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
                system={system}
                key={system.id}
              />
            ))}
          </tbody>
        </S.Table>
      )} */}
      <Outlet/>
    </S.Main>
  );
};

export default Home;
