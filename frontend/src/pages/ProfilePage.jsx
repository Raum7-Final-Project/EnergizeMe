import { useTranslation } from "react-i18next";

import {
  HiOutlineUserCircle,
  HiOutlineScale,
  HiOutlineSparkles,
  HiOutlineFire,
  HiArrowPath,
  HiOutlineChartBar,
} from "react-icons/hi2";

const ProfilePage = () => {
  const STYLE = {
    container: `bg-white h-screen grid grid-rows-[50px_30px,150px,100px_repeat(4,_1fr)] gap-1 p-5 overflow-auto`,
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
  const { t } = useTranslation("common");
  return (
    <div className={STYLE.container}>
      <h2 className={STYLE.h2}>{t("profilePage.siteTitle")}</h2>

      {/* NAVIGATION PROFILE => Profil | Allgemein */}
      <div className={STYLE.headerContainer}>
        <p className="text-black">{t("profilePage.tab_profile")}</p>
        <p className="text-[#C3C3B8]">{t("profilePage.tab_general")}</p>
      </div>
      {/* PROFILE PICTURE */}
      <div className={STYLE.profileImage}>
        <img src="" alt="" />
        <HiOutlineUserCircle className="text-[150px] text-[#bbb]" />
      </div>
      {/* CONTAINER USER NAME EMAIL ABMELDEN */}
      <div className="text-center">
        <p className="font-bold text-lg">{t("profilePage.label_userName")}</p>
        <p className="text-[#777777]">example@mail.com</p>
        <button className="border-2 border-[#C3C3B8] rounded-full px-2 text-[#C3C3B8] m-2 font-bold">
          {t("profilePage.btn_logout")}
        </button>
      </div>

      {/* EINZELNE SECTION */}
      {/* TRAININGSZIEL */}
      <div>
        <h4 className={STYLE.heading}>
          {t("profilePage.goals.text_yourGoal")}
        </h4>
        <div className={STYLE.sectionContainer}>
          <ul className="flex flex-col items-center gap-1">
            <li className={STYLE.goalsLi}>
              <HiOutlineScale className={STYLE.goalsIcons} />
              <p className={STYLE.goalsText}>
                {t("profilePage.goals.goal_lossWeight")}
              </p>
            </li>
            <li className={STYLE.goalsLi}>
              <HiOutlineSparkles className={STYLE.goalsIcons} />
              <p className={STYLE.goalsText}>
                {t("profilePage.goals.goal_tighten_up")}
              </p>
            </li>
            <li className={STYLE.goalsLi}>
              <HiOutlineFire className={STYLE.goalsIcons} />
              <p className={STYLE.goalsText}>
                {t("profilePage.goals.goal_muscle_building")}
              </p>
            </li>
            <li className={STYLE.goalsLi}>
              <HiArrowPath className={STYLE.goalsIcons} />
              <p className={STYLE.goalsText}>
                {t("profilePage.goals.goal_agility")}
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* WIE FIT BIST DU? */}
      <div>
        <h4 className={STYLE.heading}>
          {t("profilePage.fitnessLevel.label_howFit")}
        </h4>
        <div className={STYLE.sectionContainer}>
          <ul className="flex flex-col items-center gap-1">
            <li className={STYLE.goalsLi}>
              <HiOutlineChartBar className={STYLE.goalsIcons} />
              <div className="flex flex-col">
                <p className={STYLE.goalsText}>
                  {t("profilePage.fitnessLevel.label_not-so-fit")}
                </p>
                <p className="text-xs">
                  {t("profilePage.fitnessLevel.desc_not-so-fit")}
                </p>
              </div>
            </li>
            <li className={STYLE.goalsLi}>
              <HiOutlineChartBar className={STYLE.goalsIcons} />
              <div className="flex flex-col">
                <p className={STYLE.goalsText}>
                  {t("profilePage.fitnessLevel.label_relative-fit")}
                </p>
                <p className="text-xs">
                  {t("profilePage.fitnessLevel.desc_relative-fit")}
                </p>
              </div>
            </li>
            <li className={STYLE.goalsLi}>
              <HiOutlineChartBar className={STYLE.goalsIcons} />
              <div className="flex flex-col">
                <p className={STYLE.goalsText}>
                  {t("profilePage.fitnessLevel.label_super-fit")}
                </p>
                <p className="text-xs">
                  {t("profilePage.fitnessLevel.desc_super-fit")}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* WORKOUTS PRO WOCHE */}
      <div>
        <h4 className={STYLE.heading}>
          {t("profilePage.label_workoutsPerWeek")}
        </h4>
        <div className={STYLE.sectionContainer}>
          <ul className="grid grid-cols-7 items-center justify-items-center gap-5">
            <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
              1
            </li>
            <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
              2
            </li>
            <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
              3
            </li>
            <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
              4
            </li>
            <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
              5
            </li>
            <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
              6
            </li>
            <li className="shadow w-10 h-10 rounded-full bg-white text-2xl text-center text-[#C3C3B8] p-1">
              7
            </li>
          </ul>
        </div>
      </div>

      {/* FITNESSPROFIL */}
      <div>
        <h4 className={STYLE.heading}>
          {t("profilePage.personalInformation.label_infoAboutYou")}
        </h4>
        <div className={STYLE.sectionContainer}>
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <label htmlFor="">
              {t("profilePage.personalInformation.label_birthday")}
            </label>
            <input type="date" />
            <label htmlFor="">
              {t("profilePage.personalInformation.label_weight")}
            </label>
            <input type="text" placeholder="70.5 kg" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
