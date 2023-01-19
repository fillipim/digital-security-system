import React, { createContext, useContext, useState, useEffect } from "react";
import {
  ISearchSystem,
  ISystem,
  ISystemContext,
  ISystemContextProps,
} from "../interfaces";
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

      console.log(response);
      
    setSystems(response);
  };

  return (
    <SystemContext.Provider
      value={{ systems, setSystems, handleSearchData, }}
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
