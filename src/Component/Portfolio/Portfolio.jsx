import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import port1 from "../../assets/images/poert1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Portfolio() {
  let [isOpen, setIsOpen] = useState(false);
  let [imgSrc, setImgSrc] = useState(" ");

  let openLightbox = (src) => {
    setImgSrc(src);
    setIsOpen(true);
  };

  let closeLightbox = () => {
    setIsOpen(false);
    setImgSrc(" ");
  };

  useEffect(() => {
    document.title = "portfolio";
  }, []);

  return (
    <div className="portfolio py-5 ">
      <div className="container">
        <div className="inner  d-flex flex-column align-items-center">
          <h2 className=" text-uppercase fw-bold">portfolio component</h2>
          <div className="icon mt-2 position-relative">
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>

        <div className="row mt-5  g-4">
          <div className="col-md-4">
            <div
              className="image position-relative"
              onClick={() => openLightbox(port1)}
            >
              <img src={port1} className=" w-100 rounded-3" alt="" />
              <div className="layer position-absolute bg-white w-100 h-100 top-0 rounded-3 opacity-0 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faPlus} size="5x" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="image position-relative"
              onClick={() => openLightbox(port2)}
            >
              <img src={port2} className=" w-100 rounded-3" alt="" />
              <div className="layer position-absolute bg-white w-100 h-100 top-0 rounded-3 opacity-0 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faPlus} size="5x" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="image position-relative"
              onClick={() => openLightbox(port3)}
            >
              <img src={port3} className=" w-100 rounded-3" alt="" />
              <div className="layer position-absolute bg-white w-100 h-100 top-0 rounded-3 opacity-0 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faPlus} size="5x" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="image position-relative"
              onClick={() => openLightbox(port1)}
            >
              <img src={port1} className=" w-100 rounded-3" alt="" />
              <div className="layer position-absolute bg-white w-100 h-100 top-0 rounded-3 opacity-0 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faPlus} size="5x" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="image position-relative"
              onClick={() => openLightbox(port2)}
            >
              <img src={port2} className=" w-100 rounded-3" alt="" />
              <div className="layer position-absolute bg-white w-100 h-100 top-0 rounded-3 opacity-0 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faPlus} size="5x" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="image position-relative"
              onClick={() => openLightbox(port3)}
            >
              <img src={port3} className=" w-100 rounded-3" alt="" />
              <div className="layer position-absolute bg-white w-100 h-100 top-0 rounded-3 opacity-0 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faPlus} size="5x" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="lightBox position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center"
          onClick={closeLightbox}
        >
          <img
            className=" rounded-3"
            src={imgSrc}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
