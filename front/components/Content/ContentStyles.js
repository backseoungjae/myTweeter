import styled from '@emotion/styled';

// 콘텐트 박스
export const ContentBox = styled.div`
  border: 1px solid #ececec;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  white-space: pre-wrap; /* CSS3*/
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-all; /* Internet Explorer 5.5+ */
`;

export const Content = styled.pre`
  color: #333;
  font-size: 14px;
`;

export const TagLink = styled.span`
  cursor: pointer;
  color: #294db1;
`;

// 콘텐트 수정

export const EditInner = styled.div``;

export const EditTextarea = styled.textarea`
  outline: 0;
  border: 1px solid #dcdcdc;
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

// 콘텐츠 버튼들

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: 0;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  padding: 5px 10px;
  box-sizing: border-box;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  &:last-of-type {
    margin-left: 5px;
  }
  &:hover {
    color: #294db1;
    border: 1px solid #294db1;
  }
`;
