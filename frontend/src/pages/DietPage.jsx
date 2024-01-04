import { useState } from "react";
// import SaladImage from "../assets/images/salad-test.jpg";
import ExampleImage1 from "../assets/images/diet1.jpg";
import ExampleImage2 from "../assets/images/diet2.jpg";
import ExampleImage3 from "../assets/images/diet3.jpg";
import ExampleImage4 from "../assets/images/diet4.jpg";
import ExampleImage5 from "../assets/images/diet5.jpg";
import ExampleImage6 from "../assets/images/diet6.jpg";
import ExampleImage7 from "../assets/images/diet7.jpg";
import ExampleImage9 from "../assets/images/diet9.jpg";
import ExampleImage10 from "../assets/images/diet10.jpg";
import ExampleImage11 from "../assets/images/tipps1.jpg";
import ExampleImage12 from "../assets/images/tipps2.jpg";
import ExampleImage13 from "../assets/images/tipps3.jpg";

const DietPage = () => {
  const STYLE = {
    container: `bg-[#F2F2ED] h-screen grid grid-rows-[50px_30px,1fr] gap-1 p-4 overflow-auto`,
    h2: `text-4xl text-center p-2 text-[#C3C3B8] font-bold`,
    headerContainer: `grid grid-cols-[_repeat(5,_1fr)] grid-rows-1 border-b-gray-300 border-b-2 text-xl text-bold font-bold tracking-wide gap-4`,
    tipsContainer: `box-border h-1/4 w-auto p4 border-4 mt-1 mb-4 rounded-lg p-2`,
  };

  const [activeTab, setActiveTab] = useState("recipe");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={STYLE.container}>
      <h2 className={STYLE.h2}>Ernährung</h2>

      {/* NAVIGATION => Recipe | Tips */}
      <div className={STYLE.headerContainer}>
        <p
          className={
            activeTab == "recipe"
              ? "border-b-[0.3rem] border-gray-300 b-[0.5rem]"
              : "text-[#C3C3B8]"
          }
          onClick={() => handleTab("recipe")}
        >
          Rezepte
        </p>
        <p
          className={
            activeTab == "tips"
              ? "border-b-[0.3rem] border-gray-300"
              : "text-[#C3C3B8]"
          }
          onClick={() => handleTab("tips")}
        >
          Tips
        </p>
      </div>

      {/* REZEPTE */}
      <div className={activeTab == "recipe" ? "" : "hidden"}>
        {/* CARDS CONTAINER */}
        <div className=" grid grid-rows my-4 gap-4">
          {/* CARD 1 */}
          <div className="bg-white rounded-md shadow-md grid grid-cols-2">
            <div className="p-2 ">
              <img
                src={ExampleImage1}
                alt="Karotten-Rucola-Salat"
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center  p-4">
              <p className="font-bold">Karotten-Rucola-Salat</p>
              <p>Salat, 15 Min., 151 kcal</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-md shadow-md grid grid-cols-2">
            <div className="p-2">
              <img
                src={ExampleImage2}
                alt="Teriyaki-Tofu"
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center  p-4">
              <p className="font-bold">Teriyaki-Tofu</p>
              <p>Vegetarisch, 30 Min., 436 kcal</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-md shadow-md grid grid-cols-2">
            <div className="p-2">
              <img
                src={ExampleImage3}
                alt="Bircher Müsli mit Banana und Chia"
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center  p-4">
              <p className="font-bold">Bircher Müsli mit Banana und Chia</p>
              <p>Müsli, 15 Min., 284 kcal</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-md shadow-md grid grid-cols-2">
            <div className="p-2">
              <img
                src={ExampleImage4}
                alt="Roggenbrote mit Avocado und Rote-Bete-Aufstrich"
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center  p-4">
              <p className="font-bold">Brot mit Avocado, Rote-Bete-Aufstrich</p>
              <p>Müsli, 15 Min., 284 kcal</p>
            </div>
          </div>
          {/* CARD 5 */}
          <div className="bg-white rounded-md shadow-md grid grid-cols-2">
            <div className="p-2">
              <img
                src={ExampleImage5}
                alt="Köstliche Basilikum Pesto Pasta"
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center  p-4">
              <p className="font-bold">Köstliche Basilikum Pesto Pasta</p>
              <p>Müsli, 15 Min., 284 kcal</p>
            </div>
          </div>
          {/* CARD 6 */}
          <div className="bg-white rounded-md shadow-md grid grid-cols-2">
            <div className="p-2">
              <img
                src={ExampleImage6}
                alt="Brat-Süßkartoffeln mit Spiegelei "
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center  p-4">
              <p className="font-bold">Brat-Süßkartoffeln mit Spiegelei </p>
              <p>Müsli, 15 Min., 284 kcal</p>
            </div>
          </div>
          {/* CARD 7 */}
          <div className="bg-white rounded-md shadow-md grid grid-cols-2">
            <div className="p-2">
              <img
                src={ExampleImage7}
                alt="Rührei mit geräuchertem Lachs und Avocado-Brot
                "
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center  p-4">
              <p className="font-bold">Rührei mit Lachs und Avocado-Brot</p>
              <p>Müsli, 15 Min., 284 kcal</p>
            </div>
          </div>
          {/* CARD 9 */}
          <div className="bg-white rounded-md shadow-md grid grid-cols-2">
            <div className="p-2">
              <img
                src={ExampleImage9}
                alt="Pfannkuchen mit Hummus"
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center  p-4">
              <p className="font-bold">Pfannkuchen mit Hummus</p>
              <p>Müsli, 15 Min., 284 kcal</p>
            </div>
          </div>
          {/* CARD 10 */}
          <div className="bg-white rounded-md shadow-md grid grid-cols-2">
            <div className="p-2">
              <img
                src={ExampleImage10}
                alt="Kürbissuppe mit Ingwer"
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center  p-4">
              <p className="font-bold">Kürbissuppe mit Ingwer</p>
              <p>Müsli, 15 Min., 284 kcal</p>
            </div>
          </div>
          {/* CARDS END */}
        </div>
      </div>

      {/* TIPS */}
      <div className={activeTab == "tips" ? "" : "hidden"}>
        <div className={STYLE.tipsContainer}>
        <img
                src={ExampleImage11}
                alt="tipps1"
                className=" w-full"
              />
        </div>
        <div className={STYLE.tipsContainer}>
        <img
                src={ExampleImage12}
                alt="tipps2"
                className=" w-full"
              />
        </div>
        <div className={STYLE.tipsContainer}>
        <img
                src={ExampleImage13}
                alt="tipps1"
                className=" w-full"
              />
        </div>
      </div>
    </div>
  );
};

export default DietPage;