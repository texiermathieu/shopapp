import { useState } from "react";
import ReactLogo from "./logo.png"; // Import the image
import CartIcon from "./CartIcon.js";

function Header() {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  const theme = "light";
  const isAuthenticated = false;
  const user = {};

  const handleToggleDropdown = () => {
    setIsDropDownOpen(!isDropdownOpen);
  };
  const handleLogin = () => {
    setIsDropDownOpen(false);
  };
  const handleLogout = () => {
 
  };
  const handleGoToHomePage = () => {

  };

  return (
    <header className={`header theme-${theme}`}>
      <div className="header-navbar">
        <div onClick={handleGoToHomePage}>
          <img className="header-logo" src={ReactLogo} alt="Reactlogo" />
          <span className="header-title">My Shop</span>
        </div>
        <div>
          <CartIcon />

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
