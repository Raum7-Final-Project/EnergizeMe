import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

  const STYLE = {
    container: `h-screen bg-[#DADACA] grid grid-rows-5 items-center justify-items-center`,
    headingContainer: ``,
  };

  return (
    <div className={STYLE.container}>
      <div className="row-span-3">
        <h2 className="text-2xl">Erfolgreich verifiziertss</h2>
        <button>
          <a href="/login"> Log dich ein 😠</a>
        </button>
      </div>
      <div className="text-center">
        <p></p>
      </div>
    </div>
  );
};

export default VerificationPage;
