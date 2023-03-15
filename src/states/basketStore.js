import { create } from "zustand";

const useBasketStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [item, ...state.items] })),
}));

export default useBasketStore;
