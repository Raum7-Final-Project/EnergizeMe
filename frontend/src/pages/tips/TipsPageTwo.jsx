import { Link } from "react-router-dom";


const TipsPageTwo = () => {
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
                {/* Gesund Einkaufen */}
                <h3 className={STYLE.h3}>Gesund Einkaufen</h3>
                <div className={STYLE.backButton}>
                
                <Link to="/diet">Zurück</Link>

                </div>
                <div className={STYLE.tipsContent}>
                    <ol>
                        <li className={STYLE.list}>Gesunde Ernährung beginnt schon beim Einkaufen. Denn hier entscheidet sich, was später auf den Teller kommt. Welche Fallen im Supermarkt lauern und wie Sie aus der Fülle des Angebots gut und gesund auswählen, erklärt der Göttinger Ernährungswissenschaftler Dr. Thomas Ellrott.</li>
                        <li className={STYLE.list}><b>Tipp 1:</b> Planen Sie ausreichend Zeit für Ihren Einkauf ein, um bewusste und gesunde Entscheidungen zu treffen.</li>
                        <li className={STYLE.list}><b>Tipp 2:</b> Seien Sie am Tiefkühlregal vorsichtig, wählen Sie gesunde Optionen wie tiefgefrorenes Gemüse und prüfen Sie die Nährwertinformationen..</li>
                        <li className={STYLE.list}><b>Tipp 3:</b> Achten Sie auf Portionsangaben und vergleichen Sie Nährwertinformationen pro 100 Gramm, um eine bessere Kontrolle über Kalorien, Fett und Salz zu haben.</li>
                        <li className={STYLE.list}><b>Tipp 4:</b> Vermeiden Sie es, sich von Großpackungen verführen zu lassen. Obwohl sie oft preiswerter erscheinen, führen sie zu einer höheren Kalorienaufnahme, da wir dazu neigen, die Packung komplett zu verzehren. Stattdessen bevorzugen Sie kleinere Portionen, um die Kontrolle über Ihre Kalorienzufuhr zu behalten.</li>
                        <li className={STYLE.list}><b>Tipp 5:</b> Legen Sie einen gesunden Vorrat an, vermeiden Sie jedoch das Horten kalorienreicher Snacks. Erlauben Sie sich einen fairen Spielraum, um Essattacken vorzubeugen.</li>
                        
                    </ol>
                                    
                </div>
                <div className={STYLE.hyperlinkContainer}>

                <a  href="https://www.aok.de/pk/magazin/ernaehrung/gesunde-ernaehrung/lebensmittel-gesund-einkaufen-so-einfach-gehts/" target="blank">Mehr Information</a>

                </div>
            </div>
        </div>
    )

}

export default TipsPageTwo;