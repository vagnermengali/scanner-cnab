import React from "react";

export interface IContextProps {
    file: null | any;
    setFile: React.Dispatch<React.SetStateAction<null | any>>;
    tab: number;
    setTab: React.Dispatch<React.SetStateAction<number>>;
    getAllRequest: () => void;
    getByStoreRquest: (store: any) => void;
    uploadFile: (file: any) => void;
    loading: boolean;
    data: any;
    setData: React.Dispatch<React.SetStateAction<any>>;
    dataByStore: any;
    store: string;
    setStore: React.Dispatch<React.SetStateAction<string>>;
    deleteByStoreRquest: () => void;
    totalValue: number;
}