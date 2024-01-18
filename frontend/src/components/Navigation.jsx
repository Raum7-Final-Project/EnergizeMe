import {
  HiOutlineHome,
  HiOutlinePlayCircle,
/*   HiOutlinePresentationChartLine, */
  HiOutlineHeart,
  HiOutlineUserCircle,
} from "react-icons/hi2";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  const STYLE = {
    nav: `h-[80px] w-full bottom-0 flex justify-center border-t-2`,
    ul: `grid grid-cols-4 items-center w-full`,
    li: `text-[#B1BDBD]`,
    icon: `text-[38px]`,
    link: `flex flex-col items-center text-[12px]`,
    // class for if link is active
    activeLink: `text-[#5a5c5c]`,
  };

  return (
    <nav className={STYLE.nav}>
      {/* MOBILE NAVIGATION MENU */}
      <ul className={STYLE.ul}>
        <li className={STYLE.li}>
          <NavLink
            to="/landing"
            className={({ isActive }) =>
              isActive ? `${STYLE.link} + ${STYLE.activeLink}` : `${STYLE.link}`
            }
          >
            <HiOutlineHome className={STYLE.icon} />
            Home
          </NavLink>
        </li>
        <li className={STYLE.li}>
          <NavLink
            to="/fitness"
            className={({ isActive }) =>
              isActive ? `${STYLE.link} + ${STYLE.activeLink}` : `${STYLE.link}`
            }
          >
            <HiOutlinePlayCircle className={STYLE.icon} />
            Fitness
          </NavLink>
        </li>
        {/* <li className={STYLE.li}>
          <NavLink
            to="/progress"
            className={({ isActive }) =>
              isActive ? `${STYLE.link} + ${STYLE.activeLink}` : `${STYLE.link}`
            }
          >
            <HiOutlinePresentationChartLine className={STYLE.icon} />
            Fortschritt
          </NavLink>
        </li> */}
        <li className={STYLE.li}>
          <NavLink
            to="/diet"
            className={({ isActive }) =>
              isActive ? `${STYLE.link} + ${STYLE.activeLink}` : `${STYLE.link}`
            }
          >
            <HiOutlineHeart className={STYLE.icon} />
            Ernährung
          </NavLink>
        </li>
        <li className={STYLE.li}>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive ? `${STYLE.link} + ${STYLE.activeLink}` : `${STYLE.link}`
            }
          >
            <HiOutlineUserCircle className={STYLE.icon} />
            Profil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
