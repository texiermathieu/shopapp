import useProductStore from "../store/productStore.ts";

function CartIcon({ setPage }) {
  const items = useProductStore((state) => state.cartItems);

  const handleGoToCart = () => {
    setPage("cart-page");
  };

  const itemsNumber = items && items.reduce((total, item) => total + item.quantity, 0);
  return (
    <button className="btn-cart" onClick={handleGoToCart}>
      Panier ({itemsNumber})
    </button>
  );
}

export default CartIcon;
