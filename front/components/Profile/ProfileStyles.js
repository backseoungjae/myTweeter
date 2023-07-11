import styled from "@emotion/styled";

export const Container = styled.div``;

export const Header = styled.div`
  border: 1px solid #ececec;
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
`;

export const ProfileBox = styled.div`
  width: 100%;
  padding-bottom: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;

  > p {
    font-size: 14px;
    color: #333;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
      font-size: 14px;
      color: #333;
    }
    > button {
      cursor: pointer;
      outline: none;
      background-color: #fff;
      border: 1px solid #ececec;
      border-radius: 6px;
      font-size: 14px;
      color: #333;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #294db1;
        border: 1px solid #294db1;
      }
    }
    > div {
      > button {
        cursor: pointer;
        outline: none;
        background-color: #fff;
        border: 1px solid #ececec;
        border-radius: 6px;
        font-size: 14px;
        color: #333;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: #294db1;
          border: 1px solid #294db1;
        }
        &:last-child {
          margin-left: 10px;
          &:hover {
            color: #ff5360;
            border: 1px solid #ff5360;
          }
        }
      }
    }
  }
`;

export const EditInput = styled.input`
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ececec;
  border-radius: 6px;
`;

export const InfoInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostLink = styled.a`
  cursor: pointer;
  outline: none;
  width: 33%;
  text-align: center;
  background-color: #fff;
  border: 0;
  border-right: 1px solid #ececec;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  color: ${({ active }) => (active ? "#294db1" : "#333")};
  font-size: 14px;
  &:hover {
    color: #294db1;
  }
`;

export const TabButton = styled.button`
  cursor: pointer;
  outline: none;
  width: 33%;
  text-align: center;
  background-color: #fff;
  border: 0;
  border-right: 1px solid #ececec;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  color: ${({ active }) => (active ? "#294db1" : "#333")};
  font-size: 14px;
  &:last-of-type {
    border-right: 0;
  }
  &:hover {
    color: #294db1;
  }
`;

export const FollowListContainer = styled.div`
  margin-top: 20px;
`;
