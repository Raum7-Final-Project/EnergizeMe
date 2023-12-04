import {Link} from "react-router-dom"
import LandingImage from "../assets/images/chase-kinney-FMQBLyhD2HU-unsplash.jpg"

const HomePage = () => {


  return (
    <div>
      <div>
        <img src={LandingImage} alt="" />
      </div>

      <div>
        <Link to="/login" >Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default HomePage;
