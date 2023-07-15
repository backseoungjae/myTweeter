import styled from '@emotion/styled';
import { LuDelete } from 'react-icons/lu';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

// 게시글 작성 CSS

export const AddPostInner = styled.div`
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
`;

export const AddPostInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  resize: none;
  outline: none;
  &::placeholder {
    transition: all 0.3s ease-in-out;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const HideInput = styled.input`
  display: none;
`;

export const ButtonBox = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: right;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: 1px solid #ececec;
  border-radius: 6px;
  color: #333;
  padding: 5px 10px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #294db1;
    border: 1px solid #294db1;
  }
`;

// 이미지 관련 CSS

export const ImageInner = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  gap: 10px;
`;

export const ImageBox = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
`;

export const RemoveButton = styled(LuDelete)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 2px;
  right: 2px;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  color: #fff;
  padding: 2px 3px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff5360;
  }
`;
