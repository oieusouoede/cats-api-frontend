import create from "zustand";
import { persist } from "zustand/middleware";

let storeCat = (set) => ({
  cats: [],
  addCat: (newCat) =>
    set((state) => ({ cats: [...state.cats, newCat] })),
});

storeCat = persist(storeCat, { name: "cats-database" });

export const useCatStore = create(storeCat);