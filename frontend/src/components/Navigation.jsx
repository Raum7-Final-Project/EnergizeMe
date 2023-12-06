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
    li: `flex flex-col items-center text-[#B1BDBD]`,
    icon: `text-[38px]`,
    link: `text-[12px]`,
  };

  return (
    <nav className={STYLE.nav}>
      {/* MOBILE NAVIGATION MENU */}
      <ul className={STYLE.ul}>
        <li className={STYLE.li}>
          <HiOutlineHome className={STYLE.icon} />
          <Link to="" className={STYLE.link}>
            Home
          </Link>
        </li>
        <li className={STYLE.li}>
          <HiOutlinePlayCircle className={STYLE.icon} />
          <Link to="/fitness" className={STYLE.link}>
            Fitness
          </Link>
        </li>
        <li className={STYLE.li}>
          <HiOutlinePresentationChartLine className={STYLE.icon} />
          <Link to="/progress" className={STYLE.link}>
            Fortschritt
          </Link>
        </li>
        <li className={STYLE.li}>
          <HiOutlineHeart className={STYLE.icon} />
          <Link to="/diet" className={STYLE.link}>
            Ernährung
          </Link>
        </li>
        <li className={STYLE.li}>
          <HiOutlineUserCircle className={STYLE.icon} />
          <Link to="/user" className={STYLE.link}>
            Profil
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
