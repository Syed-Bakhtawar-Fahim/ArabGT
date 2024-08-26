import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Specs.css'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Specs = () => {
  return (
    <>
      <div className='Specs'>
        <div className="sp-title">
          <h2>Car Specifications</h2>
        </div>
        <div className="specslider">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="specslide">
                <img src="./assets/main.png" alt="" />
                <div className="info">
                  <div className="name">
                    <h3>BMW Z4 2023</h3>
                  </div>
                  <div className="pricing">
                    <div className="price">
                      <h3>$52.800</h3>
                    </div>
                    <div className="learn">
                      <button className='learn' >Learn More</button>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="specslide">
                <img src="./assets/main.png" alt="" />
                <div className="info">
                  <div className="name">
                    <h3>BMW Z4 2023</h3>
                  </div>
                  <div className="pricing">
                    <div className="price">
                      <h3>$52.800</h3>
                    </div>
                    <div className="learn">
                      <button className='learn' >Learn More</button>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="specslide">
                <img src="./assets/main.png" alt="" />
                <div className="info">
                  <div className="name">
                    <h3>BMW Z4 2023</h3>
                  </div>
                  <div className="pricing">
                    <div className="price">
                      <h3>$52.800</h3>
                    </div>
                    <div className="learn">
                      <button className='learn' >Learn More</button>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>

          </Swiper>

        </div>


      </div>
    </>
  )
}

export default Specs
