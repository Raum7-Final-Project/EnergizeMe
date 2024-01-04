import { useParams } from "react-router-dom";
import ExampleImage1 from "../assets/images/diet1.jpg";

/* const getExampleImagePath = (id) => `../assets/images/diet${id}.jpg`; */


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
      "Step 1: Salz und Pfeffer nach Geschmack.\nStep 2: In einer kleinen Schüssel den Zitronensaft mit dem Olivenöl vermischen, dann über den Salat gießen.\nStep 3:Den Salat vorsichtig mischen, um sicherzustellen, dass die Zutaten gleichmäßig mit dem Dressing bedeckt sind.\nStep 4:Mit Salz und Pfeffer nach Geschmack würzen.\nStep 5:Den Salat für etwa 15-20 Minuten ziehen lassen, damit sich die Aromen gut vermischen.\nStep 6:Vor dem Servieren nochmals vorsichtig umrühren und nach Bedarf nochmals mit Salz und Pfeffer abschmecken.",
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
      "Step 1: Den Tofu gut abtropfen lassen und in Würfel schneiden.\nStep 2: In einer Schüssel Sojasauce, Mirin, Reisessig, braunen Zucker oder Ahornsirup, gehackten Knoblauch und geriebenen Ingwer vermengen, um die Teriyaki-Sauce herzustellen.\nStep 3:Das neutrale Öl in einer Pfanne erhitzen. Die Tofuwürfel hinzufügen und bei mittlerer Hitze goldbraun anbraten.\nStep 4:Sobald der Tofu goldbraun ist, die Teriyaki-Sauce über den Tofu gießen. Vorsichtig umrühren, damit die Sauce den Tofu gleichmäßig bedeckt.\nStep 5:Den Tofu in der Teriyaki-Sauce köcheln lassen, bis die Sauce eingedickt ist und sich am Tofu haftet.\nStep 6:Den Teriyaki-Tofu auf Reis servieren und mit Frühlingszwiebeln und Sesamsamen garnieren, falls gewünscht.",
  },
  3: {
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
      "Step 1: Den Tofu gut abtropfen lassen und in Würfel schneiden.\nStep 2: In einer Schüssel Sojasauce, Mirin, Reisessig, braunen Zucker oder Ahornsirup, gehackten Knoblauch und geriebenen Ingwer vermengen, um die Teriyaki-Sauce herzustellen.\nStep 3:Das neutrale Öl in einer Pfanne erhitzen. Die Tofuwürfel hinzufügen und bei mittlerer Hitze goldbraun anbraten.\nStep 4:Sobald der Tofu goldbraun ist, die Teriyaki-Sauce über den Tofu gießen. Vorsichtig umrühren, damit die Sauce den Tofu gleichmäßig bedeckt.\nStep 5:Den Tofu in der Teriyaki-Sauce köcheln lassen, bis die Sauce eingedickt ist und sich am Tofu haftet.\nStep 6:Den Teriyaki-Tofu auf Reis servieren und mit Frühlingszwiebeln und Sesamsamen garnieren, falls gewünscht.",
  },
};

const getRecipeDetailsById = (id) => {
  return recipesData[id];
};

const Recipe = () => {
  const STYLE = {
    container: `bg-[#F2F2ED] h-screen grid grid-rows-[50px_30px,1fr] gap-1 p-4 overflow-auto`,
    h2: `text-4xl text-center p-2 text-[#C3C3B8] font-bold`,
    headerContainer: `grid grid-cols-[_repeat(5,_1fr)] grid-rows-1 border-b-gray-300 border-b-2 text-xl text-bold font-bold tracking-wide gap-4`,
  };

  const { id } = useParams();
  const recipeDetails = getRecipeDetailsById(id);

  return (
    <div>
      <div className="p-2 ">
       {/* <img src={getExampleImagePath(id)} alt="" className="h-full w-full"/>  */}
       <img
                src={ExampleImage1}
                alt=""
                className="h-full w-full"
              />
      </div>
      <h2 className={STYLE.h2}>{recipeDetails.title}</h2>
      <p className="font-bold">Zutaten</p>
      <p className="whitespace-pre-line">
        {recipeDetails.ingredients.join(", ")}
      </p>
      <p className="font-bold ">Zubereitung</p>
      <p className="whitespace-pre-line"> {recipeDetails.instructions}</p>
      {/* ... (other details) */}
    </div>
  );
};

export default Recipe;
