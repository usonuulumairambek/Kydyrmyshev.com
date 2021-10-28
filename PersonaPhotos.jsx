import React from "react";
import img3 from "./images/img3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./personal.css"

function PersonaPhotos() {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img3} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default PersonaPhotos;
