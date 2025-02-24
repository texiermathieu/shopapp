import { create, StateCreator } from 'zustand'
import ProductService from '../services/ProductService';
import useShopStore from './shopStore';

const produitsToDisplay = [
  {
    id: 1,
    title:
      "Fjallraven - Sac à dos Foldsack No. 1, peut contenir 15 ordinateurs portables",
    price: 109.95,
    description:
      "Votre sac parfait pour un usage quotidien et des promenades en forêt. Rangez votre ordinateur portable (jusqu'à 15 pouces) dans la housse rembourrée, votre quotidien",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "T-shirts slim fit décontractés pour hommes",
    price: 22.3,
    description:
      "Style ajusté, manches longues raglan contrastées, patte de boutonnage Henley à trois boutons, tissu léger et doux pour un port respirant et confortable. Et des chemises cousues solides avec un col rond conçues pour la durabilité et une coupe parfaite pour les vêtements de mode décontractés et les fans de baseball inconditionnels. L'encolure ronde de style Henley comprend une patte de boutonnage à trois boutons.",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
];

interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string
}

interface ProductState {
  products: Product[]
}

interface ProductActions {
  getProducts: () => Promise<void>
}

const useProductStore  = create<ProductState & ProductActions>()((set, get) => ({
  products: [],
  getProducts: async () => {
    // console.log("get", get())

    // Mettre isLoading à true
    useShopStore.getState().setIsLoading(true);

    // Effectuer un appel API pour aller chercher nos produits
    const productList = await ProductService.getProductsFromApi();

    // console.log("getProducts", productList);
    if(productList.lenght === 0 ){
      // useShopStore.getState().setMessage({
      //     'messageText' : "Erreur pendant le ca=hargement",
      //   'type' : 'error',
      // })
    }


    // Mettre loading à false
    // Mise à jour du store
    set({ products: productList })
    useShopStore.getState().setIsLoading(false);
  }
}))

export default useProductStore;
