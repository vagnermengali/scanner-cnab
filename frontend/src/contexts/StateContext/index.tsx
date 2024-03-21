import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import api from "../../services";
import { IContextProps } from "../../interfaces/IContextProps";

interface StatesProviderProps {
  children: ReactNode;
}

export interface Transaction {
  id: number;
  value: number;
}

export const StatesContext = createContext<IContextProps>({} as IContextProps)

export const StatesProvider: React.FC<StatesProviderProps> = ({ children }) => {
  const [file, setFile] = useState<File | null>(null);
  const [tab, setTab] = useState<number>(0);
  const [data, setData] = useState<Transaction[]>([]);
  const [store, setStore] = useState<string>("");
  const [dataByStore, setDataByStore] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const totalValue = () => dataByStore.map(item => item.value).reduce((acc, cur) => acc + cur, 0);

  const getAllRequest = () => {
    setLoading(true);
    api
      .get("transaction/")
      .then((response) => setData(response.data.results))
      .finally(() => setLoading(false));
  };
  const getByStoreRquest = (store: string) => {
    setLoading(true);
    api
      .get(`transaction/store/${store}/`)
      .then((response) => setDataByStore(response.data))
      .finally(() => setLoading(false));
  };
  const deleteByStoreRquest = () => {
    setLoading(true);
    api
      .delete(`/transaction/delete/`)
      .then((response) => setData([]))
      .then((response) => getAllRequest())
      .finally(() => setLoading(false));
  };
  const uploadFile = (file: FileList | null) => {
    if (file && file.length > 0) {
      const formData = new FormData();
      formData.append("file", file[0]);
      setLoading(true);
      api
        .post(`/transaction/file-scan/`, formData)
        .then((response) => getAllRequest())
        .finally(() => setLoading(false));
    }
  };

  return (
    <StatesContext.Provider
      value={{
        file,
        setFile,
        tab,
        setTab,
        getAllRequest,
        getByStoreRquest,
        uploadFile,
        loading,
        data,
        setData,
        dataByStore,
        store,
        setStore,
        deleteByStoreRquest,
        totalValue,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};
