import Navigation from "./Navigation";

const Header = () => {
  const STYLE = {
    container: `h-[80px] top-0`,
  };

  return (
    <header className={STYLE.container}>
      <Navigation />
    </header>
  );
};

export default Header;
