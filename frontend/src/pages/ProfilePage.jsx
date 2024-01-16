import axios from "axios";
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
const URL = "http://localhost:3333/api/users";

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
  const [selectedWorkoutsPerWeek, setSelectedWorkoutsPerWeek] = useState(0);
 /*  const [selectedBirthdate, setSelectedBirthdate] = useState("");
  const [selectedWeight, setSelectedWeight] = useState(""); */
  const [selectedFitnessGoal, setselectedFitnessGoal] = useState(null);
  const [selectedFitnessLevel, setselectedFitnessLevel] = useState(null);
  const [focusGoal, setFocusGoal] = useState(false);
  const [focusLevel, setFocusLevel] = useState(false);
  /* const [focusBirthdate, setFocusBirthdate] = useState(false);
  const [focusWeight, setFocusWeight] = useState(false); */
  const [focusWorkoutsPerWeek, setFocusWorkoutsPerWeek] = useState(
    Array(7).fill(false)
  );

  // die daten von dem Cookie lesen.
  useEffect(() => {
    const cookieValue = document.cookie

      .split("; ")
      .find((row) => row.startsWith("username="));
    console.log(cookieValue);
    console.log(document.cookie);

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
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Lese das Token-Cookie
    const tokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    const extractedToken = tokenCookie ? tokenCookie.split("=")[1] : null;
    setToken(extractedToken);
  }, []);

  const updateProfile = async () => {
    try {
      if (!token) {
        console.error("Token nicht gefunden");
        return;
      }

      const selectedData = {
        workoutsPerWeek: selectedWorkoutsPerWeek,
      /*   birthdate: selectedBirthdate,
        weight: selectedWeight, */
        fitnessGoal: selectedFitnessGoal,
        fitnessLevel: selectedFitnessLevel,
      };

      await axios.put(URL, selectedData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Profil erfolgreich aktualisiert");
    } catch (error) {
      console.error("Fehler:", error);
    }
  };
  const trainingGoals = [
    { text: "Abnehmen", icon: <HiOutlineScale className={STYLE.goalsIcons} /> },
    {
      text: "Straffen",
      icon: <HiOutlineSparkles className={STYLE.goalsIcons} />,
    },
    {
      text: "Muskelaufbau",
      icon: <HiOutlineFire className={STYLE.goalsIcons} />,
    },
    {
      text: "Beweglichkeit",
      icon: <HiArrowPath className={STYLE.goalsIcons} />,
    },
  ];

  const fitnessLevels = [
    {
      text: "Anfänger",
      icon: <HiOutlineChartBar className={STYLE.goalsIcons} />,
      description: "Sehr selten bis gar kein Sport",
    },
    {
      text: "Fortgeschrittener",
      icon: <HiOutlineChartBar className={STYLE.goalsIcons} />,
      description: "1-2 mal Sport die Woche",
    },
  ];

  const handleFitnessGoalClick = (goal) => {
    setselectedFitnessGoal(goal);
    setFocusGoal(true);
  };

  const handleFitnessLevelClick = (level) => {
    setselectedFitnessLevel(level);
    setFocusLevel(true);
  };
  const handleWorkoutsPerWeekClick = (count) => {
    const updatedFocus = focusWorkoutsPerWeek.map(
      (_, index) => index + 1 === count
    );
    setSelectedWorkoutsPerWeek(count);
    setFocusWorkoutsPerWeek(updatedFocus);
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
              {trainingGoals.map((goal, index) => (
                <button
                  key={index}
                  onClick={() => handleFitnessGoalClick(goal.text)}
                  className={`${STYLE.goalsLi} ${
                    selectedFitnessGoal === goal.text
                      ? "ring ring-[#C3C3B8] ring-offset-2"
                      : ""
                  }`}
                >
                  <li className={STYLE.goalsLi}>
                    {goal.icon}
                    <p className={STYLE.goalsText}>{goal.text}</p>
                  </li>
                </button>
              ))}
            </ul>
          </div>
        </div>

        {/* WIE FIT BIST DU? */}
        <div>
          <h4 className={STYLE.heading}>Dein Fitnesslevel?</h4>
          <div className={STYLE.sectionContainer}>
            <ul className="flex flex-col items-center gap-1">
              {fitnessLevels.map((level, index) => (
                <button
                  key={index}
                  onClick={() => handleFitnessLevelClick(level.text)}
                  className={`${STYLE.goalsLi} ${
                    selectedFitnessLevel === level.text
                      ? "ring ring-[#C3C3B8] ring-offset-2"
                      : ""
                  }`}
                >
                  <li className={STYLE.goalsLi}>
                    {level.icon}
                    <div className="flex flex-col">
                      <p className={STYLE.goalsText}>{level.text}</p>
                      <p className="text-xs">{level.description}</p>
                    </div>
                  </li>
                </button>
              ))}
            </ul>
          </div>
        </div>
        {/* WORKOUTS PRO WOCHE */}
        <div>
          <h4 className={STYLE.heading}>Workouts pro Woche</h4>
          <div className={STYLE.sectionContainer}>
            <ul className="grid grid-cols-7 items-center justify-items-center gap-5">
              {[1, 2, 3, 4, 5, 6, 7].map((count) => (
                <button
                  key={count}
                  onClick={() => handleWorkoutsPerWeekClick(count)}
                  className={`shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1 ${
                    selectedWorkoutsPerWeek === count ? "bg-[#C3C3B8]" : ""
                  } ${
                    focusWorkoutsPerWeek[count - 1]
                      ? "ring ring-[#C3C3B8] ring-offset-2"
                      : ""
                  }`}
                >
                  <li>{count}</li>
                </button>
              ))}
            </ul>
          </div>
        </div>

        {/* UPDATE KNOPF - SPEICHERT NEUE INFO */}
        <div className="text-center">
          <button
            className="border-2 border-[#C3C3B8] rounded-full px-2 text-[#C3C3B8] m-2 font-bold"
            onClick={updateProfile}
          >
            Update
          </button>
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
