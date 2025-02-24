import { create, StateCreator } from 'zustand'

interface shopStore {
    isLoading: boolean,
    setIsLoading : (value:boolean) => void
}



const useShopStore  = create<shopStore>((set) => ({
    isLoading : false,
    setIsLoading:  (value:boolean) =>  set({isLoading:value }),

}))

export default useShopStore;