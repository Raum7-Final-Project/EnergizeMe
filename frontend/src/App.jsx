import { Routes, Route } from "react-router-dom";
// import "../src/assets/styles/App.css"

import MainRoutes from "./components/MainRoutes";
import Layout from "./layout/Layout";
// import i18n for translation
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import Recipe from "./components/Recipe"; // Import the Recipe component

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

function App() {
  return (
    <Layout>
      <I18nextProvider i18n={i18next}>
        <Routes>
          {MainRoutes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
             {/* Add a route for Recipe details page */}
             <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </I18nextProvider>
    </Layout>
  );
}

export default App;
