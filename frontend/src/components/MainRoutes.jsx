import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";
import ProfilePage from "../pages/ProfilePage";
import ProgressPage from "../pages/ProgressPage";
import FitnessPage from "../pages/FitnessPage";
import DietPage from "../pages/DietPage";
import LandingPage from "../pages/LandingPage";
import AllFilterPage from "../pages/AllFilterPage";
import VerificationPage from "../pages/VerificationPage";
import TipsPageOne from "../pages/tips/TipsPageOne";
import TipsPageTwo from "../pages/tips/TipsPageTwo";
import TipsPageThree from "../pages/tips/TipsPageThree";
import ContactPage from "../pages/ContactPage";

const MainRoutes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/login", element: <Login />, id: 2 },
  { path: "/register", element: <Register />, id: 3 },
  { path: "/user/*", element: <ProfilePage />, id: 4 },
  { path: "/progress", element: <ProgressPage />, id: 5 },
  { path: "/fitness", element: <FitnessPage />, id: 6 },
  { path: "/diet", element: <DietPage />, id: 7 },
  { path: "/landing", element: <LandingPage />, id: 8 },
  { path: "/all", element: <AllFilterPage />, id: 9 },

  { path: "/verify/:id/:token", element: <VerificationPage />, id: 10 },

  { path: "/tips1", element: <TipsPageOne />, id: 11 },
  { path: "/tips2", element: <TipsPageTwo />, id: 12 },
  { path: "/tips3", element: <TipsPageThree />, id: 13 },
  { path: "/contact", element: <ContactPage />, id: 14 },

  { path: "*", element: <NotFound />, id: 44 },
];

export default MainRoutes;
