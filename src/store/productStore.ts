import { create, StateCreator } from 'zustand'

interface Product {
  id: string,
  title: string,
  price: number,
  image: string
}

interface ProductState {
  products: Product[]
}

interface ProductActions {
  setProducts: () => void
}

const useProductStore  = create<ProductState & ProductActions>()((set) => ({
  products: [],
  setProducts: () => {
    // Effectuer un appel API pour aller chercher nos produits

    // Mise à jour du store
    set((state) => ({ products: [] }))
  },
}))

export default useProductStore;
