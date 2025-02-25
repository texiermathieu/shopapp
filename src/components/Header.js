import { useContext, useState } from "react";
import ReactLogo from "./logo.png"; // Import the image
import CartIcon from "./CartIcon.js";
import ThemeContext from "../contexts/ThemeContext.js";
import { useTheme } from "../contexts/ThemeContextHook.js";
import authStore from "../store/authStore.ts";
import useAuthStore from "../store/authStore.ts";

function Header({ setPage }) {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const logout = authStore(state => state.logout);
  const user = useAuthStore(state=> state.user);
  // const {theme} = useContext(ThemeContext);
  const { theme } = useTheme();
  const isAuthenticated = false;
  // const user = {};

  const handleToggleDropdown = () => {
    setIsDropDownOpen(!isDropdownOpen);
  };
  const handleLogin = () => {
    setIsDropDownOpen(false);
    setPage('login-page');
  };
  const handleLogout = () => {
 
  };
  const handleGoToHomePage = () => {
    setPage("products-page")
  };

  return (
    <header className={`header theme-${theme}`}>
      <div className="header-navbar">
        <div onClick={handleGoToHomePage}>
          <img className="header-logo" src={ReactLogo} alt="Reactlogo" />
          <span className="header-title">My Shop</span>
        </div>
        <div>
          <CartIcon setPage={setPage}/>

          {isAuthenticated ? (
            <div className="header-user-wrapper">
              <div className="header-user-label" onClick={handleToggleDropdown}>
                {`Bonjour ${user ? user.firstname : "Anonyme"}`}
              </div>
              {isDropdownOpen && (
                <div className="header-user-dropdown">
                  <button className="btn" onClick={handleLogout}>
                    Se déconnecter
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="btn" onClick={handleLogin}>
              Se connecter
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
