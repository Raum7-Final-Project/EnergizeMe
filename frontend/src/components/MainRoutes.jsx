import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";
import ProfilePage from "../pages/ProfilePage";

const MainRoutes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/login", element: <Login />, id: 2 },
  { path: "/register", element: <Register />, id: 3 },
  { path: "/user/*", element: <ProfilePage />, id: 4 },

  { path: "*", element: <NotFound />, id: 5 },
];

export default MainRoutes;
