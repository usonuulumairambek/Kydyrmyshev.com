import a2 from "./sport/images/1.jpg";
import a3 from "./sport/images/2.jpg";
import a4 from "./sport/images/3.jpg";
import a5 from "./sport/images/4.jpg";
import a6 from "./sport/images/5.jpg";
import a7 from "./sport/images/6.jpg";
import a8 from "./sport/images/7.jpg";
import a9 from "./sport/images/9.jpg";
import a12 from "./sport/images/12.jpg";
import a13 from "./sport/images/13.jpg";
import a16 from "./sport/images/16.jpg";
import a17 from "./sport/images/17.jpg";
import a18 from "./sport/images/18.jpg";
import a19 from "./sport/images/19.jpg";
import a20 from "./sport/images/20.jpg";
import a21 from "./sport/images/22.jpg";
import a22 from "./sport/images/23.jpg";
import a23 from "./sport/images/24.jpg";
import a24 from "./sport/images/25.jpg";
import a25 from "./sport/images/26.jpg";
import a26 from "./sport/images/27.jpg";
import a27 from "./sport/images/29.jpg";
import a28 from "./sport/images/21.jpg";
import a29 from "./sport/images/30.jpg";
import a30 from "./sport/images/31.jpg";
import a31 from "./sport/images/32.jpg";
import a32 from "./sport/images/33.jpg";
import a33 from "./sport/images/34.jpg";
import a34 from "./sport/images/35.jpg";
import a35 from "./sport/images/36.jpg";
import a36 from "./sport/images/28.jpg";
import "./sport/sport.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slider">
        <div className="slider__container">
          <img src={a2} alt="" />
          <img src={a3} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="slider__container">
          <img src={a4} alt="" />
          <img src={a5} alt="" />
        </div>
      </div>{" "}
      <div className="slider">
        <div className="slider__container">
          <img src={a6} alt="" />
          <img src={a7} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="slider__container">
          <img src={a8} alt="" />
          <img src={a9} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="slider__container">
          <img src={a12} alt="" />
          <img src={a13} alt="" />
        </div>
      </div>{" "}
      <div className="slider">
        <div className="slider__container">
          <img src={a16} alt="" />
          <img src={a17} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="slider__container">
          <img src={a18} alt="" />
          <img src={a19} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="slider__container">
          <img src={a20} alt="" />
          <img src={a21} alt="" />
        </div>
      </div>{" "}
      <div className="slider">
        <div className="slider__container">
          <img src={a22} alt="" />
          <img src={a23} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="slider__container">
          <img src={a24} alt="" />
          <img src={a25} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="slider__container">
          <img src={a26} alt="" />
          <img src={a27} alt="" />
        </div>
      </div>{" "}
      <div className="slider">
        <div className="slider__container">
          <img src={a28} alt="" />
          <img src={a29} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="slider__container">
          <img src={a30} alt="" />
          <img src={a31} alt="" />
        </div>
      </div>{" "}
      <div className="slider">
        <div className="slider__container">
          <img src={a32} alt="" />
          <img src={a33} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="slider__container">
          <img src={a34} alt="" />
          <img src={a35} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="slider__container">
          <img src={a36} alt="" />
        </div>
      </div>{" "}
      <div className="slider">
        <div className="slider__container">
          <img src={a28} alt="" />
          <img src={a29} alt="" />
        </div>
      </div>
    </Slider>
  );
}
