import styled from "@emotion/styled";

export const Container = styled.form``;

export const InputBox = styled.div`
  width: 100%;
  margin-bottom: 20px;

  > label {
    font-size: 16px;
    line-height: 1.71;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 15px 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 18px;
  &::placeholder {
    font-size: 18px;
    color: #ececec;
    transition: all 0.3s ease-in-out;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  outline: none;
  border: 0;
  border-radius: 10px;
  background-color: #ff5360;
  padding: 15px 0;
  box-sizing: border-box;
  color: #fff;
  font-size: 18px;
`;

export const SignBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
