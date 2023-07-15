import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ececec;
  border-radius: 10px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const FollowItem = styled.div`
  width: calc((100% - 60px) / 3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ececec;
  border-radius: 6px;
  white-space: pre-wrap; /* CSS3*/
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-all; /* Internet Explorer 5.5+ */
`;

export const ItemCancelButton = styled.button`
  cursor: pointer;
  outline: none;
  width: 100%;
  border: 0;
  background-color: #fff;
  text-align: center;
  font-size: 14px;
  color: #333;
  padding-top: 20px;
  box-sizing: border-box;
  border-top: 1px solid #ececec;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff5360;
  }
`;

export const NicknameLink = styled.a`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  padding-bottom: 20px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff5360;
  }
`;
