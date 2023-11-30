import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/images/FTA-logo.png";

const Navigation = () => {
  const STYLE = {
    nav: `fixed h-[80px] bg-[#1640D6] w-full flex justify-between items-center p-3`,
    logo: `w-[80px]`,
    mobile: `md:hidden z-10`,
    desktop: `hidden md:block`,
    ul: `flex gap-2`,
  };

  const [expandBurger, setExpandBurger] = useState(false);

  const closeMenu = () => {
    if (expandBurger === true) setExpandBurger(!expandBurger);
  };

  return (
    <nav className={STYLE.nav}>
      <div className={STYLE.logo}>
        <Link to="">
          <img src={Logo} alt="the logo of our app" />
        </Link>
      </div>

      {/* BURGER MENU */}
      <div
        className={STYLE.mobile}
        onClick={() => setExpandBurger(!expandBurger)}
      >
        {!expandBurger ? (
          <FaBars className="text-[#fafafa] text-4xl" />
        ) : (
          <FaTimes className="text-[#fafafa] text-4xl" />
        )}
      </div>

      {/* BURGER NAVIGATION MENU */}
      <ul
        className={
          !expandBurger
            ? "hidden"
            : "absolute top-[80px] left-0 w-full h-[200px] bg-[#1640D6] flex flex-col justify-center items-center"
        }
      >
        <li>
          <Link to="" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={closeMenu}>
            Login
          </Link>
        </li>
      </ul>

      {/* DESKTOP NAVIGATION MENU */}
      <div className={STYLE.desktop}>
        <ul className={STYLE.ul}>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
