import create from "zustand"
import { persist } from "zustand/middleware"

let storeCat = (set) => ({
  cats: [],
  addCat: (newCat) =>
    set((state) => ({ cats: [...state.cats, newCat] })),
  
  rmCat: (id) => 
    set((state) => ({
      cats: state.cats.filter((cat) => cat.id !== id)
    }))
})

storeCat = persist(storeCat, { name: "cats-database" })

export const useCatStore = create(storeCat);