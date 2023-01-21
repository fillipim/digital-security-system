import { Route, Routes } from "react-router-dom";
import CreateSystemForm from "../components/CreateSystemForm";
import SystemList from "../components/SystemList";
import UpdateSystemForm from "../components/UpdateSystemForm";
import Home from "../pages/home";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/" element={<SystemList/>}/>
      <Route path="createSystem" element={<CreateSystemForm/>} />
      <Route path="updateSystem" element={<UpdateSystemForm />} />
    </Route>
  </Routes>
);

export default MainRoutes;
