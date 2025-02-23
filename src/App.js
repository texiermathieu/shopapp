import ProductsPage from "./pages/ProductsPage.js";
import CardPage from "./pages/CartPage.js";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import LoginPage from "./pages/LoginPage.js";

export default function App() {
  const page = 'products-page';
  return (
    <div className="app">
      <Header />
      <Main>
          {
          (page === "products-page" && <ProductsPage/>) ||
          (page === "login-page" && <LoginPage />) ||
          (page === "cart-page" && <CardPage />)
        }
      </Main>
      <Footer />
    </div>
  );
}
