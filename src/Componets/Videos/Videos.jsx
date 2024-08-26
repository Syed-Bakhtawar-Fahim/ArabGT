import React from 'react'
import './Videos.css'

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
    { 
     src: './assets/v1.jpg',
     alt: 'Logo 1',
     title: 'Get ready to laugh with the most amazing drag race challenge',
    },
    {
      src: './assets/v2.jpg',
      alt: 'Logo 2',
      title: 'One of the most amazing crazy drift challenges',
    },
    {
      src: './assets/v3.png',
      alt: 'Logo 3' ,
      title: 'Watch the crash test of Volvos largest and smallest car',
    },
    { 
      src: './assets/v1.jpg',
      alt: 'Logo 1',
      title: 'Get ready to laugh with the most amazing drag race challenge',
     },
     {
       src: './assets/v2.jpg',
       alt: 'Logo 2',
       title: 'One of the most amazing crazy drift challenges',
     },
     {
       src: './assets/v3.png',
       alt: 'Logo 3' ,
       title: 'Watch the crash test of Volvos largest and smallest car',
     },
];



const Videos = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
};

  return (
    <div className='videos'> 
        <div className="v-title">
                <h2>Videos</h2>
            </div>
        <div className="vcontainer">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div className="vcard">
                <div key={index} className="video-container">
                  <img src={logo.src} alt={logo.alt} className="video" id={logos.id} />
                </div>
                <div className="card-content">
                  <h3 className='vtxt'>{logo.title}</h3>
                </div>
              </div>
      ))}
          </Slider>
        </div>
      
    </div>
  )
}

export default Videos
