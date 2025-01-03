import { FC } from 'react';

import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const Hero: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
  };

  return (
    <Container>
      <SliderWrapper>
        <SliderContainer>
          <Slider {...settings}>
            <ImageContainer>
              <Image $image={'./img/banner-accessories.png'} />
            </ImageContainer>
            <ImageContainer>
              <Image $image={'./img/banner-phones.png'} />
            </ImageContainer>
            <ImageContainer>
              <Image $image={'./img/banner-tablets.png'} />
            </ImageContainer>
          </Slider>
        </SliderContainer>
      </SliderWrapper>
    </Container>
  );
};

const Container = styled.section`
  margin-top: 40px;
  grid-column: 1/25;
  justify-content: center;
  text-align: center;
`;

const SliderContainer = styled.div`
  display: block;
  width: 100%;
  height: 200px;

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.div<{ $image: string }>`
  background-size: cover;
  background-image: url(${({ $image }) => $image});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 120px;

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const SliderWrapper = styled.div`
  margin: 0 60px;
`;
