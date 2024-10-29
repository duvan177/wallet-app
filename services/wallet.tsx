import axios from "axios";
export const getCurrentlyValueWalletApi = async ({
    document,
    phone,
    }: {
    document: string;
    phone: string;
}) => {
  try {
    const { data, status } = await axios.post(
      "http://localhost:3001/api/v1/wallet/balance", {
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
    const { data, status } = await axios.post(
      "http://localhost:3001/api/v1/wallet/load",
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
    const { data, status } = await axios.post(
      "http://localhost:3001/api/v1/transactions/purchase",
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
    const { data, status } = await axios.post(
      "http://localhost:3001/api/v1/transactions/confirm",
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