import { useEffect } from "react";
import PageLayout from "../components/PageLayout.js";
import ProductCard from "../components/ProductCard.js";
import useProductStore from "../store/productStore.ts";


function ProductsPage({ setPage }) {
   const { products,getProducts } = useProductStore((state)=> state);

  // const{products,getProducts} = useProductStore((state)=>(
  //     {
  //       products :state.products,
  //       getProducts :state.getProducts,
  //     }
  // ));


  useEffect(function () {

    getProducts();
  }, []);
  

  const handleCartClick = (event) => {
    event.preventDefault();
    setPage("cart-page");
  };

  return (
    <PageLayout titleFr="Boutique" titleEn="Shop">
      <div className="products-page-wrapper">
        <h2 className="form-title">Sélectionnez votre produit</h2>
        <div className="products-wrapper">
          <div className="row">
            {products && products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
        <button className="btn product-page-button" onClick={handleCartClick}>
          Voir mon panier
        </button>
      </div>
    </PageLayout>
  );
}

export default ProductsPage;
