import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.scss';

export const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="hero mb">
      <div className="slider">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div
                style={{
                  backgroundImage: 'url("./img/banner-accessories.png")',
                }}
                className="slider__img"
              />
            </div>
            <div>
              <div
                style={{ backgroundImage: 'url("./img/banner-phones.png")' }}
                className="slider__img"
              />
            </div>
            <div>
              <div
                style={{ backgroundImage: 'url("./img/banner-tablets.png")' }}
                className="slider__img"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>

  );
};
