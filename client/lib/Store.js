// Store.js
import { create } from "zustand";

const useStore = create((set) => ({
  activeCard: "Contact",
  setActiveCard: (card) => set({ activeCard: card })
}));

export default useStore;
