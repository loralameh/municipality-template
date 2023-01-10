import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// const fadeImages = [
//   {
//     url: "images/slide_5.jpg",
//     caption: "First Slide",
//   },
//   {
//     url: "images/slide_6.jpg",
//     caption: "Second Slide",
//   },
//   {
//     url: "images/slide_7.jpg",
//     caption: "Third Slide",
//   },
// ];

const Slideshow = (props) => {
  return (
    <div className="slide-container">
      <Fade>
        {props.images.map((image, index) => (
          <div className="each-fade" key={index}>
            <div
              className="image-container"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <img src={image} />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
