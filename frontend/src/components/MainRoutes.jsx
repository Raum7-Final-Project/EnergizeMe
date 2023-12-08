import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";
import ProfilePage from "../pages/ProfilePage";
import ProgressPage from "../pages/ProgressPage";
import FitnessPage from "../pages/FitnessPage";
import DietPage from "../pages/DietPage";

const MainRoutes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/login", element: <Login />, id: 2 },
  { path: "/register", element: <Register />, id: 3 },
  { path: "/user/*", element: <ProfilePage />, id: 4 },
  { path: "/progress", element: <ProgressPage />, id: 5 },
  { path: "/fitness", element: <FitnessPage />, id: 6 },
  { path: "/diet", element: <DietPage/>, id: 7 },

  { path: "*", element: <NotFound />, id: 8 },
];

export default MainRoutes;
