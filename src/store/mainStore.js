import { create } from 'zustand'

const useMainStore = create((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
}))


export default useMainStore;