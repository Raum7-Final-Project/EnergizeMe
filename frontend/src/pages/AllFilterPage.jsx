import { useState } from "react";

const AllFilterPage = () => {
  const STYLE = {
    container: `bg-[#F2F2ED] h-screen grid grid-rows gap-2 p-4 overflow-auto`,
    h2: `text-4xl text-center p-2 text-[#C3C3B8] font-bold`,
    h3: `text-lg text-center p-2 text-[#C3C3B8] font-semibold`,

    contentContainer: `grid grid-cols-2 gap-3 `,
    headingBox: `grid grid-cols-2 gap-2 `,
    heading: `text-lg font-bold my-2 `,
    sectionContainer: ` rounded-lg p-2`,
    categoryLi: `flex flex-col rounded-full shadow bg-white py-2 hover:border-2 border-[#C3C3B8]`,
    categoryText: `text-center `,
  };
  const [seeAll, setSeeAll] = useState({
})

  const toggleCategory = (category) => {
    setSeeAll((prevSeeAll) => ({
      ...prevSeeAll,
      [category]: !prevSeeAll[category],
    }));
  };

  const isSeeAll = (category) => {
    return seeAll[category] || false;
  };


 const renderCategories = (categories) => {
    return categories.map(category => {
      const style = {
        border: isSeeAll(category) ? '2px solid #C3C3B8' : '2px solid transparent',
      };
      return(

      <li style={style} key={category} className={STYLE.categoryLi} onClick={() => toggleCategory(category)}>
        <div className="flex flex-col">
          <p className={STYLE.categoryText}>{category}</p>
        </div>
      </li>)
    }
    );
  };  


  const renderMoreLessText = (category) => {
    return isSeeAll(category) ? "Weniger Anzeigen" : "Mehr Anzeigen";
  };

  return (
    <div className={STYLE.container}>
      <h2 className={STYLE.h2}>Fiteness</h2>

{/* Kategorie */}
<div>
  <div className={STYLE.sectionContainer}>
    <div className={STYLE.headingBox}>
      <h3 className={STYLE.heading}>Kategorie</h3>

      <div className="text-end my-2">
        {Object.values(seeAll).filter((v) => v).length} filter
      </div>
    </div>
    <ul className="grid grid-cols-2 gap-2">
      {renderCategories(
        [
          "Anfängerfreundlich",
          "Arme",
          "Bauch, Beine, Po",
          "Cardio",
          "Entspannung",
          "Figurtraining",
          "HIIT",
          "Kampfsport",
          "Krafttraining",
          "Motivation",
          "Pilates",
          "Schwangerschaft",
          "Sixpack",
          "Stretching",
          "Tanzen",
          "Weights",
          "Yoga",
        ].slice(0, isSeeAll("Kategorie") ? Infinity : 4)
      )}
    </ul>
    <h3 className={STYLE.h3} onClick={() => toggleCategory("Kategorie")}>
      {renderMoreLessText("Kategorie")}
    </h3>
  </div>
</div>


      {/* Schwierigkeit */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Schwierigkeit</h3>
            <div className="text-end my-2">
              {Object.values(seeAll).filter((v) => v).length} filter
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {renderCategories(
              ["Einfach", "Mittel", "Schwer"].slice(
                0,
                isSeeAll("Kategorie") ? Infinity : 4
              )
            )}
          </ul>
        </div>
      </div>

      {/* Dauer */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Dauer</h3>
            <div className="text-end my-2">
              {Object.values(seeAll).filter((v) => v).length} filter
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {renderCategories(
              ["10", "10-20", "20-30", "30"].slice(
                0,
                isSeeAll("Kategorie") ? Infinity : 4
              )
            )}
          </ul>
        </div>
      </div>

      {/* Trainer */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Trainer</h3>
            <div className="text-end my-2">
              {Object.values(seeAll).filter((v) => v).length} filter
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {renderCategories(
              [
                "Ergotioua",
                "Sascha Huber",
                "Marie Steffen",
                "Heimat Krankenkasse",
                "Ergotioua",
                "Sascha Huber",
                "Marie Steffen",
                "Heimat Krankenkasse",
                "Ergotioua",
                "Sascha Huber",
                "Marie Steffen",
                "Heimat Krankenkasse",
              ].slice(0, isSeeAll("Trainer") ? Infinity : 4)
            )}
          </ul>
          <h3 className={STYLE.h3} onClick={() => toggleCategory("Trainer")}>
            {renderMoreLessText("Trainer")}
          </h3>
        </div>
      </div>

      {/* Muskelgruppe */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Muskelgruppe</h3>
            <div className="text-end my-2">
              {Object.values(seeAll).filter((v) => v).length} filter
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {renderCategories(
              [
                "Arme",
                "Bauch",
                "Bauch, Beine, Po",
                "Beckenboden",
                "Beine",
                "Ganzkörper",
                "Oberkörper",
                "Po",
                "Rücken",
                "Unterkörper",
              ].slice(0, isSeeAll("Muskelgruppe") ? Infinity : 4)
            )}
          </ul>
          <h3
            className={STYLE.h3}
            onClick={() => toggleCategory("Muskelgruppe")}
          >
            {renderMoreLessText("Muskelgruppe")}
          </h3>
        </div>
      </div>

      {/* Equipment */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Equipment</h3>
            <div className="text-end my-2">
              {Object.values(seeAll).filter((v) => v).length} filter
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {renderCategories(
              [
                "Bootyband",
                "Faszienrolle",
                "Hula Hoop-Reifen",
                "Keine Geräte",
                "Kurzhanteln",
                "Matte",
                "Medball",
                "Pilates-Ball",
                "Resistance Band",
                "Spin Bike",
                "Stuhl",
                "Theraband",
                "Tube",
                "Wand",
                "Wasserflaschen",
                "Yoga Block",
                "Yoga Gurt",
              ].slice(0, isSeeAll("Equipment") ? Infinity : 4)
            )}
          </ul>
          <h3 className={STYLE.h3} onClick={() => toggleCategory("Equipment")}>
            {renderMoreLessText("Equipment")}
          </h3>
        </div>
      </div>

      {/* Ziel */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Ziel</h3>
            <div className="text-end my-2">
              {Object.values(seeAll).filter((v) => v).length} filter
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {renderCategories(
              [
                "Abnehmen",
                "Achtsamkeit",
                "Beweglichkeit",
                "Muskelaufbau",
                "Straffen",
                "Ganzkörper",
              ].slice(0, isSeeAll("Ziel") ? Infinity : 4)
            )}
          </ul>
          <h3 className={STYLE.h3} onClick={() => toggleCategory("Ziel")}>
            {renderMoreLessText("Ziel")}
          </h3>
        </div>
      </div>

      
    </div>

  );
};

export default AllFilterPage;
