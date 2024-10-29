import axios from "axios";
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUserApi = async (params: {
    document: string;
    phone: string;
    name: string;
    email: string;
}) => {
    try {
        const { data } = await api.post("/clients/register", params);

        return {
            data: data,
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
