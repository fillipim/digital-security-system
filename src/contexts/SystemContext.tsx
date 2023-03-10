import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ICreateSystem,
  ISearchSystem,
  ISystem,
  ISystemContext,
  ISystemContextProps,
  ISystemResponse,
  IUpdateSystem,
} from "../interfaces";
import { createSystemSchema } from "../schemas/createSystem.schema";
import { updateSystemSchema } from "../schemas/updateSystem.schema";
import api from "../services/api";

const SystemContext = createContext({} as ISystemContext);

const SystemProvider = ({ children }: ISystemContextProps) => {
  const [systems, setSystems] = useState<ISystemResponse | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [currentSystem, setCurrentSystem] = useState<ISystem>({} as ISystem);
  const [searchData, setSearchData] = useState<ISearchSystem | null>(null);

  const navigate = useNavigate();

  const findSystems = async (_data: ISearchSystem) => {
    setSearchData(_data);
    try {
      const { data } = await api.get("/systems", {
        params: { ..._data, offset: offset },
      });
      if (data.systems.length === 0) {
        toast.success(
          "Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa"
        );
      }
      searchData && setSystems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    findSystems(searchData as ISearchSystem);
  }, [offset]);

  const createSystem = async (data: ICreateSystem) => {
    console.log(data);

    try {
      await createSystemSchema.validate(data);
      await api.post("/systems", data);
      toast.success("Operação realizada com sucesso.");
    } catch (error: any) {
      console.error(error);
      error = JSON.stringify(error);
      toast.error(JSON.parse(error).errors[0]);
    }
  };

  const updateSystem = async (payload: IUpdateSystem) => {
    try {
      await updateSystemSchema.validate({ ...payload, updatedAt: new Date() });

      await api.patch(`/systems/${currentSystem.id}`, payload);
      toast.success("Operação realizada com sucesso.");
    } catch (error: any) {
      console.error(error);
      error = JSON.stringify(error);
      toast.error(JSON.parse(error).errors[0]);
    }
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <SystemContext.Provider
      value={{
        systems,
        setSystems,
        createSystem,
        setCurrentSystem,
        currentSystem,
        updateSystem,
        backToHome,
        searchData,
        setSearchData,
        offset,
        setOffset,
        findSystems,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export default SystemProvider;

export const useSystemContext = (): ISystemContext => {
  const context = useContext(SystemContext);
  return context;
};
