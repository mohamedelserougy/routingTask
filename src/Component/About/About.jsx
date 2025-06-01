import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div className="vh-100">
      <div className="about">
        <div className="container">
          <div className="inner vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1 className=" fw-bold text-uppercase">about component</h1>
            <div className="icon mt-2 position-relative">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="row text-center mt-5">
              <div className="col-sm-12 col-md-6">
                <p className=" fs-5">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <p className=" fs-5">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
