import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { GiShare } from 'react-icons/gi';
import { FaCommentDots } from 'react-icons/fa';
import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ececec;
  border-radius: 6px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > p {
    font-size: 15px;
    color: #333;
  }
`;

// 이미지 박스

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

// 콘텐츠 버튼들

export const ButtonBox = styled.div`
  display: ${({ active }) => (active ? 'none' : 'flex')};
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

// 팔로우 버튼
export const FollowButton = styled.button`
  cursor: pointer;
  outline: 0;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  padding: 5px 10px;
  box-sizing: border-box;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #294db1;
    border: 1px solid #294db1;
  }
`;

// 아이콘 박스

export const IconInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ececec;
  padding: 10px;
  box-sizing: border-box;
  > div {
    cursor: pointer;
    width: 30%;
    text-align: center;
    border-right: 1px solid #ececec;
    &:last-child {
      border-right: 0;
    }
  }
`;

export const LikeIcons = styled(FcLike)`
  width: 20px;
  height: 20px;
`;

export const UnLikeIcons = styled(FcLikePlaceholder)`
  width: 20px;
  height: 20px;
`;

export const CommentIcons = styled(FaCommentDots)`
  width: 20px;
  height: 20px;
`;

export const ShareIcons = styled(GiShare)`
  width: 20px;
  height: 20px;
`;

// 댓글 개수

export const CommentNumber = styled.p`
  color: #333;
  font-size: 14px;
`;

// 닉네임 링크
export const NicknameLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff5360;
  }
`;

// 단일 게시글 링크
export const SinglePostLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #294db1;
  }
`;

// 댓글 리스트

export const CommentsBox = styled.div`
  margin: 20px 0;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ececec;
  border-radius: 6px;
  white-space: pre-wrap; /* CSS3*/
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-all; /* Internet Explorer 5.5+ */

  > p {
    font-size: 15px;
    color: #333;
    line-height: 1.71;
  }
`;
