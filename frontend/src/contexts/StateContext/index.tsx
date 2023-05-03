import { createContext, useState} from "react";
import api from "../../services";
import { IContextProps } from "../../interfaces/IContextProps";
import { Children } from "../../interfaces/ChildrenProps";

export const StatesContext = createContext<IContextProps>({} as IContextProps)

export const StatesProvider = ({ children }: Children) => {
  const [file, setFile] = useState(null);
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);
  const [store, setStore] = useState("");
  const [dataByStore, setDataByStore] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalValue = () => dataByStore.map(item => item.value).reduce((acc, cur) => acc + cur, 0);

  const getAllRequest = () => {
    setLoading(true);
    api
      .get("transaction/")
      .then((response) => setData(response.data.results))
      .finally(() => setLoading(false));
  };
  const getByStoreRquest = (store: unknown) => {
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
  const uploadFile = (file: unknown) => {
    const formData = new FormData();
    formData.append("file", file[0]);
    setLoading(true);
    api
      .post(`/transaction/file-scan/`, formData)
      .then((response) => getAllRequest())
      .finally(() => setLoading(false));
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
