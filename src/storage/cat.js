import create from "zustand"
import { persist } from "zustand/middleware"

let storeCat = (set) => ({
  cats: [],
  addCat: (newCat) =>
    set((state) => ({ 
      cats: [...state.cats, newCat] 
    })),
  
  rmCat: (id) => 
    set((state) => ({
      cats: state.cats.filter((cat) => cat.id !== id)
    })),

  updateCat: (data) =>
    set((state) => ({
      cats: state.cats.map(c => {
        if (c.id === data.id) {
          return {
            ...c,
            name: data.name,
            age: data.age,
            pastime: data.pastime
          }
        } else {
          return c
        }
      })
    }))
})

storeCat = persist(storeCat, { name: "cats-database" })

export const useCatStore = create(storeCat)