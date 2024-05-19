"use client";

// import { serverSideFunction } from "@/src/utils/server-utils";

// export default function ClientRoutePage () {
//     console.log("Client Route Rendered")
//     const result = serverSideFunction();
//     return (
//     <>
// <h1> Client Route Page </h1>
// <p>{result}</p>
//     </>
//     );
// }

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { useTheme } from "@/components/theme-provider";
// import "./ImageSlider.css";

 
export default function ImageSlider() {
    const settings = {
      dots: true,
    };
    return (
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
