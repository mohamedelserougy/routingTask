import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGolang,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className=" text-center">
      <div className="p-4 footer">
        <div className="container">
          <div className="row p-5">
            <div className="col-md-4  p-3">
              <h3 className=" text-uppercase">location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-md-4 p-3 ">
              <h3>AROUND THE WEB</h3>
              <ul className=" list-unstyled p-3 d-flex justify-content-center gap-4">
                <li>
                  <div className="inner">
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <FontAwesomeIcon icon={faGolang} />
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-4 ">
              <h3 className=" text-uppercase">about freelance</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="end p-4 mb-0">Copyright © Your Website 2021</p>
    </div>
  );
}
