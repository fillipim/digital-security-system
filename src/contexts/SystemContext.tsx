import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  ICreateSystem,
  ISearchSystem,
  ISystem,
  ISystemContext,
  ISystemContextProps,
} from "../interfaces";
import { createSystemSchema } from "../schemas/createSystem.schema";
import api from "../services/api";

const SystemContext = createContext({} as ISystemContext);

const SystemProvider = ({ children }: ISystemContextProps) => {
  const [systems, setSystems] = useState<ISystem[] | null>(null);
  const [offset, setOffset] = useState<number | null>(0);

  const handleSearchData = async (searchData: ISearchSystem) => {
    const response = await api
      .get("/systems", { params: { ...searchData, offset: offset } })
      .then((res) => res.data)
      .catch((err) => err);

    if (response.length === 0) {
      toast.success(
        "Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa"
      );
    }

    setSystems(response);
  };

  const createSystem = async (data: ICreateSystem) => {
    await createSystemSchema
      .validate(data)
      .catch((err) => toast.error("Dados obrigatórios não informados."));

    try {
      await api.post("/systems", data);
      toast.success("Operação realizada com sucesso.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SystemContext.Provider value={{ systems, setSystems, handleSearchData , createSystem}}>
      {children}
    </SystemContext.Provider>
  );
};

export default SystemProvider;

export const useSystemContext = (): ISystemContext => {
  const context = useContext(SystemContext);
  return context;
};
