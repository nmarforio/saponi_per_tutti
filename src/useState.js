import { create } from "zustand";

export const useOrderPayment = create((set) => ({
  order: {},
  createOrder: () =>
    set((state) => ({
      order: state.order,
    })),
}));
