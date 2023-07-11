import React, { useEffect, useState } from 'react';
import * as S from './ZoomImageStyles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ZoomImage({ handleZoom, images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    afterChange: (currentSlide) => {
      setCurrentSlide(currentSlide);
    },
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <S.Overlay>
      <S.Header>
        <h1>상세 이미지</h1>
        <S.CancelIcons onClick={handleZoom} />
      </S.Header>
      <S.SlickWrapper>
        <Slider {...settings}>
          {images.map((image) => (
            <S.ImgWrapper key={image.src}>
              <img
                src={image.src.replace(/\/thumb\//, '/original/')}
                alt={image.src}
              />
            </S.ImgWrapper>
          ))}
        </Slider>
        <S.Indicator>
          <div>
            <p>
              {currentSlide + 1} / {images.length}
            </p>
          </div>
        </S.Indicator>
      </S.SlickWrapper>
    </S.Overlay>
  );
}
