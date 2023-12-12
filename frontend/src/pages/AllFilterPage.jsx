const AllFilterPage = () => {
  const STYLE = {
    container: `bg-[#F2F2ED] h-screen grid grid-rows-[50px,265px,180px_repeat(3,_1fr),225px_repeat(2,_1fr)] gap-2 p-4 overflow-auto`,
    h2: `text-4xl text-center p-2 text-[#C3C3B8] font-bold`,
    h3: `text-lg text-center p-2 text-[#C3C3B8] font-semibold`,

    contentContainer: `grid grid-cols-2 gap-3 `,
    headingBox: `grid grid-cols-2 gap-2 `,
    heading: `text-lg font-bold my-2 `,
    sectionContainer: ` rounded-lg p-2`,
    categoryLi: `flex flex-col rounded-full shadow bg-white py-2 hover:border-2 border-[#C3C3B8]`,
    categoryText: `text-center `,
  };

  return (
    <div className={STYLE.container}>
      <h2 className={STYLE.h2}>Fiteness</h2>

      {/* Kategorie */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Kategorie</h3>
            <h3 className="text-end my-2">filter</h3>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Anfängerfreundlich</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Arme</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Bauch, Beine, Po</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Cardio</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Entspannung</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Figurtraining</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Ganzkörper</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>HIIT</p>
              </div>
            </li>
          </ul>
          <h3 className={STYLE.h3}>Mehr Anzeigen</h3>
        </div>
      </div>

      {/* Schwierigkeit */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Schwierigkeit</h3>
            <h3 className="text-end my-2">filter</h3>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Einfach</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Mittel</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Schwer</p>
              </div>
            </li>
          </ul>
          <h3 className={STYLE.h3}>Mehr Anzeigen</h3>
        </div>
      </div>

      {/* Dauer */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Dauer</h3>
            <h3 className="text-end my-2">filter</h3>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>10</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>10-20</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>20-30</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>30</p>
              </div>
            </li>
          </ul>
          <h3 className={STYLE.h3}>Mehr Anzeigen</h3>
        </div>
      </div>

      {/* Trainer */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Trainer</h3>
            <h3 className="text-end my-2">filter</h3>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Ergotioua</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Sascha Huber</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Marie Steffen</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={`${STYLE.categoryText}text-xs py-1`}>
                  Heimat Krankenkasse
                </p>
              </div>
            </li>
          </ul>
          <h3 className={STYLE.h3}>Mehr Anzeigen</h3>
        </div>
      </div>

      {/* Muskelgruppe */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Muskelgruppe</h3>
            <h3 className="text-end my-2">filter</h3>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Arme</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Bauch</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Bauch, Beine, Po</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Beckenboden</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Beine</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Ganzkörper</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Oberkörper</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Po</p>
              </div>
            </li>
          </ul>
          <h3 className={STYLE.h3}>Mehr Anzeigen</h3>
        </div>
      </div>

      {/* Equipment */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Equipment</h3>
            <h3 className="text-end my-2">filter</h3>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Bootyband</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Faszienrolle</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Handtuch</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Hantel</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Keine Geräte</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Stuhl</p>
              </div>
            </li>
          </ul>
          <h3 className={STYLE.h3}>Mehr Anzeigen</h3>
        </div>
      </div>

      {/* Ziel */}
      <div>
        <div className={STYLE.sectionContainer}>
          <div className={STYLE.headingBox}>
            <h3 className={STYLE.heading}>Ziel</h3>
            <h3 className="text-end my-2">filter</h3>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Abnehmen</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Achtsamkeit</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Beweglichkeit</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Muskelaufbau</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Straffen</p>
              </div>
            </li>
            <li className={STYLE.categoryLi}>
              <div className="flex flex-col">
                <p className={STYLE.categoryText}>Ganzkörper</p>
              </div>
            </li>
          </ul>
          <h3 className={STYLE.h3}>Mehr Anzeigen</h3>
        </div>
      </div>
    </div>
  );
};

export default AllFilterPage;
