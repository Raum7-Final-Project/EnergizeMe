import { Link } from "react-router-dom";


const TipsPageOne = () => {
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
            <h2 className={STYLE.h2}>Tips</h2>
            {/* AOK links/info zusammen gefasst */}
            <div className={STYLE.tipsContainer}>
                {/* 10 Schlafmythen */}
                <h3 className={STYLE.h3}>10 Schlafmythen</h3>
                <div className={STYLE.backButton}>
                
                <Link to="/diet">Zurück</Link>

                </div>
                <div className={STYLE.tipsContent}>
                    <ol>
                        <li className={STYLE.list}><b>1. Ansteckendes Gähnen:</b>  <br />Forscher vermuten, dass ansteckendes Gähnen auf neuronaler Anregbarkeit basiert. Der Drang zu gähnen variiert individuell.</li>
                        <li className={STYLE.list}><b>2. Schlaf nachholen:</b> <br /> Es gibt keine klaren Beweise, dass das Nachholen von Schlaf langfristige Folgen von Schlafmangel ausgleichen kann. Eine Studie deutet darauf hin, dass einige Folgen nicht rückgängig gemacht werden können.</li>
                        <li className={STYLE.list}><b>3. Vollmond und Schlafqualität:</b> <br /> Forschung zeigt keinen Zusammenhang zwischen Vollmond und schlechter Schlafqualität. Dies scheint eher auf subjektive Wahrnehmung zurückzuführen zu sein.</li>
                        <li className={STYLE.list}><b>4. Nackt schlafen:</b> <br /> Nacktes Schlafen könnte die natürliche Temperaturregulation fördern. Es gibt keine direkten Studien, aber enganliegende Unterwäsche kann die Luftzirkulation beeinträchtigen.</li>
                        <li className={STYLE.list}><b>5. Sport vor dem Schlafen:</b> <br /> Intensiver Sport kurz vor dem Schlafengehen kann den Schlaf stören. Ergebnisse gelten nicht für moderates Training.</li>
                        <li className={STYLE.list}><b>6. Im Schlaf lernen:</b> <br /> Neues kann im Schlaf nicht erlernt, aber Erinnerungen können gefestigt werden. Gewisse Reize wie Düfte könnten diesen Prozess unterstützen.</li>
                        <li className={STYLE.list}><b>7. Offenes Fenster und Schlafqualität:</b> <br /> Stoßlüften ist besser als ein gekipptes Fenster. Nächtlicher Lärm kann gesundheitsschädlich sein, daher ist in städtischen Gebieten das Schließen des Fensters empfehlenswert.</li>
                        <li className={STYLE.list}><b>8. Schlaf vor Mitternacht:</b> <br /> Die Uhrzeit, zu der man schlafen geht, ist nicht entscheidend. Wichtig ist ausreichender Tiefschlaf, der im Verlauf der Nacht abnimmt.</li>
                        <li className={STYLE.list}><b>9. Schlafbedarf im Alter:</b> <br /> Ältere Menschen benötigen nicht weniger Schlaf, haben jedoch Schwierigkeiten, ausreichend Schlaf zu bekommen. Der Schlaf verändert sich im Alter.</li>
                        <li className={STYLE.list}><b>10. Mittagsschlaf:</b> <br /> Ein kurzer Mittagsschlaf kann sich positiv auf die Lernfähigkeit auswirken, besonders bei Kindern und jungen Erwachsenen. Es sollte jedoch nicht zu ausgiebig sein.</li>
                    </ol>
                                    
                </div>
                <div className={STYLE.hyperlinkContainer}>

                <a  href="https://www.aok.de/pk/magazin/wohlbefinden/schlaf/10-schlafmythen-im-check-das-hilft-fuer-einen-gesunden-schlaf/" target="blank">Mehr Information</a>

                </div>
            </div>
        </div>
    )

}

export default TipsPageOne;