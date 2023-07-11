import styled from '@emotion/styled';
import { TiDeleteOutline } from 'react-icons/ti';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.div`
  height: 44px;
  background: #fff;
  position: relative;
  text-align: center;

  > h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;

export const CancelIcons = styled(TiDeleteOutline)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
`;

export const SlickWrapper = styled.div`
  width: 100%;
  height: calc(100% - 44px);
  background: #090909;
  padding: 0 50px;
  box-sizing: border-box;

  .slick-slide {
    width: 100%;
    height: calc(100vh - 250px);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-slide {
    img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }
`;

export const ImgWrapper = styled.div`
  padding: 30px;
  box-sizing: border-box;
  max-width: 768px;
  width: 100%;
  > img {
    width: 100%;
    height: auto;
  }
`;

export const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  > div {
    width: 75px;
    height: 30px;
    border-radius: 15px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
      color: #fff;
      font-size: 15px;
    }
  }
`;

export const Image = styled.img``;
