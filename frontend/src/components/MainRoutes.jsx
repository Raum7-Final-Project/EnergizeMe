import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";

const MainRoutes = [
  { path: "/", element: <Login />, id: 1 },
  { path: "/register", element: <Register />, id: 2 },

  { path: "*", element: <NotFound />, id: 5 },
];

export default MainRoutes;
