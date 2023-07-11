import styled from '@emotion/styled';

export const Container = styled.form`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
`;

export const Textarea = styled.textarea`
  outline: 0;
  border: 0;
  border-bottom: 1px solid #dcdcdc;
  resize: none;
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  color: #333;
  font-size: 14px;
  &::placeholder {
    transition: all 0.3s ease-in-out;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 15px;
  text-align: right;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  color: #333;
  &:hover {
    color: #294db1;
    border: 1px solid #294db1;
  }
  &:first-of-type {
    margin-right: 10px;
    &:hover {
      color: #ff5360;
      border: 1px solid #ff5360;
    }
  }
`;
