import React, { useEffect } from "react";
import homeImage from "../../assets/images/avataaars.svg";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  useEffect(() => {
  document.title = 'Home';
}, []);
  return (
    <div className="home">
      <div className="container">
        <div className="inner vh-100 d-flex flex-column align-items-center justify-content-center">
          <div className="images w-25">
            <img src={homeImage} alt="" />
          </div>
          <h3>start framework</h3>
          <div className="icon mt-2 position-relative">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p className=" fw-medium">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </div>
  );
}
