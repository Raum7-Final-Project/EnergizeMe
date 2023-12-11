import { useState } from "react";

const DietPage = () => {
  const STYLE = {
    container: `bg-white h-screen grid grid-rows-[50px_30px,1fr] gap-1 p-4 overflow-auto`,
    h2: `text-4xl text-center p-2 text-[#C3C3B8] font-bold`,
    headerContainer: `grid grid-cols-[_repeat(5,_1fr)] grid-rows-1 border-b-gray-300 border-b-2 text-xl text-bold  font-bold tracking-wide gap-4`,
    recipeContainer: `box-border h-1/4 w-auto p4 border-4 mt-1 mb-4`,
    tipsContainer: `box-border h-1/4 w-auto p4 border-4 mt-1 mb-4`,
  };

  
const [activeTab, setActiveTab] = useState("recipe");

const handleTab = (tab)=>{
  setActiveTab(tab);
}


  return (
    <div className={STYLE.container}>
      <h2 className={STYLE.h2}>Ernährung</h2>

      {/* NAVIGATION => Recipe | Tips */}
      <div className={STYLE.headerContainer}>
        <p className={activeTab == "recipe" ? "border-b-[0.3rem] border-gray-300 b-[0.5rem]" : "text-[#C3C3B8]"} onClick={()=> handleTab("recipe")}>Rezepte</p>
        <p className={activeTab == "tips" ? "border-b-[0.3rem] border-gray-300" : "text-[#C3C3B8]"} onClick={()=> handleTab("tips")}>Tips</p>
      </div>

      {/* REZEPTE */}
      <div className={activeTab == "recipe" ? "" : "hidden"}>
      <p className="font-bold text-lg">Rezepte</p>
      <div className={STYLE.recipeContainer}>
        <p>text</p>

      </div>
      <div className={STYLE.recipeContainer}>
        <p>text</p>

      </div>
      <div className={STYLE.recipeContainer}>
        <p>text</p>

      </div>
      <div className={STYLE.recipeContainer}>
        <p>text</p>

      </div>
      </div>

      {/* TIPS */}
      <div className={activeTab == "tips" ? "" : "hidden"}>
      <p className="font-bold text-lg">Tips</p>
      <div className={STYLE.tipsContainer}>
        <p>text</p>

      </div>
      <div className={STYLE.tipsContainer}>
        <p>text</p>

      </div>
      <div className={STYLE.tipsContainer}>
        <p>text</p>

      </div> 
      <div className={STYLE.tipsContainer}>
        <p>text</p>

      </div> 
      <div className={STYLE.tipsContainer}>
        <p>text</p>

      </div>
      </div>
     

    </div>
  );
};

export default DietPage;
