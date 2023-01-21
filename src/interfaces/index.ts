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

export interface ISystemResponse {
  total: number,
  systems: ISystem[]
}

export interface ISystemContext {
  systems: ISystemResponse | null;
  setSystems: React.Dispatch<React.SetStateAction<ISystemResponse | null >>;
  createSystem: (data: ICreateSystem) => void;
  currentSystem: ISystem;
  setCurrentSystem: React.Dispatch<React.SetStateAction<ISystem>>;
  updateSystem: (payload: IUpdateSystem) => void;
  backToHome: () => void;
  searchData: ISearchSystem | null;
  setSearchData: React.Dispatch<React.SetStateAction<ISearchSystem | null>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  findSystems: (data: ISearchSystem) => void;
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
  systemEmail?: string | null;
  url?: string | null
}

export interface IUpdateSystem {
  description: string;
  acronym: string;
  systemEmail?: string | null;
  url?: string;
  status: string | null;
  lastChangeUser: string | null;
  justificationChange: string | null;
  updatedAt?: Date
}