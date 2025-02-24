import ProductsPage from "./pages/ProductsPage.js";
import CardPage from "./pages/CartPage.js";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import LoginPage from "./pages/LoginPage.js";
import {useEffect, useState} from "react";
import ThemeContext from "./contexts/ThemeContext.js";
import LanguageContext from "./contexts/LanguageContext.js";
import { ThemeProvider } from "./contexts/ThemeContextHook.js";
import Counter from "./components/Counter.js";
import {BounceLoader, DotLoader} from "react-spinners";
import useProductStore from "./store/productStore.ts";
import useShopStore from "./store/shopStore.ts";


export default function App() {
  const [page, setPage] = useState("products-page");
  // const [ theme, setTheme ] = useState("dark");
  const [ lang, setLang] = useState("fr");
  useEffect(function () {
    getProducts();
  }, []);
  // const [ isLoading,setIsLoading] = useState(false);
  const { products, getProducts } = useProductStore();
  const isLoading = useShopStore(state=>state.isLoading);
  return (
    <LanguageContext.Provider value={{lang, setLang}}>
      {/* <ThemeContext.Provider value={{theme, setTheme}}> */}
      <ThemeProvider>
        <div className="app">
          <Header setPage={setPage} />
          <Main>
            {/* <Counter /> */}
            { isLoading ? (<DotLoader  />) : (
                (page === "products-page" && <ProductsPage setPage={setPage} />) ||
                (page === "login-page" && <LoginPage />) ||
                (page === "cart-page" && <CardPage />)

            )}

          </Main>
          <Footer />
        </div>
      </ThemeProvider>
      {/* </ThemeContext.Provider> */}
    </LanguageContext.Provider>
  );
}
