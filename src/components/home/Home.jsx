import React, {useEffect} from 'react';
import "./home.css";
import homeImg from "./images/homeImg.jpg";
import Aos from 'aos';
import "aos/dist/aos.css";
import Contacts from '../contacts/Contacts';

// const Home = () => {


//     return (
//         <div className="home">
//             <div className="home__wrapper">
//                 <div className="home__container">
//                     <div  data-aos="fade-up" className="home__container-info">
//                         <h2  data-aos="zoom-in">Ruslan <br /> Kydyrmyshev</h2>
//                         <p>Counselor to The President of the Kyrgyz Republic <br />

//                             President of the World Federation of National <br /> Wrestling @wef_global

//                         </p>
//                     </div>
//                     <div data-aos="flip-up" className="home__container-photo">
//                         <img src={homeImg} alt="" />
//                     </div>
//                 </div>
//             </div>
//           <Contacts />
//             <div className="home__footer">
//                 <p>©2021 Ruslan Kydyrmyshev</p>
//             </div>
//         </div>
//     );
// };

// export default Home;


function Home() {
    useEffect(() => {
        Aos.init({duration:2000 });
       }, [])
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <div  data-aos="fade-up" className="home__container-info">
            <h1 className="home__container-tittle">Ruslan Kydyrmyshev</h1>
            <p className="home__container-subtittle">
              Counselor to The President of the Kyrgyz Republic President of the
              World Federation of National Wrestling @wef_global
            </p>
          </div>
          <div  data-aos="flip-up" className="home__container-photo">
            <img src={homeImg} alt="" />
          </div>
        </div>
      </div>
      <Contacts />
      <div className="home__footer">
        <p>©2021 Ruslan Kydyrmyshev</p>
      </div>
    </div>
  );
}

export default Home;
