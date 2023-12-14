import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import common_de from "./translations/de_DE/common.json";
import common_en from "./translations/en_US/common.json";
import common_ar from "./translations/ar_MA/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "de", // language to use
  resources: {
    de: {
      common: common_de, // 'common' is our custom namespace
    },
    en: {
      common: common_en,
    },
    ar: {
      common: common_ar,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
