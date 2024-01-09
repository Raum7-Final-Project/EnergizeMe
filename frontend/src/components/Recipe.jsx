import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const getExampleImagePath = (id) => `/diet${id}.jpg`;
//  const getExampleImagePath = (id) => `../assets/images/diet${id}.jpg`;

const recipesData = {
  1: {
    title: "Karotten-Rucola-Salat",
    ingredients: [
      "2 Handvoll frischer Rucola",
      "1/4 Tasse geröstete Sonnenblumenkerne",
      "1/4 Tasse gehackte Walnüsse (optional)",
      "Saft einer Zitrone",
      "3 Esslöffel Olivenöl",
      "Salz und Pfeffer nach Geschmack",
    ],
    instructions:
      "Step 1: Salz und Pfeffer nach Geschmack.\nStep 2: In einer kleinen Schüssel den Zitronensaft mit dem Olivenöl vermischen, dann über den Salat gießen.\nStep 3: Den Salat vorsichtig mischen, um sicherzustellen, dass die Zutaten gleichmäßig mit dem Dressing bedeckt sind.\nStep 4: Mit Salz und Pfeffer nach Geschmack würzen.\nStep 5: Den Salat für etwa 15-20 Minuten ziehen lassen, damit sich die Aromen gut vermischen.\nStep 6: Vor dem Servieren nochmals vorsichtig umrühren und nach Bedarf nochmals mit Salz und Pfeffer abschmecken.",
  },
  2: {
    title: "Teriyaki-Tofu",
    ingredients: [
      "1 Block Tofu, fest",
      "3 EL Sojasauce",
      "2 EL Mirin (süßer Reiswein)",
      "2 EL Reisessig",
      "2 EL brauner Zucker oder Ahornsirup",
      "1 Knoblauchzehe, gehackt",
      "1 TL Ingwer, gerieben",
      "2 EL neutrales Öl (zum Braten)",
      "Frühlingszwiebeln und Sesamsamen zum Garnieren (optional)",
      "Reis zum Servieren",
    ],
    instructions:
      "Step 1: Den Tofu gut abtropfen lassen und in Würfel schneiden.\nStep 2: In einer Schüssel Sojasauce, Mirin, Reisessig, braunen Zucker oder Ahornsirup, gehackten Knoblauch und geriebenen Ingwer vermengen, um die Teriyaki-Sauce herzustellen.\nStep 3: Das neutrale Öl in einer Pfanne erhitzen. Die Tofuwürfel hinzufügen und bei mittlerer Hitze goldbraun anbraten.\nStep 4: Sobald der Tofu goldbraun ist, die Teriyaki-Sauce über den Tofu gießen. Vorsichtig umrühren, damit die Sauce den Tofu gleichmäßig bedeckt.\nStep 5: Den Tofu in der Teriyaki-Sauce köcheln lassen, bis die Sauce eingedickt ist und sich am Tofu haftet.\nStep 6: Den Teriyaki-Tofu auf Reis servieren und mit Frühlingszwiebeln und Sesamsamen garnieren, falls gewünscht.",
  },
  3: {
    title: "Bircher Müsli mit Banana und Chia",
    ingredients: [
      "1 Tasse Haferflocken",
      "1 Tasse Milch (kann auch Mandel- oder Hafermilch sein)",
      "1 reife Banane, zerdrückt",
      "2 Esslöffel Chiasamen",
      "1 Esslöffel Honig oder Ahornsirup (optional, je nach gewünschter Süße)",
      "Eine Prise Zimt",
      "Frische Früchte zum Garnieren (z.B. Beeren, Kiwi)",
      "Nüsse oder Samen nach Geschmack (z.B. Mandeln, Walnüsse oder Sonnenblumenkerne)",
    ],
    instructions:
      "Step 1: In einer Schüssel die Haferflocken mit Milch vermengen und etwa 15 Minuten quellen lassen.\nStep 2: Die zerdrückte Banane, Chiasamen, Honig (oder Ahornsirup) und eine Prise Zimt hinzufügen. Alles gut vermengen.\nStep 3: Das Bircher Müsli für mindestens 2 Stunden oder über Nacht im Kühlschrank ziehen lassen, damit die Haferflocken und Chiasamen ausreichend aufquellen.\nStep 4: Vor dem Servieren das Müsli gut umrühren und nach Belieben mit frischen Früchten sowie Nüssen oder Samen garnieren.",
  },
  4: {
    title: "Roggenbrote mit Avocado und Rote-Bete-Aufstrich",
    ingredients: [
      "1 mittelgroße Rote Bete, gekocht und geschält",
      "1 Knoblauchzehe, gehackt",
      "2 EL Olivenöl",
      "Saft einer halben Zitrone",
      "Salz und Pfeffer nach Geschmack",
      "2 reife Avocados",
      "Saft einer halben Zitrone",
      "Salz und Pfeffer nach Geschmack",
      "8 Scheiben Roggenbrot",
    ],
    instructions:
      "Step 1: Die gekochte und geschälte Rote Bete in kleine Stücke schneiden.\nStep 2: In einem Mixer oder mit einem Pürierstab die Rote Bete mit gehacktem Knoblauch, Olivenöl und Zitronensaft pürieren, bis eine glatte Masse entsteht.\nStep 3: Mit Salz und Pfeffer abschmecken.\nStep 4: Das Fruchtfleisch der Avocados entnehmen und in eine Schüssel geben.\nStep 5: Zitronensaft hinzufügen und die Avocados mit einer Gabel oder einem Pürierstab zu einer cremigen Konsistenz verarbeiten.\nStep 6: Mit Salz und Pfeffer abschmecken.\nStep 7: Die Roggenbrotscheiben leicht toasten oder nach persönlichem Geschmack verwenden.\nStep 8: Den Rote-Bete-Aufstrich großzügig auf die Hälfte der Roggenscheiben verteilen.\nStep 9: Die Avocado-Creme auf die andere Hälfte der Roggenscheiben streichen.\nStep 10: Die Roggenscheiben mit Rote-Bete-Aufstrich und Avocado-Creme zusammenfügen, um köstliche Sandwiches zu bilden.\nStep 11: Optional mit frischen Kräutern garnieren.",
  },
  5: {
    title: "Köstliche Basilikum Pesto Pasta",
    ingredients: [
      "400 g Pasta (z.B. Spaghetti oder Penne)",
      "2 Tassen frisches Basilikum, gewaschen und abgetrocknet",
      "1/2 Tasse geröstete Pinienkerne",
      "1/2 Tasse frisch geriebener Parmesan",
      "2 Knoblauchzehen, geschält",
      "1/2 Tasse extra natives Olivenöl",
      "Salz und Pfeffer nach Geschmack",
    ],
    instructions:
      "Step 1: Wasser in einem großen Topf zum Kochen bringen und die Pasta nach den Anweisungen auf der Verpackung al dente kochen. Abgießen und beiseite stellen.\nStep 2: In der Zwischenzeit das Basilikum, die Pinienkerne, den Parmesan und die Knoblauchzehen in einem Mixer oder einer Küchenmaschine geben. Mixe die Zutaten, bis eine grobe Paste entsteht.\nStep 3: Unter ständigem Mixen das Olivenöl langsam in die Mischung gießen, bis eine glatte Pesto-Sauce entsteht. Du kannst die Konsistenz nach Belieben anpassen, indem du mehr oder weniger Olivenöl hinzufügst.\nStep 4: Mit Salz und Pfeffer abschmecken. Denke daran, dass der Parmesan bereits salzig ist, also füge Salz vorsichtig hinzu.\nStep 5: Die gekochte Pasta in eine große Schüssel geben und das Basilikumpesto darüber gießen. Gut vermengen, damit die Pasta gleichmäßig mit der Sauce bedeckt ist.\nStep 6: Optional kannst du zusätzlichen Parmesan und frisches Basilikum als Garnierung verwenden.",
  },
  6: {
    title: "Brat-Süßkartoffeln mit Spiegelei",
    ingredients: [
      "2 große Süßkartoffeln",
      "2 Esslöffel Olivenöl",
      "1 Teelöffel Paprikapulver",
      "1 Teelöffel Knoblauchpulver",
      "Salz und Pfeffer nach Geschmack",
      "4 Eier",
    ],
    instructions:
      "Step 1: Die Süßkartoffeln schälen und in kleine, gleichmäßige Würfel schneiden.\nStep 2: In einer großen Pfanne das Olivenöl erhitzen. Die Süßkartoffelwürfel hinzufügen und bei mittlerer Hitze braten, bis sie goldbraun und knusprig sind. Dies dauert in der Regel etwa 10-15 Minuten. Gelegentlich umrühren, um eine gleichmäßige Bräunung zu gewährleisten.\nStep 3: Paprikapulver, Knoblauchpulver, Salz und Pfeffer über die Süßkartoffeln streuen und gut vermengen. Die Gewürze verleihen den Kartoffeln zusätzlichen Geschmack.\nStep 4: In der gleichen Pfanne Platz für die Spiegeleier schaffen. Jeweils ein Ei vorsichtig in die Pfanne gleiten lassen. Die Eier bei niedriger Hitze braten, bis das Eiweiß fest, aber das Eigelb noch leicht flüssig ist.\nStep 5: Die gebratenen Süßkartoffeln auf Teller verteilen und jeweils ein Spiegelei darauf platzieren.\nStep 6: Nach Belieben mit frischen Kräutern garnieren und sofort servieren.",
  },
  7: {
    title: "Rührei mit geräuchertem Lachs und Avocado-Brot",
    ingredients: [
      "4 Eier",
      "2 Esslöffel Milch",
      "Salz und Pfeffer nach Geschmack",
      "2 Esslöffel Butter",
      "150 g geräucherter Lachs, in dünnen Scheiben",
      "4 Scheiben Vollkornbrot",
      "2 reife Avocados",
      "Saft einer halben Zitrone",
      "Salz und Pfeffer nach Geschmack",
    ],
    instructions:
      "Step 1: In einer Schüssel Eier aufschlagen und mit Milch, Salz und Pfeffer verquirlen.\nStep 2: Die Butter in einer Pfanne bei mittlerer Hitze schmelzen lassen.\nStep 3: Die Eimischung in die Pfanne geben und sanft rühren, bis die Eier gestockt sind, aber noch saftig.\nStep 4:Die dünnen Lachsscheiben auf einem separaten Teller anrichten.\nStep 5: Die Avocados schälen, entkernen und in einer Schüssel zerdrücken.\nStep 6: Den Zitronensaft hinzufügen, um die Avocados vor dem Verfärben zu schützen.\nStep 7: Mit Salz und Pfeffer abschmecken. Bei Bedarf können auch Chili-Flocken hinzugefügt werden.\nStep 8: Die Avocado-Mischung auf die Vollkornbrotscheiben streichen.",
  },
  8: {
    title: "Curry-Champignons an Bulgur",
    ingredients: [
      "200 g Bulgur",
      "400 g Champignons, in Scheiben geschnitten",
      "1 Zwiebel, fein gehackt",
      "2 Knoblauchzehen, gehackt",
      "1 TL Currypulver",
      "1 TL Paprikapulver",
      "1 TL Kreuzkümmel",
      "1 TL Olivenöl",
      "Salz und Pfeffer nach Geschmack",
      "Frische Petersilie zum Garnieren",
    ],
    instructions:
      "Step 1: Den Bulgur nach Packungsanweisung in kochendem Wasser zubereiten. Normalerweise benötigt er etwa 10-15 Minuten, um zu quellen. Wenn er fertig ist, mit einer Gabel auflockern.\nStep 2: In einer Pfanne das Olivenöl erhitzen und die gehackte Zwiebel darin glasig dünsten.\nStep 3: Die Champignons hinzufügen und unter gelegentlichem Rühren braten, bis sie goldbraun sind.\nStep 4: Den gehackten Knoblauch in die Pfanne geben und kurz anbraten, bis er duftet.\nStep 5: Currypulver, Paprikapulver und Kreuzkümmel hinzufügen. Gut umrühren, um die Gewürze gleichmäßig zu verteilen.\nStep 6: Die Champignonmischung mit Salz und Pfeffer abschmecken und weitere 5 Minuten köcheln lassen, bis alles gut durchgezogen ist.\nStep 7: Die Curry-Champignons über den zubereiteten Bulgur servieren.\nStep 8: Mit frisch gehackter Petersilie garnieren und heiß servieren.",
  },
  9: {
    title: "Kräuterpfannkuchen mit Hummus",
    ingredients: [
      "200 g Mehl",
      "250 ml Milch",
      "2 Eier",
      "1 Prise Salz",
      "1 EL frisch gehackte Kräuter (z.B. Petersilie, Schnittlauch, Dill)",
      "1 Dose Kichererbsen (ca. 400 g), abgetropft",
      "2 Knoblauchzehen, geschält",
      "3 EL Tahini (Sesampaste)",
      "Saft von 1 Zitrone",
      "2 EL Olivenöl",
      "Salz und Pfeffer nach Geschmack",
      "Wasser (je nach gewünschter Konsistenz)",
    ],
    instructions:
      "Step 1: Für die Pfannkuchen: In einer Schüssel Mehl, Milch, Eier und eine Prise Salz verrühren, bis ein glatter Teig entsteht. Die frisch gehackten Kräuter hinzufügen und unterrühren.\nStep 2: Etwas Öl in einer Pfanne erhitzen. Eine Kelle Teig in die Pfanne geben und gleichmäßig verteilen. Den Pfannkuchen von beiden Seiten goldbraun backen. Diesen Schritt für alle Pfannkuchen wiederholen.\nStep 3: Für das Hummus: Kichererbsen, Knoblauch, Tahini, Zitronensaft und Olivenöl in einem Mixer oder einer Küchenmaschine pürieren, bis eine cremige Masse entsteht. Bei Bedarf Wasser hinzufügen, um die gewünschte Konsistenz zu erreichen.\nStep 4: Das Hummus mit Salz und Pfeffer abschmecken.\nStep 5: Die Pfannkuchen mit Hummus bestreichen und nach Belieben zusammenklappen oder aufrollen.\nStep 6: Die Kräuterpfannkuchen mit Hummus servieren und nach Wunsch mit zusätzlichen frischen Kräutern garnieren.",
  },
  10: {
    title: "Kürbissuppe mit Ingwer",
    ingredients: [
      "600g Kürbis (z. B. Hokkaido), gewürfelt",
      "1 Zwiebel, gehackt",
      "1 Knoblauchzehen, gehackt",
      "1 Stück Ingwer (ca. 3 cm), geschält und gehackt",
      "2 Kartoffeln, geschält und gewürfelt",
      "1 Möhre, gewürfelt",
      "600 ml Gemüsebrühe",
      "200 ml Kokosmilch",
      "2 EL Olivenöl",
      "Salz und Pfeffer nach Geschmack Frische Petersilie oder Koriander zum Garnieren",
    ],
    instructions:
      "Step 1: In einem großen Topf das Olivenöl erhitzen und die Zwiebel, den Knoblauch und den Ingwer darin glasig dünsten.\nStep 2: Die gewürfelten Kürbisstücke, Kartoffeln und Möhren hinzufügen und kurz anbraten.\nStep 3: Mit Gemüsebrühe ablöschen und zum Kochen bringen. Dann die Hitze reduzieren und die Suppe bei geschlossenem Deckel etwa 20-25 Minuten köcheln lassen, bis das Gemüse weich ist.\nStep 4: Die Kokosmilch hinzufügen und die Suppe mit einem Pürierstab fein pürieren, bis eine cremige Konsistenz erreicht ist.\nStep 5: Mit Salz und Pfeffer abschmecken. Bei Bedarf noch etwas Gemüsebrühe hinzufügen, um die gewünschte Konsistenz zu erreichen.\nStep 6: Die Kürbissuppe heiß servieren und mit frischer Petersilie oder Koriander garnieren.",
  },
};

