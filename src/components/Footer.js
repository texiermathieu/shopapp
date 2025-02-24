import {useContext} from "react";
import ThemeContext from "../context/ThemeContext.js";
import LanguageContext from "../context/LanguageContext.js";

function Footer() {
  const {theme,setTheme} = useContext(ThemeContext)
  const {lang,setLang} = useContext(LanguageContext)
  const handleChangeLanguage = () => {

      setLang(lang === 'fr' ? 'en' : 'fr');

  };
  const handleToggleTheme = () => {

      setTheme(theme === 'light' ? 'dark' : 'light');


  };
  return (
    <footer>
      <div className="footer-lang-switcher">
        <span
          className={`footer-lang-switcher fr ${lang === "fr" && "active"}`}
          onClick={handleChangeLanguage}
        >
          FR
        </span>
        <span
          className={`footer-lang-switcher en ${lang === "en" && "active"}`}
          onClick={handleChangeLanguage}
        >
          EN
        </span>
      </div>
      <div className="footer-theme-switcher" onClick={handleToggleTheme}>
        Changer le thème
      </div>
    </footer>
  );
}

export default Footer;
