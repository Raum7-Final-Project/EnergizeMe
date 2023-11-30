import {Link} from "react-router-dom"

const HomePage = () => {
  // const STYLE = {

  // };

  return (
    <div>
      <div>
        PLACEHOLDER IMAGE
      </div>
      <div>
        <Link to="/login" >Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default HomePage;