const getRecipeDetailsById = (id) => {
  return recipesData[id];
};

const Recipe = () => {
  const STYLE = {
    container: `bg-[#F2F2ED] h-screen grid grid-rows-[w-full_30px,1fr] gap-1 p-4 overflow-auto`,
    h2: `text-4xl text-center p-2 text-[#C3C3B8] font-bold`,
    headerContainer: `grid grid-cols-[_repeat(5,_1fr)] grid-rows-1 border-b-gray-300 border-b-2 text-xl text-bold font-bold tracking-wide gap-4`,
    startBox: `flex flex-col items-center`,
    button: `border-2 border-[#C3C3B8] mt-2 text-center rounded-full px-2 text-[#C3C3B8] font-bold`,
  };

  const { id } = useParams();
  const recipeDetails = getRecipeDetailsById(id);

  return (
    <div className={STYLE.container}>
      <div className="p-2 ">
        <img src={getExampleImagePath(id)} alt="" className="h-full w-full" />
      </div>
      <h2 className={STYLE.h2}>{recipeDetails.title}</h2>
      <p className="font-bold">Zutaten für 4 personen</p>
      <p className="whitespace-pre-line">
        {recipeDetails.ingredients.join(", ")}
      </p>
      <p className="font-bold ">Zubereitung</p>
      <p className="whitespace-pre-line"> {recipeDetails.instructions}</p>
      <Link to="/diet" className={STYLE.button}>
        Back to recipe list
      </Link>
    </div>
  );
};

export default Recipe;
