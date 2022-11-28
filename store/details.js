import create from "zustand";
import { persist } from "zustand/middleware";
const useDetails = create(
  persist(
    (set, get) => ({
      store: {},
      categories: [],
      subcategories: [],
      setStore: (params) => set({ store: params }),
      setCategories: (params) => set({ categories: params }),
      setSubCategories: (params) => set({ subcategories: params }),
    }),
    {
      name: "details",
      getStorage: () => localStorage,
    }
  )
);
export default useDetails;
