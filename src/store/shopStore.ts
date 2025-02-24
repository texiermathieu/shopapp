import { create } from 'zustand'
import Message from "../components/Message";

interface Message {
    messageText : string,
    type: "error" | "info"
}

interface ShopStore {
    isLoading: boolean,
    setIsLoading: (value: boolean) => void
    message?: {
        messageText : string,
        type: "error" | "info"
    },
    setMessage: (message: Message) => void
}

const useShopStore = create<ShopStore>((set) => ({
  isLoading: false,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
    message: undefined,
    setMessage: (newMessage:Message) => set({ message: newMessage  }),
}))

export default useShopStore;
