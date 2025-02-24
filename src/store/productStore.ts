import { create, StateCreator } from 'zustand'

interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string
}

interface ProductState {
  products: Product[]
}

interface ProductActions {
  getProducts: () => void
}
const productToDisplay:Product[] = [
  {
    id: 1,
    title: "Fjallraven - Sac à dos Foldsack No. 1, peut contenir 15 ordinateurs portables",
    price: 109.95,
    description: "Votre sac parfait pour un usage quotidien et des promenades en forêt. Rangez votre ordinateur portable (jusqu'à 15 pouces) dans la housse rembourrée, votre quotidien",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    title: "T-shirts slim fit décontractés pour hommes",
    price: 22.3,
    description: "Style ajusté, manches longues raglan contrastées, patte de boutonnage Henley à trois boutons, tissu léger et doux pour un port respirant et confortable. Et des chemises cousues solides avec un col rond conçues pour la durabilité et une coupe parfaite pour les vêtements de mode décontractés et les fans de baseball inconditionnels. L'encolure ronde de style Henley comprend une patte de boutonnage à trois boutons.",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    id: 3,
    title: "Veste en coton pour homme",
    price: 55.99,
    description: "superbes vestes d'extérieur pour le printemps/automne/hiver, adaptées à de nombreuses occasions, telles que le travail, la randonnée, le camping, l'escalade, le vélo, les voyages ou autres activités de plein air. Bon choix de cadeau pour vous ou un membre de votre famille. Un amour chaleureux au père, au mari ou au fils en ce jour de Thanksgiving ou de Noël.",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    id: 4,
    title: "Coupe slim décontractée pour hommes",
    price: 15.99,
    description: "La couleur peut être légèrement différente entre l'écran et la pratique. / Veuillez noter que les morphologies varient selon les personnes, par conséquent, les informations détaillées sur les tailles doivent être examinées ci-dessous dans la description du produit.",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
    id: 5,
    title: "Bracelet chaîne en or et argent Naga Dragon Station Legends pour femmes de John Hardy",
    price: 695,
    description: "De notre collection Legends, le Naga a été inspiré par le dragon d'eau mythique qui protège la perle de l'océan. Portez-le tourné vers l'intérieur pour recevoir amour et abondance, ou vers l'extérieur pour la protection.",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    id: 6,
    title: "Petite Micropave en or massif",
    price: 168,
    description: "Satisfaction garantie. Retournez ou échangez toute commande dans les 30 jours. Conçu et vendu par Hafeez Center aux États-Unis. Satisfaction garantie. Retournez ou échangez toute commande dans les 30 jours.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
  }
];
const useProductStore  = create<ProductState & ProductActions>()((set) => ({
  products: [],
  getProducts: () => {
    // Effectuer un appel API pour aller chercher nos produits

    // Mise à jour du store
    set((state) => ({ products: productToDisplay }))
  },
}))

export default useProductStore;
