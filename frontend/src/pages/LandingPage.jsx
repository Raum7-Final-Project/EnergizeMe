import { Link } from "react-router-dom";

import {
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
  HiOutlineBolt,
  HiOutlineFaceSmile,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import LandingImage1 from "../assets/images/LandingTop.svg";
import LandingImage2 from "../assets/images/FitzHealthyLife.svg";
import LandingImage3 from "../assets/images/Sporttrainer1.png";
import LandingImage4 from "../assets/images/Sporttrainer2.png";
import LandingImage5 from "../assets/images/Sporttrainer3.png";
import LandingImage6 from "../assets/images/Sporttrainer4.png";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const STYLE = {
    container: `bg-[#F2F2ED] bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col overflow-auto`,
    contentContainer: `grid grid-rows gap-1 p-4 w-full`,

    Box: `flex flex-col justify- pt-1`,
    img: `bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat h-56 w-screen`,

    h1: `text-3xl ml-2 font-semibold`,

    Box3: `py-1 px-2 mr-1 mb-1 bg-white rounded-md`,
    Box4: `grid grid-cols-4 gap-3 w-full px-2 pt-1 `,
    Box5: `flex flex-cols items-center w-full px-2 pt-1 py-1 bg-white rounded-full hover:border-2 border-[#C3C3B8]`,

    ul: `flex flex-wrap items-center`,

    li: `flex flex-wrap items-center`,
    icon: `text-[18px] text-white bg-[#8F8F7A] rounded`,
    icon2: `text-[18px] text-white bg-[#7A8F8F] rounded`,
    icon3: `text-[18px] text-white bg-[#8F7A8F] rounded`,
    icon4: `text-[#777]`,
    button: `bg-[#8F7A8F] self-center rounded-full p-2 text-xl`,

    h3: `text-lg ml-2 font-semibold`,
    h4: `text-md pl-1`,
    h5: `text-xs text-center `,

    img2: `bg-[#b8c3c3]  bg-cover bg-center bg-no-repeat h-56 w-screen`,

    img3: `bg-[#c3c3b8]  bg-cover bg-center bg-no-repeat h-56 w-screen`,
    img4: `bg-[url('https://images.unsplash.com/photo-1603792582751-c73976204e1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat h-56 w-screen`,
    img5: `bg-[url('https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat h-56 w-screen`,

    input: `text-xs p-1 text-[#777] `,
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // die daten von dem Cookie lesen.
  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("username="));

    if (cookieValue) {
      const [, storedUsername] = cookieValue.split("=");
      setUsername(storedUsername);
    }

    const emailValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("email="));

    if (emailValue) {
      const [, storedEmail] = emailValue.split("=");
      setEmail(storedEmail);
    }
  }, []);

  return (
    <>
      <section className={STYLE.container}>
        <img src={LandingImage1}></img>
        <section className={STYLE.contentContainer}>
          <div className={STYLE.Box}>
            <p className={STYLE.h1}>{username == "" ? "Hallo, Gast" : `Hallo, ${username}`}</p>
            {/* Search */}
            <div>
              <ul>
                <div className={STYLE.Box5}>
                  <div>
                    <HiOutlineMagnifyingGlass className={STYLE.icon4} />
                  </div>
                  <li className={STYLE.li}>
                    <div className={STYLE.h4}>
                      <div className={STYLE.input}>
                        <Link to="/all">
                          Suche nach Kategorie, Dauer, Schwerigkeit...
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          {/* Mix from all genres */}
          <p className={STYLE.h3}>Häufig gesucht</p>
          <div className={STYLE.Box}>
            <div className={STYLE.Box2}>
              <ul className={STYLE.ul}>
                <div className={STYLE.Box3}>
                  <li className={STYLE.li}>
                    <HiOutlineBolt className={STYLE.icon2} />
                    <div className={STYLE.h4}>Krafttraining</div>
                  </li>
                </div>

                <div className={STYLE.Box3}>
                  <li className={STYLE.li}>
                    <HiOutlineFaceSmile className={STYLE.icon} />
                    <div className={STYLE.h4}>Anfängerfreundlich</div>
                  </li>
                </div>

                <div className={STYLE.Box3}>
                  <li className={STYLE.li}>
                    <HiOutlineUser className={STYLE.icon} />
                    <div className={STYLE.h4}>Bauch</div>
                  </li>
                </div>

                <div className={STYLE.Box3}>
                  <li className={STYLE.li}>
                    <HiOutlineBolt className={STYLE.icon2} />
                    <div className={STYLE.h4}>Entspannung</div>
                  </li>
                </div>

                <div className={STYLE.Box3}>
                  <li className={STYLE.li}>
                    <HiOutlineUser className={STYLE.icon} />
                    <div className={STYLE.h4}>Beine</div>
                  </li>
                </div>

                <div className={STYLE.Box3}>
                  <li className={STYLE.li}>
                    <HiOutlineBolt className={STYLE.icon2} />
                    <div className={STYLE.h4}>Cardio</div>
                  </li>
                </div>

                <div className={STYLE.Box3}>
                  <li className={STYLE.li}>
                    <div className={STYLE.h4}>All Filter</div>
                    <HiOutlineChevronRight
                      className={`text-black${STYLE.icon4} `}
                    />
                  </li>
                </div>
              </ul>
            </div>
          </div>

          {/* Program */}
          <div className={STYLE.Box}>
            <img className={STYLE.img}></img>
          </div>

          {/* Workout-recommendation */}
          <div className={STYLE.Box}>
            <p className={STYLE.h3}>Workout-Empfehlung für dich</p>
            <img className={STYLE.img5}></img>
          </div>

          {/* Discover */}
          <div className={STYLE.Box}>
            <p className={STYLE.h3}>Mehr Workout entdecken</p>
            <img className={STYLE.img4}></img>
          </div>

          {/* Nutrition */}
          <div className={STYLE.Box}>
            <div>
              <p className={STYLE.h3}>Tipps: Rezepte für gesunde Mahlzeiten</p>
              <img className={STYLE.img2} src={LandingImage2}></img>
            </div>
          </div>

          {/* Progress + Favorite */}
          <div className={STYLE.Box}>
            <p className={STYLE.h3}>Sporttrainer mit hohen Zugriffszahlen</p>
          </div>
          <div className={STYLE.Box4}>
            <div className="grid grid-rows-auto ">
              <img src={LandingImage3}></img>
              <h5 className={STYLE.h5}>Ergotioua</h5>
            </div>
            <div className="grid grid-rows-auto">
              <img src={LandingImage4}></img>
              <h5 className={STYLE.h5}>Sascha Huber</h5>
            </div>
            <div className="grid grid-rows-auto">
              <img src={LandingImage5}></img>
              <h5 className={STYLE.h5}>Marie Steffen</h5>
            </div>
            <div className="grid grid-rows-auto">
              <img src={LandingImage6}></img>
              <h5 className={STYLE.h5}>Heimat Krankenkasse</h5>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default LandingPage;
