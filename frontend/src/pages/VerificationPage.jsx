import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import img_sucess from "../assets/images/success.png";

const VerificationPage = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await axios.get(
          `http://localhost:3333/api/users/verify/${id}/${token}`
        );
      } catch (error) {
        console.error("Fehler bei der Verifizierung:", error);

        navigate("/error");
      }
    };

    verifyUser();
  }, [id, token, navigate]);
  // default bg-color: bg-[#DADACA]
  const STYLE = {
    container: `h-screen bg-gray-200 grid grid-rows-5 items-center justify-items-center`,
    headingContainer: ``,
    alertBox: `rounded w-[320px] h-[250px] flex flex-col justify-center items-center pt-1 bg-slate-200 text-center drop-shadow-2xl`,
    img: `h-[100px]`,
    button: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`,
  };

  return (
    <div className={STYLE.container}>
      <div className="row-span-3">
        <div className={STYLE.alertBox}>
          <img
            src={img_sucess}
            alt="Konto wurde bestätigt Bild"
            className={STYLE.img}
          />
          <h2 className="text-2xl text-center m-2.5">
            Dein Konto wurde bestätigt!
          </h2>
          <button className={STYLE.button}>
            <Link to={`/login`}>Zum Login</Link>
          </button>
        </div>
      </div>
      <div className="text-center">
        <p></p>
      </div>
    </div>
  );
};

export default VerificationPage;
