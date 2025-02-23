function CartIcon() {
  const items = [];

  const handleGoToCart = () => {
  };

  const itemsNumber = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <button className="btn-cart" onClick={handleGoToCart}>
      Panier ({itemsNumber})
    </button>
  );
}

export default CartIcon;
