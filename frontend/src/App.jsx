import { Routes, Route } from "react-router-dom";
// import "../src/assets/styles/App.css"

import MainRoutes from "./components/MainRoutes";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {MainRoutes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
