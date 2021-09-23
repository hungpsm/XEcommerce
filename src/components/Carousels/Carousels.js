import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "components/Carousels/Carousels.scss";

function Carousels() {
  return (
    <div className="carousel">
      <div className="carousel-slide">
        <Carousel>
          <Carousel.Item>
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/banner/9e/bb/bf/7062f0f056d1076081c94b37af003eb6.png.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              // className="d-block w-100"
              src="https://salt.tikicdn.com/cache/w1080/ts/banner/05/93/af/1b9e7f4be74abf1b618f7d1512dba5bb.png.webp"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              // className="d-block w-100"
              src="https://salt.tikicdn.com/cache/w1080/ts/banner/0b/e8/b0/d2fc6fe9d9b46e0515b1727764b58a8a.png.webp"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <div className="img-responsive">
        <img
          src="https://salt.tikicdn.com/cache/w400/ts/banner/c0/31/a4/47ba4ba51aaba6d3b6bb4b250b117065.png.webp"
          alt="Four slide"
        />
      </div> */}
    </div>
  );
}

export default Carousels;
