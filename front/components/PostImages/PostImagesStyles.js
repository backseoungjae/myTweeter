import styled from '@emotion/styled';

export const ImageBox = styled.div`
  cursor: pointer;
  max-width: 768px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

// 이미지 하나일때
export const Image = styled.img`
  width: 100%;
  height: auto;
`;

// 이미지 2개 일떄
export const Images = styled.img`
  width: 50%;
  height: auto;
`;

// 더보기 버튼
export const MoreBox = styled.div`
  display: inline-block;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PlusButton = styled.p`
  margin-bottom: 10px;
`;
