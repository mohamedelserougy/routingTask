import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div>
      <div className="contact py-5  ">
        <div className="container">
          <div className="inner h-100 d-flex flex-column align-items-center justify-content-center  ">
            <h1 className=" fw-bold text-uppercase">contact section</h1>

            <div className="icon mt-2 position-relative">
              <FontAwesomeIcon icon={faStar} />
            </div>

            <form action="" className="w-50 mt-5">
              <div className=" mb-5 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="userName"
                />
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder=" userAge"
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  className="form-control"
                  placeholder=" userEmail"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  className="form-control"
                  placeholder="userPassword"
                />
              </div>

              <button type="submit" className="btn bg-black text-white">
                send meesage
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
