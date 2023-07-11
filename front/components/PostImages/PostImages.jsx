import React, { useCallback, useState } from 'react';
import * as S from './PostImagesStyles';
import ZoomImage from '../ZoomImage';

export default function PostImages({ images }) {
  const [zoom, setZoom] = useState(false);

  const handleZoom = useCallback(() => {
    setZoom((prev) => !prev);
  }, []);

  if (images?.length === 1) {
    return (
      <>
        <S.ImageBox onClick={handleZoom}>
          <S.Image src={images[0].src} />
        </S.ImageBox>
        {zoom && <ZoomImage handleZoom={handleZoom} images={images} />}
      </>
    );
  }

  if (images?.length === 2) {
    return (
      <>
        <S.ImageBox onClick={handleZoom}>
          <S.Images src={images[0].src} />
          <S.Images src={images[1].src} />
        </S.ImageBox>
        {zoom && <ZoomImage handleZoom={handleZoom} images={images} />}
      </>
    );
  }

  return (
    <>
      <S.ImageBox onClick={handleZoom}>
        <S.Images
          role="presentation"
          style={{ width: '50%' }}
          src={images[0].src}
          alt={images[0].src}
        />
        <S.MoreBox>
          <S.PlusButton>+</S.PlusButton>
          <br />
          {images.length - 1}개의 사진 더 보기
        </S.MoreBox>
      </S.ImageBox>
      {zoom && <ZoomImage handleZoom={handleZoom} images={images} />}
    </>
  );
}
