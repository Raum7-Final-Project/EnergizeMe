import { Link } from "react-router-dom";
// import LandingImage from "../assets/images/chase-kinney-FMQBLyhD2HU-unsplash.jpg"

const HomePage = () => {
  const STYLE = {
    container: `bg-[url('https://images.unsplash.com/photo-1606903037631-f09fd0bd74b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat h-screen w-screen grid grid-rows-1 gap-2`,
    headingBox: `flex flex-col items-center justify-center`,
    heading: `text-4xl text-white bg-black`,
    startBox: `flex flex-col items-center`,
    button: `bg-white w-[150px] text-center p-3 rounded-full m-4 font-bold text-xl`,
  };

  return (
    <div className={STYLE.container}>
      <div className={STYLE.headingBox}>
        <h2 className={STYLE.heading}>Fitness Tracker App</h2>
      </div>

      <div className={STYLE.startBox}>
        <Link to="/login" className={STYLE.button}>
          Anmelden
        </Link>
        <p className="text-white">Du hast bereits ein Konto?</p>
        <Link to="/register" className={STYLE.button}>
          Registrieren
        </Link>
      </div>
    </div>
  );
};

export default HomePage;