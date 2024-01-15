import { Link } from "react-router-dom";


const TipsPageThree = () => {
    const STYLE = {
        container: `bg-[#F2F2ED] h-screen grid grid-rows-[50px_30px,1fr] gap-1 p-4 overflow-auto`,
        headerContainer: `grid grid-cols-[_repeat(5,_1fr)] grid-rows-1 border-b-gray-300 border-b-2 text-xl text-bold font-bold tracking-wide gap-4`,
        h2: `text-4xl text-center p-2 text-[#C3C3B8] font-bold`,
        h3: `text-2xl text-center p-2 text-[#C3C3B8] font-bold`,
        tipsContainer: ` box-border h-1/3 w-auto mt-1 mb-4 rounded-lg p-3`,
        tipsContent: `bg-[#e7e7de] shadow-2xl rounded p-2`,
        list: `pb-3`,
        hyperlinkContainer: `pt-5 pb-5 text-xl text-center font-bold`,
        backButton: `p-2 text-right font-bold`,


    };


    return (
        <div className={STYLE.container}>
            <h2 className={STYLE.h2}>Tipps</h2>
            {/* AOK links/info zusammen gefasst */}
            <div className={STYLE.tipsContainer}>
                {/* Calcium */}
                <h3 className={STYLE.h3}>Was ist Calcium und wie viel Calcium braucht der Mensch am Tag?</h3>
                <div className={STYLE.backButton}>
                
                <Link to="/diet">Zurück</Link>

                </div>
                <div className={STYLE.tipsContent}>
                    <ol>
                        <ul className={STYLE.list}><b>Bedeutung von Calcium: </b>
                            <li>- Calcium ist entscheidend für die Knochendichte und spielt eine Rolle bei der Reizübertragung in Muskeln und Nerven</li>
                            <li>- Es ist wichtig für die Signalübermittlung innerhalb von Zellen und sorgt für die Stabilität von Zellmembranen</li>
                            <li>- Calcium ist auch relevant für die Blutgerinnung und wird in den Knochen gespeichert</li>
                        </ul>
                        <ul className={STYLE.list}><b>Folgen von Calciummangel:</b>
                            <li>- Zu wenig Calcium kann zu einer geringeren Mineralisierung der Knochen führen, was Osteoporose oder Rachitis bei Kindern verursachen kann</li>
                            <li>- Calciummangel tritt selten auf und kann durch unausgewogene Ernährung, vegane Ernährung, Laktoseintoleranz oder erhöhten Calciumbedarf entstehen</li>
                        </ul>
                        <ul className={STYLE.list}><b>Ursachen von Calciumüberversorgung:</b>
                            <li>- Eine erhöhte Calciumzufuhr kann zu einem erhöhten Calciumspiegel führen (Hypercalcämie)</li>
                            <li>- Überversorgung tritt oft durch Nahrungsergänzungsmittel mit Calcium oder Vitamin D sowie durch Diuretika im Zusammenhang mit Nieren- oder Schilddrüsenerkrankungen auf</li>
                        </ul>
                        <ul className={STYLE.list}><b>Lebensmittel mit hohem Calciumgehalt:</b>
                            <li>- Milchprodukte wie Milch, Joghurt und Hartkäse sind reich an Calcium</li>
                            <li>- Auch Gemüsesorten wie Grünkohl, Spinat und Staudensellerie sowie Nüsse und Samen (z.B., Pistazien, Mohnsamen) liefern hohe Calciummengen</li>
                            <li>- Eine ausgewogene Ernährung mit verschiedenen Lebensmitteln trägt zur Deckung des Calcium-Tagesbedarfs bei</li>
                        </ul>
                    </ol>
                                    
                </div>
                <div className={STYLE.hyperlinkContainer}>

                <a  href="https://www.aok.de/pk/magazin/ernaehrung/lebensmittel/calcium-in-welchen-lebensmitteln-ist-es-enthalten/" target="blank">Mehr Information</a>

                </div>
            </div>
        </div>
    )

}

export default TipsPageThree;