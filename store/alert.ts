import { create, StoreApi, UseBoundStore } from "zustand";
type AlertStore = {
  alert: {
    status: boolean;
    type: "success" | "error" | "warning" | "info";
    message: string;
  };
  setAlert: ({ status, type, message }: { status: boolean; type: "success" | "error" | "warning" | "info"; message: string }) => void;
 
};

export const useAlertStore: UseBoundStore<StoreApi<AlertStore>> = create((set) => ({
  alert: {
    status: false,
    type: "success",
    message: "",
  },
  setAlert: ({ status, type, message }) => set({ alert: { status, type, message } }),


}));
