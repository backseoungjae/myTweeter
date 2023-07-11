import styled from '@emotion/styled';

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

  > p {
    font-size: 14px;
    color: #333;
  }
`;

export const PostInner = styled.div`
  margin-top: 20px;
`;

export const EmptyText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  text-align: center;
`;
