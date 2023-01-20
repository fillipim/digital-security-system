import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ICreateSystem,
  ISearchSystem,
  ISystem,
  ISystemContext,
  ISystemContextProps,
  IUpdateSystem,
} from "../interfaces";
import {
  createSystemSchema,
  validateEmail,
} from "../schemas/createSystem.schema";
import { updateSystemSchema } from "../schemas/updateSystem.schema";
import api from "../services/api";

const SystemContext = createContext({} as ISystemContext);

const SystemProvider = ({ children }: ISystemContextProps) => {
  const [systems, setSystems] = useState<ISystem[] | null>(null);
  const [offset, setOffset] = useState<number >(0);
  const [currentSystem, setCurrentSystem] = useState<ISystem>({} as ISystem);
  const [searchData, setSearchData] = useState<ISearchSystem | null>(null)

  const navigate = useNavigate()

  const findSystems = async () => {
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

  useEffect(() => {
    findSystems()
  },[offset])

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

  const updateSystem = (payload: IUpdateSystem) => {
    updateSystemSchema
      .validate(payload)
      .catch((err) => toast.error("Dados obrigatórios não informados."));

    if (payload.systemEmail) {
      validateEmail
        .validate(payload.systemEmail)
        .catch((err) => toast.error("Email inválido!"));
    }

    api.patch(`/systems/${currentSystem.id}`, {
      ...payload,
      updatedAt: new Date(),
    });
  };

  const backToHome = () => {
    navigate("/")
  }

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
        findSystems
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
