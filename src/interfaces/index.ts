import exp from "constants";

export interface ISearchSystem {
  description?: string;
  acronym?: string;
  systemEmail?: string;
}

export interface ISystemContextProps {
  children: React.ReactNode;
}

export interface ISystem {
  description: string;
  acronym: string;
  systemEmail: string | null;
  url: string;
  id: string;
  status: string | null;
  updatedAt: Date | null;
  lastChangeUser: string | null;
  justificationChange: string | null;
}

export interface ISystemContext {
  systems: ISystem[] | null;
  setSystems: React.Dispatch<React.SetStateAction<ISystem[] | null >>;
  handleSearchData: (searchData: ISearchSystem) => void;
  createSystem: (data: ICreateSystem) => void
}

export interface ICardSystem {
  description: string,
  acronym: string,
  systemEmail: string | null,
  url: string | null
  status: string | null
}

export interface ICreateSystem {
  description: string;
  acronym: string;
  systemEmail?: string;
}