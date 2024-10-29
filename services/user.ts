import axios from "axios";

export const createUserApi = async (params: {
    document: string;
    phone: string;
    name: string;
    email: string;
}) => {
    try {
        const { data } = await axios.post(
          "http://localhost:3001/api/v1/clients/register",
          params
        );

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
