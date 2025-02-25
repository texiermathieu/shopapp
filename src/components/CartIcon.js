import useProductStore from "../store/productStore.ts";
function CartIcon({ setPage }) {
 // const items = [];

  const items = useProductStore(state => state.cartItems);
  // let quantity =  0;
  // cartItems.forEach(function(elem){
  //
  //     quantity = quantity + elem.quantity;
  //
  // })

  const handleGoToCart = () => {
    setPage("cart-page");
  };

  const itemsNumber = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <button className="btn-cart" onClick={handleGoToCart}>
      Panier ({itemsNumber})
    </button>
  );
}

export default CartIcon;
