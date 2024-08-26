import "./Slider.css";

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "grey" }}
      onClick={onClick}
    />
  );
}




const logos = [
    { src: './assets/benz.png', alt: 'Logo 1',id: 'benz'},
    { src: './assets/lambo.png', alt: 'Logo 2',id: 'lambo' },
    { src: './assets/nissan.png', alt: 'Logo 3' ,id: 'nissan'},
    { src: './assets/porsche1.png', alt: 'Logo 4' ,id: 'porsche'},
    { src: './assets/benz.png', alt: 'Logo 1',id: 'benz'},
    { src: './assets/lambo.png', alt: 'Logo 2',id: 'lambo' },
    { src: './assets/nissan.png', alt: 'Logo 3' ,id: 'nissan'},
    { src: './assets/porsche1.png', alt: 'Logo 4' ,id: 'porsche'},

];

const SliderComp = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='Slider'>
      <div className="container">
        <Slider {...settings}>
      {logos.map((logo, index) => (
        <div key={index} className="logo-container">
          <img src={logo.src} alt={logo.alt} className="logo" id={logos.id} />
        </div>
      ))}
      </Slider>
    </div>
    </div>
  )
}

export default SliderComp; 
