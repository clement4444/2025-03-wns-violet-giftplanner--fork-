import { create } from "zustand";
import type { Users } from "../generated/graphql-types";

type State = {
    userProfil: null | Users;
    setUserProfil: (user: null | Users) => void;
    clearUserProfil: () => void;
};
export const useMyProfilStore = create<State>((set) => ({
    userProfil: null,
    setUserProfil: (newUser) => set(() => ({ userProfil: newUser })),
    clearUserProfil: () => set({ userProfil: null }),
}));

// export const userProfil = () => useUserStore((set) => set.user);
// export const setUserProfil = () => useUserStore((set) => set.setProfil);
// export const clearUserProfil = () => useUserStore((set) => set.logout);