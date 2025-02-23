function Footer() {
  const lang = "fr";
  const handleChangeLanguage = () => {};
  const handleToggleTheme = () => {};
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
