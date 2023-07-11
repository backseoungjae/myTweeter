import React, { useCallback, useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import {
  LIKE_REQUEST,
  REMOVE_POST_REQUEST,
  RETWEET_REQUEST,
  UNLIKE_REQUEST,
  UPDATE_POST_REQUEST,
} from '../../reducers/post';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../../reducers/user';

export default function PostContainer({ post, me }) {
  const dispatch = useDispatch();
  const { updatePostDone } = useSelector((state) => state.post);

  // 댓글 열기 / 닫기
  const [toggleComment, setToggleComment] = useState(false);

  // 게시글 수정하기
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(post?.content);

  // 게시글 수정 변경 버튼
  const handleEdit = useCallback(() => {
    setEdit((prev) => !prev);
  }, []);

  // 게시글 컨텐츠 수정
  const handleEditContent = useCallback((e) => {
    setEditContent(e.target.value);
  }, []);

  // 게시글 수정하기
  const handleEditPost = useCallback(
    (content) => () => {
      dispatch({
        type: UPDATE_POST_REQUEST,
        data: {
          PostId: post.id,
          content,
        },
      });
    },
    [post]
  );

  // 게시글 삭제
  const handleRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  // 팔로잉 유저 찾기
  const isFollowing = me?.Followings.find((el) => el.id === post?.User?.id);

  // 팔로우 하기
  const handleFollow = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [isFollowing]);

  // 좋아요 확인
  const isLiked = post?.Likers?.find((el) => el.id === me?.id);

  // 좋아요
  const handleLike = useCallback(() => {
    dispatch({
      type: LIKE_REQUEST,
      data: post.id,
    });
  }, []);

  // 좋아요 취소
  const handleUnLike = useCallback(() => {
    dispatch({
      type: UNLIKE_REQUEST,
      data: post.id,
    });
  }, []);

  // 댓글 창 열기
  const handleToggleComment = useCallback(() => {
    setToggleComment((prev) => !prev);
  }, []);

  // 리트윗 하기
  const handleRetweet = useCallback(() => {
    if (!me?.id) {
      return alert('로그인이 필요한 서비스 입니다.');
    }
    if (post?.UserId === me?.id) {
      return alert('자신의 게시물은 리트윗 하실 수 없습니다.');
    }
    dispatch({
      type: RETWEET_REQUEST,
      data: post.id,
    });
  }, []);

  useEffect(() => {
    if (updatePostDone) {
      setEdit(false);
    }
  }, [updatePostDone]);

  return (
    <Post
      me={me}
      post={post}
      isFollowing={isFollowing}
      toggleComment={toggleComment}
      edit={edit}
      editContent={editContent}
      isLiked={isLiked}
      handleEdit={handleEdit}
      handleEditContent={handleEditContent}
      handleEditPost={handleEditPost}
      handleRemovePost={handleRemovePost}
      handleFollow={handleFollow}
      handleLike={handleLike}
      handleUnLike={handleUnLike}
      handleToggleComment={handleToggleComment}
      handleRetweet={handleRetweet}
    />
  );
}
