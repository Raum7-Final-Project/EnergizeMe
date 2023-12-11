import { useState } from "react";

const ProgressPage = () => {
  const STYLE = {
    container: `bg-white h-screen grid grid-rows-[50px_30px,1fr] gap-1 p-4 overflow-auto`,
    h2: `text-4xl text-center p-2 text-[#C3C3B8] font-bold`,
    headerContainer: `grid grid-cols-[_repeat(5,_1fr)] grid-rows-1 border-b-gray-300 border-b-2 text-xl text-bold  font-bold tracking-wide gap-4`,

  };

  const [activeTab, setActiveTab] = useState("erfolge");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={STYLE.container}>
      <h2 className={STYLE.h2}>Account</h2>

      {/* NAVIGATION PROFILE => Erfolge | Verlauf */}
      <div className={STYLE.headerContainer}>
        <p
          className={
            activeTab == "erfolge"
              ? "border-b-[0.3rem] border-gray-300 b-[0.5rem]"
              : "text-[#C3C3B8]"
          }
          onClick={() => handleTab("erfolge")}
        >
          Erfolge
        </p>
        <p
          className={
            activeTab == "verlauf"
              ? "border-b-[0.3rem] border-gray-300"
              : "text-[#C3C3B8]"
          }
          onClick={() => handleTab("verlauf")}
        >
          Verlauf
        </p>
      </div>

      {/* PROFIL */}
      <div className={activeTab == "erfolge" ? "" : "hidden"}>
      <div className="">
          <p className="font-bold text-lg">Erfolge</p>


        </div>
      </div>

      {/* ALLGEMEIN */}
      <div className={activeTab == "verlauf" ? "" : "hidden"}>
        <div className="">
          <p className="font-bold text-lg">Verlauf</p>


        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
