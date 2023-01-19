import { Route, Routes } from "react-router-dom";
import FindSystem from "../pages/FindSystem";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<FindSystem />} />
  </Routes>
);

export default MainRoutes;
