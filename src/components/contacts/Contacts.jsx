import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contakts.css";
function Contacts() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      {/* <form action="./telegram.php" method="POST"> */}

      <div data-aos="zoom-in" className="home__contacts">
        <form action="#" method="POST">
          <legend>CONTACT US</legend>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id
              name="phone"
              placeholder="phone number"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id
              name="email"
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <textarea
              name="msg"
              className="form-control"

              placeholder="Enter your message"
              defaultValue={""}
            />
          </div>
        
        </form>
      
          <button className="form__btn">Send</button>
      </div>
    </div>
  );
}

export default Contacts;
