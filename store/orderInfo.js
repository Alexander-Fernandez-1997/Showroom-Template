import create from "zustand";
import { persist } from "zustand/middleware";

// {shipping_address, billing_adress,  providert } = order
// shipping_address is a form , billing_address is a form  provider is a provider , the three other are objects saved with useState

const useOrderInfo = create(
  persist(
    (set, get) => ({
      shipping_address: {},
      billing_address: {},
      provider: {},
      setShippingAddress: (params) => set({ shipping_address: params }),
      setBillingAddress: (params) => set({ billing_address: params }),
      setProvider: (params) => set({ provider: params }),
    }),
    {
      name: "orderInfo",
      getStorage: () => localStorage,
    }
  )
);
export default useOrderInfo;
