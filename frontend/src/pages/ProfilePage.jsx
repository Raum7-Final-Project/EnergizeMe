import {
  HiOutlineUserCircle,
  HiOutlineScale,
  HiOutlineSparkles,
  HiOutlineFire,
  HiArrowPath,
  HiOutlineChartBar,
} from "react-icons/hi2";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const STYLE = {
    container: `bg-white h-screen grid grid-rows-[50px_30px,150px,100px_repeat(4,_1fr)] gap-1 p-4 overflow-auto`,
    h2: `text-4xl text-center p-2 text-[#C3C3B8] font-bold`,
    headerContainer: `grid grid-cols-[_repeat(5,_1fr)] grid-rows-1 border-b-gray-300 border-b-2 text-xl text-bold  font-bold tracking-wide gap-4`,
    contentContainer: ``,
    profileImage: `row-start-3 flex justify-center`,
    heading: `text-center font-bold my-2`,
    sectionContainer: `bg-[#F2F2ED] p-4 rounded-lg`,
    goalsLi: `flex w-[280px] h-12 rounded-lg shadow  bg-white items-center`,
    goalsIcons: `w-[60px] text-2xl text-[#C3C3B8] mx-2`,
    goalsText: `text-start tracking-wide`,
  };

  const [activeTab, setActiveTab] = useState("profil");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // die daten von dem Cookie lesen.
  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("username="));

    if (cookieValue) {
      const [, storedUsername] = cookieValue.split("=");
      setUsername(storedUsername);
    }

    const emailValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("email="));

    if (emailValue) {
      const [, storedEmail] = emailValue.split("=");
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    // Lese das Token-Cookie
    const tokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));

    setIsLoggedIn(!!tokenCookie);
    //setIsLoggedIn(Boolean(tokenCookie));
  }, []);

  const handleLogout = () => {
    // Löschen von dem Token ,email und username
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //dann wird es zum login page navigiert
    navigate("/login");
  };

  return (
    <div className={STYLE.container}>
      <h2 className={STYLE.h2}>Account</h2>

      {/* NAVIGATION PROFILE => Profil | Allgemein */}
      <div className={STYLE.headerContainer}>
        <p
          className={
            activeTab == "profil"
              ? "border-b-[0.3rem] border-gray-300 b-[0.5rem]"
              : "text-[#C3C3B8]"
          }
          onClick={() => handleTab("profil")}
        >
          Profil
        </p>
        <p
          className={
            activeTab == "allgemein"
              ? "border-b-[0.3rem] border-gray-300"
              : "text-[#C3C3B8]"
          }
          onClick={() => handleTab("allgemein")}
        >
          Allgemein
        </p>
      </div>

      {/* PROFIL */}
      <div className={activeTab == "profil" ? "" : "hidden"}>
        {/* PROFILE PICTURE */}
        <div className={STYLE.profileImage}>
          <img src="" alt="" />
          <HiOutlineUserCircle className="text-[150px] text-[#bbb]" />
        </div>
        {/* CONTAINER USER NAME EMAIL ABMELDEN */}
        <div className="text-center">
          <p className="font-bold text-lg">{username}</p>
          <p className="text-[#777777]">{email}</p>
          <button
            onClick={isLoggedIn ? handleLogout : () => navigate("/login")}
            className="border-2 border-[#C3C3B8] rounded-full px-2 text-[#C3C3B8] m-2 font-bold"
          >
            {isLoggedIn ? "Abmelden" : "Login"}
          </button>
        </div>

        {/* EINZELNE SECTION */}
        {/* TRAININGSZIEL */}
        <div>
          <h4 className={STYLE.heading}>Was ist dein Trainingsziel?</h4>
          <div className={STYLE.sectionContainer}>
            <ul className="flex flex-col items-center gap-1">
               <button>
              <li className={STYLE.goalsLi}>
                <HiOutlineScale className={STYLE.goalsIcons} />
                <p className={STYLE.goalsText}>Abnehmen</p>
              </li>
               </button>
               <button>
              <li className={STYLE.goalsLi}>
                <HiOutlineSparkles className={STYLE.goalsIcons} />
                <p className={STYLE.goalsText}>Straffen</p>
              </li>
               </button>
               <button>
              <li className={STYLE.goalsLi}>
                <HiOutlineFire className={STYLE.goalsIcons} />
                <p className={STYLE.goalsText}>Muskelaufbau</p>
              </li>
               </button>
               <button>
              <li className={STYLE.goalsLi}>
                <HiArrowPath className={STYLE.goalsIcons} />
                <p className={STYLE.goalsText}>
                  Beweglichkeit
                  </p>
              </li>
               </button>
            </ul>
          </div>
        </div>

        {/* WIE FIT BIST DU? */}
        <div>
          <h4 className={STYLE.heading}>Wie fit bist du?</h4>
          <div className={STYLE.sectionContainer}>
            <ul className="flex flex-col items-center gap-1">
              <button>
              <li className={STYLE.goalsLi}>
                <HiOutlineChartBar className={STYLE.goalsIcons} />
                <div className="flex flex-col">
                  <p className={STYLE.goalsText}>Nicht so fit</p>
                  <p className="text-xs">Sehr selten bis garkein Sport</p>
                </div>
              </li>
              </button>
              <button>
              <li className={STYLE.goalsLi}>
                <HiOutlineChartBar className={STYLE.goalsIcons} />
                <div className="flex flex-col">
                  <p className={STYLE.goalsText}>Relativ fit</p>
                  <p className="text-xs">1-2 mal Sport die Woche</p>
                </div>
              </li>
              </button>
              <button>
              <li className={STYLE.goalsLi}>
                <HiOutlineChartBar className={STYLE.goalsIcons} />
                <div className="flex flex-col">
                  <p className={STYLE.goalsText}>Super fit</p>
                  <p className="text-xs">Mehr als 2 mal Sport die Woche</p>
                </div>
              </li>
              </button>
            </ul>
          </div>
        </div>

        {/* WORKOUTS PRO WOCHE */}
        <div>
          <h4 className={STYLE.heading}>Workouts pro Woche</h4>
          <div className={STYLE.sectionContainer}>
            <ul className="grid grid-cols-7 items-center justify-items-center gap-5">
              <button>

              <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
                1
              </li>
              </button>
              <button>
              <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
                2
              </li>
              </button>
              <button>
              <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
                3
              </li>
              </button>
              <button>
              <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
                4
              </li>
              </button>
              <button>
              <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
                5
              </li>
              
              </button>
              <button>
              <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
                6
              </li>
              </button>
              <button>
              <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
                7
              </li>
              </button>
            </ul>
          </div>
        </div>

        {/* FITNESSPROFIL */}
        <div>
          <h4 className={STYLE.heading}>Dein persönliches Fitnessprofil</h4>
          <div className={STYLE.sectionContainer}>
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
              <label htmlFor="">Geburtsdatum</label>
              <input type="date" />
              <label htmlFor="">Gewicht</label>
              <input type="text" placeholder="70.5 kg" className="" />
            </div>
          </div>
        </div>
      </div>

      {/* ALLGEMEIN */}
      <div className={activeTab == "allgemein" ? "" : "hidden"}>
        <div className="my-4">
          <p className="font-bold text-lg">Einstellungen</p>
          <p className="font-bold text-lg">FAQ</p>
          <p className="font-bold text-lg">Contact</p>
          <p className="font-bold text-lg">Abmelden</p>
        </div>
      </div>
      
    </div>
  );
};

export default ProfilePage;
