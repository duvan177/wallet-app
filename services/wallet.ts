import axios from "axios";
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});



export const getCurrentlyValueWalletApi = async ({
    document,
    phone,
    }: {
    document: string;
    phone: string;
}) => {
  try {
    const { data, status } = await api.post(
      "/wallet/balance", {
        document,
        phone,
      }
    );

    return {
      data:data,
      error: false,
    };
  } catch (error) {
    console.error(error);
    return {
      data: error,
        error: true
    };
  }
};

export const loadWalletApi = async ({
    document,
    phone,
    amount,
    }: {
    document: string;
    phone: string;
    amount: number;
}) => {
  try {
    const { data, status } = await api.post(
      "/wallet/load",
      {
        document,
        phone,
        amount,
      }
    );

    return {
      data:data,
      error: false,
    };
  } catch (error) {
    console.error(error);
    return {
      data: error,
    error: true
    };
  }
}

export const purchaseWalletApi = async ({
    document,
    phone,
    amount,
    }: {
    document: string;
    phone: string;
    amount: number;
}) => {
  try {
    const { data, status } = await api.post(
      "/transactions/purchase",
      {
        document,
        phone,
        amount,
      }
    );
    
    return { 
      data:data,
      error: false,
    };
  } catch (error) {
    console.error(error);
    return {
      data: error,
    error: true
    };
  }
}
export const confirmPaymentApi = async ({
    token,
    sessionId
    }: {
    token: string;
    sessionId: string | null;
}) => {
  try {
    const { data, status } = await api.post(
      "/transactions/confirm",
      {
        token,
        sessionId,
      }
    );

    return {
      data:data,
      error: false,
    };
  } catch (error) {
    console.error(error);
    return {
      data: error,
    error: true
    };
  }
}