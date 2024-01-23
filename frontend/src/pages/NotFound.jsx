import { Link } from "react-router-dom";
import img_404 from "../assets/images/404-error.png";

const NotFound = () => {
  const STYLE = {
    container: `h-screen bg-gray-200 grid grid-rows-5 items-center justify-items-center`,
    headingContainer: ``,
    alertBox: `rounded w-[320px] h-[250px] flex flex-col justify-center items-center bg-slate-200 text-center drop-shadow-2xl`,
    img: `h-[100px]`,
    button: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`,
  };
  return (
    <div className={STYLE.container}>
      <div className="row-span-3">
        <div className={STYLE.alertBox}>
          <img
            src={img_404}
            alt="Seite wurde nicht gefunden Bild"
            className={STYLE.img}
          />
          <h2 className="text-2xl text-center m-2.5">Seite nicht gefunden!</h2>
          <button className={STYLE.button}>
            <Link to={`/landing`}>Zur Startseite</Link>
          </button>
        </div>
      </div>
      <div className="text-center">
        <p></p>
      </div>
    </div>
  );
};

export default NotFound;
