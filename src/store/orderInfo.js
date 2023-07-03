import create from "zustand";
import { persist } from "zustand/middleware";

const useOrderInfo = create(
  persist(
    (set, get) => ({
      shipping_address: {},
      billing_address: {},
      provider: {},
      setShippingAddress: (params) => set({ shipping_address: params }),
      setBillingAddress: (params) => set({ billing_address: params }),
      setProvider: (params) => set({ provider: params }),
      reset: () =>
        set({ shipping_address: {}, billing_address: {}, provider: {} }),
    }),
    {
      name: "orderInfo",
      getStorage: () => localStorage,
    }
  )
);

export default useOrderInfo;
