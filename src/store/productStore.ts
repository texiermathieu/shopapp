import {create, createStore, StateCreator} from 'zustand';

interface Product {
    id : string,
    titles : string,
    price: number,
    image: string
}



interface ProductState{
    products : Product[]
}

interface ProductAction{
    setProducts: () => void
}

const useProductStore  = create<ProductState & ProductAction>()((set) => ({
    products: [],
    setProducts: () => set((state) => ({ products: [] })),
}))


export default useProductStore;