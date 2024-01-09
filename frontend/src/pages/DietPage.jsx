import { useState } from "react";
import ExampleImage11 from "../assets/images/tips1.jpg";
import ExampleImage12 from "../assets/images/tips2.jpg";
import ExampleImage13 from "../assets/images/tips3.jpg";

import { Link } from "react-router-dom";
import { Fragment } from "react";
import recipes from "../assets/recipeData";

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
          {/* CARD MAP */}
          {recipes.map((recipe) => (
            <Fragment key={recipe.id}>
              <Link
                to={`/recipe/${recipe.id}`}
                className="bg-white rounded-md shadow-md grid grid-cols-2"
              >
                <div className="p-2 ">
                  <img
                    src={`/diet${recipe.id}.jpg`}
                    alt={recipe.title}
                    className="h-full w-full"
                  />
                </div>

                <div className="flex flex-col justify-center p-4">
                  <p className="font-bold">{recipe.title}</p>
                  <p>{recipe.description}</p>
                </div>
              </Link>
            </Fragment>
          ))}
        </div>
      </div>

      {/* TIPS */}
      <div className={activeTab == "tips" ? "" : "hidden"}>
        <div className={STYLE.tipsContainer}>
          <img src={ExampleImage11} alt="tips1" className=" w-full" />
        </div>
        <div className={STYLE.tipsContainer}>
          <img src={ExampleImage12} alt="tips2" className=" w-full" />
        </div>
        <div className={STYLE.tipsContainer}>
          <img src={ExampleImage13} alt="tips1" className=" w-full" />
        </div>
      </div>
    </div>
  );
};

export default DietPage;
