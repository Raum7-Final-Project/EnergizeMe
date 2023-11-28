import Footer from "../components/Footer";
import Header from "../components/Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
