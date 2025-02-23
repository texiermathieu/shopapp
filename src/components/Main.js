const Main = ({ children }) => {
  const theme = "light";
  return <main className={`main theme-${theme}`}>{children}</main>;
};

export default Main;
