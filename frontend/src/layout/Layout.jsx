// import Footer from "../components/Footer";
import Header from "../components/Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {

  return (
    <>
      <main>{children}</main>
      <Header />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
