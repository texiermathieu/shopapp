import ProductsPage from "./pages/ProductsPage.js";
import CardPage from "./pages/CartPage.js";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import LoginPage from "./pages/LoginPage.js";
import { useState } from "react";
import ThemeContext from "./contexts/ThemeContext.js";

export default function App() {
  const [page, setPage] = useState("products-page");
  const [ theme, setTheme ] = useState("dark");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="app">
        <Header setPage={setPage} />
        <Main>
            {
            (page === "products-page" && <ProductsPage setPage={setPage} />) ||
            (page === "login-page" && <LoginPage />) ||
            (page === "cart-page" && <CardPage />)
          }
        </Main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
