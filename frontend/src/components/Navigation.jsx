import {
  HiOutlineHome,
  HiOutlinePlayCircle,
  HiOutlinePresentationChartLine,
  HiOutlineHeart,
  HiOutlineUserCircle,
} from "react-icons/hi2";

import { Link } from "react-router-dom";

const Navigation = () => {
  const STYLE = {
    nav: `h-[80px] w-full bottom-0 flex justify-center border-t-2`,
    ul: `grid grid-cols-5 items-center w-full`,
    li: `text-[#B1BDBD]`,
    icon: `text-[38px]`,
    link: `flex flex-col items-center text-[12px]`,
  };

  return (
    <nav className={STYLE.nav}>
      {/* MOBILE NAVIGATION MENU */}
      <ul className={STYLE.ul}>
        <li className={STYLE.li}>
        <Link to="/landing" className={STYLE.link}>
          <HiOutlineHome className={STYLE.icon} />
            Home
          </Link>
        </li>
        <li className={STYLE.li}>
        <Link to="/fitness" className={STYLE.link}>
          <HiOutlinePlayCircle className={STYLE.icon} />
            Fitness
          </Link>
        </li>
        <li className={STYLE.li}>
          <Link to="/progress" className={STYLE.link}>
          <HiOutlinePresentationChartLine className={STYLE.icon} />
            Fortschritt
          </Link>
        </li>
        <li className={STYLE.li}>
          <Link to="/diet" className={STYLE.link}>
          <HiOutlineHeart className={STYLE.icon} />
            Ernährung
          </Link>
        </li>
        <li className={STYLE.li}>
          <Link to="/user" className={STYLE.link}>
          <HiOutlineUserCircle className={STYLE.icon} />
            Profil
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
