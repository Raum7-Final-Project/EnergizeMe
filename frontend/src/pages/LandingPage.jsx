import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import videos from "../components/Media";
import _ from "lodash";

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
  // für die Videos
  const [selectedCategory, setSelectedCategory] = useState("all");
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

  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  const randomVideos = _.shuffle(filteredVideos);

  const showAllVideos = randomVideos.map((video) => (
    <div key={video.id} className={STYLE.Box}>
      <ReactPlayer url={video.videoUrl} height={300} width={400} />
    </div>
  ));

  return (
    <>
      <section className={STYLE.container}>
        <img src={LandingImage1}></img>
        <section className={STYLE.contentContainer}>
          <div className={STYLE.Box}>
            <p className={STYLE.h1}>
              {username == "" ? "Hallo, Gast" : `Hallo, ${username}`}
            </p>
          </div>
          {/*Videos */}
          <button onClick={() => setSelectedCategory("beginner")}>
            Anfänger
          </button>
          <button onClick={() => setSelectedCategory("advanced")}>
            Fortgeschritten
          </button>
          <button onClick={() => setSelectedCategory("all")}>
            Zeige alle Videos
          </button>
          <div>{showAllVideos}</div>
          {/* Nutrition */}
          <div className={STYLE.Box}>
            <div>
              <p className={STYLE.h3}>Tipps: Rezepte für gesunde Mahlzeiten</p>
              <img className={STYLE.img2} src={LandingImage2}></img>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default LandingPage;
