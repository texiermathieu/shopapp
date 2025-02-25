import {create, StateCreator} from 'zustand';

interface Adresse{
    firstLine: string,
    postCode: string,
    city: string
}


interface User{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    adress?: Adresse
}


interface AuthState {
    isAuthenticated: boolean,
    token?: string,
    user?: User
}

interface AuthAction{
    login: (email: string,password:string) => Promise<void>,
    logout: () => void
}


const AuthStore: StateCreator<AuthState & AuthAction , [['zustand/devtools',never]]> = (set,get) => ({
    isAuthenticated: false,
    token: undefined,
    user: undefined,
    login: (email:string,password: string)  => {

    },
    logout : () => {

    }
})

const useAuthStore = create<AuthStore & AuthAction>
