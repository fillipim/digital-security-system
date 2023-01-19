import { Route, Routes } from "react-router-dom";
import CreateSystem from "../pages/CreateSystem";
import FindSystem from "../pages/FindSystem";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<FindSystem/>} />
    <Route path="/createSystem" element={<CreateSystem/>}/>
  </Routes>
);

export default MainRoutes;
