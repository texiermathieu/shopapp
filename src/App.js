import ProductsPage from "./pages/ProductsPage.js";
import CardPage from "./pages/CartPage.js";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import LoginPage from "./pages/LoginPage.js";
import {useState} from "react";
import ThemeContext from "./context/ThemeContext.js";
import LanguageContext from "./context/LanguageContext.js";
import Counter from "./components/Counter.js";

export default function App() {
  // const page = 'products-page';
  const [page,setPage] = useState("products-page");
  const [theme,setTheme] = useState("dark");
  const [lang,setLang] = useState("fr");
  return (

      <LanguageContext.Provider value={{lang,setLang}}>
      <ThemeContext.Provider value={{theme,setTheme}}>
    <div className="app">
      <Header setPage={setPage}/>
      <Main >
        <Counter />
          {
          (page === "products-page" && <ProductsPage setPage={setPage}/>) ||
          (page === "login-page" && <LoginPage />) ||
          (page === "cart-page" && <CardPage />)
        }
      </Main>
      <Footer />
    </div>
      </ThemeContext.Provider>
      </LanguageContext.Provider>
  );
}
