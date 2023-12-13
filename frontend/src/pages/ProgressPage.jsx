import { useState } from "react";

import ExampleImage1 from "../assets/images/exampleImageDurmus1.jpg";

const ProgressPage = () => {
  const STYLE = {
    container: `bg-[#F2F2ED] h-screen grid grid-rows-[50px_30px,1fr] gap-1 p-4 overflow-auto`,
    h2: `text-4xl text-center p-2 text-[#C3C3B8] font-bold`,
    headerContainer: `grid grid-cols-[_repeat(5,_1fr)] grid-rows-1 border-b-gray-300 border-b-2 text-xl text-bold font-bold tracking-wide gap-4`,
  };

  const [activeTab, setActiveTab] = useState("erfolge");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={STYLE.container}>
      <h2 className={STYLE.h2}>Fortschritt</h2>

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

      {/* ERFOLGE */}
      <div className={activeTab == "erfolge" ? "" : "hidden"}>
        <div className="grid grid-rows-2">
          {/* TOTAL WORKOUTS */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="my-4">
              <p className="text-8xl">3</p>
              <p className="text-[#777777]">Total Workouts</p>
            </div>

            <div className="my-4">
              <p className="text-5xl text-[#7A8F8F]">123</p>
              <p className="text-[#777777]">Total Minutes</p>
            </div>
          </div>

          {/* METRIKEN */}
          <div className="grid grid-rows-[30px,1fr]">
            <h2 className="font-bold">Metriken</h2>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="bg-white p-3 h-[130px] rounded-lg grid grid-rows-[20px,1fr,20px]">
                <p className="text-[#7A8F8FCC] text-lg">Gewicht</p>
                <p className="text-3xl flex items-center font-bold">72,5kg</p>
                <p className="text-sm">29 NOV. 2023</p>
              </div>

              <div className="bg-white p-3 h-[130px] rounded-lg grid grid-rows-[20px,1fr,20px]">
                <p className="text-[#7A8F8FCC] text-lg">Bauch</p>
                <p className="text-3xl flex items-center font-bold">0 cm</p>
                <p className="text-sm">Hier eingeben</p>
              </div>

              <div className="bg-white p-3 h-[130px] rounded-lg grid grid-rows-[20px,1fr,20px]">
                <p className="text-[#7A8F8FCC] text-lg">Hüfte</p>
                <p className="text-3xl flex items-center font-bold">93 cm</p>
                <p className="text-sm">Date</p>
              </div>

              <div className="bg-white p-3 h-[130px] rounded-lg grid grid-rows-[20px,1fr,20px]">
                <p className="text-[#7A8F8FCC] text-lg">Beine</p>
                <p className="text-3xl flex items-center font-bold">55 cm</p>
                <p className="text-sm">Date</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VERLAUF */}
      <div className={activeTab == "verlauf" ? "" : "hidden"}>
        <div className="grid grid-rows-[30px,1fr]">
          {/* DATE WORKOUTS MIN CONTAINER */}
          <div className="flex justify-between my-2 w-full h-full items-center">
            <p className="border-l-4 border-black">29 NOV.2023</p>

            {/* WORKOUTS MIN CONTAINER */}
            <div className="flex gap-2">
              <p>3 Workouts</p>
              <p>60 Min</p>
            </div>
          </div>

          {/* CARDS CONTAINER */}
          <div className="grid grid-rows my-4 gap-4">
            {/* CARD 1 */}
            <div className="border-b-4 grid grid-cols-3">
              <div className="p-2">
                <img src={ExampleImage1} alt="" className="h-full w-full" />
              </div>

              <div className="flex flex-col justify-center col-span-2 p-4">
                <p className="font-bold">20-Min HIT: Full Body</p>
                <p>29. NOV. 2023 20:00</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border-b-4 grid grid-cols-3">
              <div className="p-2">
                <img src={ExampleImage1} alt="" className="h-full w-full" />
              </div>

              <div className="flex flex-col justify-center col-span-2 p-4">
                <p className="font-bold">20-Min HIT: Full Body</p>
                <p>29. NOV. 2023 20:00</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="border-b-4 grid grid-cols-3">
              <div className="p-2">
                <img src={ExampleImage1} alt="" className="h-full w-full" />
              </div>

              <div className="flex flex-col justify-center col-span-2 p-4">
                <p className="font-bold">20-Min HIT: Full Body</p>
                <p>29. NOV. 2023 20:00</p>
              </div>
            </div>

            {/* DATE WORKOUTS MIN CONTAINER */}
            <div className="flex justify-between my-2 w-full h-full items-center ">
            <p className="border-l-4 border-black">27 NOV.2023</p>

              {/* WORKOUTS MIN CONTAINER */}
              <div className="flex gap-2">
                <p>2 Workouts</p>
                <p>40 Min</p>
              </div>
            </div>

            {/* CARD 1 */}
            <div className="border-b-4 grid grid-cols-3">
              <div className="p-2">
                <img src={ExampleImage1} alt="" className="h-full w-full" />
              </div>

              <div className="flex flex-col justify-center col-span-2 p-4">
                <p className="font-bold">20-Min HIT: Full Body</p>
                <p>27. NOV. 2023 20:00</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border-b-4 grid grid-cols-3">
              <div className="p-2">
                <img src={ExampleImage1} alt="" className="h-full w-full" />
              </div>

              <div className="flex flex-col justify-center col-span-2 p-4">
                <p className="font-bold">20-Min HIT: Full Body</p>
                <p>27. NOV. 2023 20:00</p>
              </div>
            </div>

            {/* CARDS END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
