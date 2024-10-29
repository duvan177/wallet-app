import { createUserApi } from "@/services/user";
import { useAlertStore } from "@/store/alert";
import { useSessionId } from "@/store/sessionId";
import { useState } from "react";

export function useUser () {
    const [messageError, setMessageError] = useState<string | null>(null);
    const [loadingService, setLoadingService] = useState<boolean>(false);
    const setAlert = useAlertStore((state) => state.setAlert);

    
    const createUser = async (params: {
        document: string;
        phone: string;
        name: string;
        email: string;
    }) => {
        setLoadingService(true);
        setMessageError(null);
    
        try {
        const { data } = await createUserApi(params);
        if (data.statusCode) {
            setAlert({
            status: true,
            type: "error",
            message: data.message || "Error al crear el usuario.",
            });
            return;
        }
    
        setAlert({
            status: true,
            type: "success",
            message: data.mensaje || "Usuario creado correctamente.",
        });
        } catch (error) {
        setMessageError("Error de red al crear el usuario.");
        } finally {
        setLoadingService(false);
        }
    };
    
    return {

        messageError,
        loadingService,
        createUser,
    };
}