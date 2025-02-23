import PageLayout from "../components/PageLayout.js";

function CartPage() {
  const items = [];

  const subtotal =
    items instanceof Array
      ? items.reduce((total, item) => total + item.quantity * item.price, 0)
      : 0;
  const totalQty =
    items instanceof Array ? items.reduce((sum, i) => sum + i.quantity, 0) : 0;
  const tax = subtotal * 0.2; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <PageLayout
      titleFr={`Panier (${totalQty})`}
      titleEn={`Shopping Cart (${totalQty})`}
    >
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="cart-item-wrapper">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-text">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">{item.price.toFixed(2)}€</p>
              <div className="cart-item-buttons">
                <button
                  className="btn cart-item-edit-qty"
                  onClick={() => {}}
                >
                  -
                </button>
                <span className="cart-item-qty">{item.quantity}</span>
                <button
                  className="btn cart-item-edit-qty"
                  onClick={() => {}}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="btn cart-item-remove"
              onClick={() => {}}
            >
              Retirer
            </button>
          </div>
        ))
      ) : (
        <p>Votre panier est vide</p>
      )}
    </PageLayout>
  );
}

export default CartPage;
