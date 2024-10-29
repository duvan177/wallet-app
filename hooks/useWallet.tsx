import { confirmPaymentApi, getCurrentlyValueWalletApi, loadWalletApi, purchaseWalletApi } from "@/services/wallet";
import { useAlertStore } from "@/store/alert";
import { useSessionId } from "@/store/sessionId";
import { useState } from "react";

export function useWallet() {
  const [currentlyValue, setCurrentlyValue] = useState<number | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [loadingService, setLoadingService] = useState<boolean>(false);
  const setAlert = useAlertStore((state) => state.setAlert);
  const setSessionId = useSessionId((state) => state.setSessionId);
  const sessionId = useSessionId((state) => state.sessionId);

  const getCurrentlyValueWallet = async (params: {
    document: string;
    phone: string;
  }) => {
    setLoadingService(true);
    setMessageError(null);

    try {
      const { data } = await getCurrentlyValueWalletApi(params);
      if (data.statusCode) {
        setAlert({
          status: true,
          type: "error",
          message: data.message || "Error al obtener el saldo.",
        });
        setCurrentlyValue(null);
        return;
      }

      setCurrentlyValue(data.data.balance);
      setAlert({
        status: true,
        type: "success",
        message: data.mensaje || "Saldo obtenido correctamente.",
      });
    } catch (error) {
      setMessageError("Error de red al obtener el saldo.");
      setCurrentlyValue(null);
    } finally {
      setLoadingService(false);
    }
  };

  const loadWalletAmountApi = async (params: {
    document: string;
    phone: string;
    amount: number;
  }) => {
    setLoadingService(true);
    setMessageError(null);
    console.log(params);
    
    const { data } = await loadWalletApi(params);
    console.log(data);

    if (data.statusCode) {
      setAlert({
        status: true,
        type: "error",
        message: data.message || "Error al recargar el saldo.",
      });
      setLoadingService(false);
      return;
    }

    setAlert({
      status: true,
      type: "success",
      message: data.mensaje || "Saldo recargado correctamente.",
    });

    setLoadingService(false);
  };

  const purchaseWallet = async (params: {
    document: string;
    phone: string;
    amount: number;
  }) => {
    setLoadingService(true);
    setMessageError(null);

    try {
      const { data } = await purchaseWalletApi(params);
      if (data.statusCode) {
        setAlert({
          status: true,
          type: "error",
          message: data.message || "Error al pagar el saldo.",
        });
        setLoadingService(false);
        return;
      }
      setSessionId(data.data.sessionId);
      setAlert({
        status: true,
        type: "success",
        message: data.mensaje || "Saldo pagado correctamente.",
      });
      setLoadingService(false);

      
    } catch (error) {
      setMessageError("Error de red al pagar el saldo.");
      setLoadingService(false);
    }
  }


  const confirmPayment = async (params: {
    token: string;
  }) => {
    setLoadingService(true);
    setMessageError(null);

    try {
      const { data } = await confirmPaymentApi({...params, sessionId});
      if (data.statusCode) {
        setAlert({
          status: true,
          type: "error",
          message: data.message || "Error al confirmar el pago.",
        });
        setLoadingService(false);
        return;
      }

      setAlert({
        status: true,
        type: "success",
        message: data.mensaje || "Pago confirmado correctamente.",
      });
      setLoadingService(false);
    } catch (error) {
      setMessageError("Error de red al confirmar el pago.");
      setLoadingService(false);
    }

  }
  return {
    currentlyValue,
    getCurrentlyValueWallet,
    loadingService,
    messageError,
    loadWalletAmountApi,
    purchaseWallet,
    confirmPayment,
  };
}

