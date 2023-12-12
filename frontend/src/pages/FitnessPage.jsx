import {
  HiOutlineUser,
  HiOutlineBolt,
  HiOutlineClock,
  HiOutlineFaceSmile,
} from "react-icons/hi2";
import ProgressImage1 from "../assets/images/FitzSoloPractice.svg";
import ProgressImage2 from "../assets/images/HandsPhone.svg";

const FitnessPage = () => {
  const STYLE = {
    container: `bg-[#F2F2ED] bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col overflow-auto`,

    heading: `text-4xl text-[#c3c3b8] text-center font-semibold pt-3`,

    startBox: `flex flex-col justify-start pt-1 px-2`,
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

  fetch(
    "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUqjwF8rxRsotnojGl4gM0Zw&key=AIzaSyDyiKsXqQtyM-Z-K6RYD7RywmFf9vdJMkg"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return (
    <>
      <section className={STYLE.container}>
        <p className={STYLE.heading}>Fitness</p>

        {/*Muscles*/}
        <div className={STYLE.startBox}>
          <p className={STYLE.h3}>Bevorzugte Muskelgruppen</p>
          <div className={STYLE.startBox2}>
            <ul className={STYLE.ul}>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineUser className={STYLE.icon} />
                  <div className={STYLE.h4}>Bauch</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineUser className={STYLE.icon} />
                  <div className={STYLE.h4}>Arme</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineUser className={STYLE.icon} />
                  <div className={STYLE.h4}>Bauch, Beine, Po</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineUser className={STYLE.icon} />
                  <div className={STYLE.h4}>Po</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineUser className={STYLE.icon} />
                  <div className={STYLE.h4}>Beine</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineUser className={STYLE.icon} />
                  <div className={STYLE.h4}>Beckenboden</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineUser className={STYLE.icon} />
                  <div className={STYLE.h4}>Ganzkörper</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineUser className={STYLE.icon} />
                  <div className={STYLE.h4}>Rücken</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineUser className={STYLE.icon} />
                  <div className={STYLE.h4}>Unterkörper</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineUser className={STYLE.icon} />
                  <div className={STYLE.h4}>Oberkörper</div>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/*Training*/}
        <div className={STYLE.startBox}>
          <p className={STYLE.h3}>wie möchtest du trainieren?</p>
          <div className={STYLE.startBox2}>
            <ul className={STYLE.ul}>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineBolt className={STYLE.icon2} />
                  <div className={STYLE.h4}>Figurtraining</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineBolt className={STYLE.icon2} />
                  <div className={STYLE.h4}>Stretching</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineBolt className={STYLE.icon2} />
                  <div className={STYLE.h4}>Yoga</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineBolt className={STYLE.icon2} />
                  <div className={STYLE.h4}>HIIT</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineBolt className={STYLE.icon2} />
                  <div className={STYLE.h4}>Krafttraining</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineBolt className={STYLE.icon2} />
                  <div className={STYLE.h4}>Cardio</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineBolt className={STYLE.icon2} />
                  <div className={STYLE.h4}>Pilates</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineBolt className={STYLE.icon2} />
                  <div className={STYLE.h4}>Tanzen</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineBolt className={STYLE.icon2} />
                  <div className={STYLE.h4}>Entspannung</div>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/*Time*/}
        <div className={STYLE.startBox}>
          <p className={STYLE.h3}>wie lange möchtest du trainieren?</p>
          <div className={STYLE.startBox2}>
            <ul className={STYLE.ul}>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineClock className={STYLE.icon3} />
                  <div className={STYLE.h4}>10</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineClock className={STYLE.icon3} />
                  <div className={STYLE.h4}>10-20</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineClock className={STYLE.icon3} />
                  <div className={STYLE.h4}>20-30</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineClock className={STYLE.icon3} />
                  <div className={STYLE.h4}>30-50</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineClock className={STYLE.icon3} />
                  <div className={STYLE.h4}>60</div>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/*Level*/}
        <div className={STYLE.startBox}>
          <p className={STYLE.h3}>Level</p>
          <div className={STYLE.startBox2}>
            <ul className={STYLE.ul}>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineFaceSmile className={STYLE.icon} />
                  <div className={STYLE.h4}>Anfängerfreundlich</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineFaceSmile className={STYLE.icon} />
                  <div className={STYLE.h4}>Mittel</div>
                </li>
              </div>
              <div className={STYLE.startBox3}>
                <li className={STYLE.li}>
                  <HiOutlineFaceSmile className={STYLE.icon} />
                  <div className={STYLE.h4}>Advance</div>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* Workout-recommendation */}
        <div className={STYLE.startBox}>
          <p className={STYLE.h3}>Workout-Empfehlung für dich</p>
          <img className={STYLE.img}></img>
        </div>

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
