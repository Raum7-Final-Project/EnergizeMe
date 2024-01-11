import { Link } from "react-router-dom";
import ProgressImage1 from "../assets/images/FitzSoloPractice.svg";
import ProgressImage2 from "../assets/images/HandsPhone.svg";
import ReactPlayer from "react-player/youtube";
import videos from "../components/Media";
import _ from "lodash";
import { useState } from "react";

const FitnessPage = () => {
  const STYLE = {
    container: `bg-[#F2F2ED] bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col overflow-auto`,
    Box: `flex flex-col justify- pt-1`,

    heading: `text-4xl text-[#c3c3b8] text-center font-semibold pt-3`,

    startBox: `flex flex-col justify-start pt-1 px-2 p-6`,
    h3: `text-lg ml-2 font-semibold`,

    startBox2: `justify-start pt-1 px-2`,
    startBox3: `justify-start py-1 px-2 mr-1 mb-1 bg-white rounded-md`,
    ul: `flex flex-wrap items-center`,
    li: `flex flex-wrap items-center`,
    icon: `text-[18px] text-white bg-[#8F8F7A] rounded`,
    icon2: `text-[18px] text-white bg-[#7A8F8F] rounded`,
    icon3: `text-[18px] text-white bg-[#8F7A8F] rounded`,
    h4: `flex flex-wrap text-md pl-1`,

    img: `bg-[url('https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat h-56 w-screen`,

    startBox4: `grid grid-cols-2 gap-3 items-center w-full px-2 pt-1`,

    img2: `bg-[#b8c3c3]  bg-cover bg-center bg-no-repeat h-56 w-screen`,

    img3: `bg-[#c3c3b8]  bg-cover bg-center bg-no-repeat h-56 w-screen`,
  };
  /* videos/mediaplayer */

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  // randomisiert die videos
  const randomVideos = _.shuffle(filteredVideos);

  // setzt die gerenderten videos auf 0
  let renderedVideos = 0;

  // map funktion welche nur 7 videos rendert
  const showAllVideos = randomVideos.map((video) => {
    if (renderedVideos <= 6) {
      renderedVideos++;
      return (
        <div key={video.id} className={STYLE.Box}>
          <ReactPlayer url={video.videoUrl} height={280} width={390} />
        </div>
      );
    }
    return null;
  });

  return (
    <>
      <section className={STYLE.container}>
        <p className={STYLE.heading}>Fitness</p>

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

        {/* Progress + Favorite */}
        <div className={STYLE.startBox4}>
          <div>
            <p className={STYLE.h3}>dein Fortschritt</p>
            <img className={STYLE.img2} src={ProgressImage1}></img>
          </div>
          <div>
            <p className={STYLE.h3}>gespeicherte Daten</p>
            <img className={STYLE.img3} src={ProgressImage2}></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default FitnessPage;
