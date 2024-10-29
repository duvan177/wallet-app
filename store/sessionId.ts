import { create, StoreApi, UseBoundStore } from "zustand";

type SessionId = {
  sessionId: string | null;
  setSessionId: (sessionId: string) => void;
};

export const useSessionId: UseBoundStore<StoreApi<SessionId>> = create((set) => ({
  sessionId: null,
  setSessionId: (sessionId) => set({ sessionId }),
}));
