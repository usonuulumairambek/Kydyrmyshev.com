import React, {useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img4 from "./images/img4.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img1 from "./images/img1.webp";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.webp";
import img7 from "./images/img7.webp";
import img8 from "./images/img8.webp";
import img9 from "./images/img9.webp";
import img10 from "./images/img10.webp";

import "./photo.css";
import Aos from 'aos';
import "aos/dist/aos.css";

const Photo = () => {
    useEffect(() => {
        Aos.init({duration:2000 });
       }, [])
  return (
    <div  className="photo">
      <div data-aos="fade-up"
    data-aos-duration="3000" className="photo__wrapper">
        <Carousel>
        {/* <div>
            <img src={img1} alt='some value'  />
            <p className="legend"></p>
          </div>
          <div> */}
          <div>
            <img alt='some value' src={img1} />
          </div>
          <div>
            <img src={img2} alt='some value'  />
          </div>
          <div>
            <img src={img3} alt='some value'  />    
          </div>
          <div>
            <img src={img4} alt='some value'  />
          </div>
          <div>
            <img src={img5} alt='some value'  />
          </div>
          <div>
            <img src={img6} alt='some value'  />
          </div>
          <div>
            <img className="img7" src={img7} alt='some value'  />
          </div>
          <div>
            <img src={img8} alt='some value'  />
          </div>
          <div>
            <img src={img9} alt='some value'  />
          </div>
          <div>
            <img src={img10} alt='some value'  />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Photo;
