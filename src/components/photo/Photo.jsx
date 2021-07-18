import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img4 from './images/img4.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img1 from './images/img1.webp'
import './photo.css'
const Photo = () => {
    return (
        <div className="photo">
            <div className="photo__wrapper">

                <Carousel>
                    <div>
                        <img src={img1} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={img2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={img3} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={img4} />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>

            </div>
        </div>
    );
};

export default Photo;