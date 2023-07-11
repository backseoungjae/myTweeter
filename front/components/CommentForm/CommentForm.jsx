import React, { useCallback, useEffect } from 'react';
import * as S from './CommentFormStyles';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../../reducers/post';
import useInput from '../../hooks/useInput';

export default function CommentForm({ post, me, handleToggleComment }) {
  const { addCommentDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [comment, handleComment, setComment] = useInput('');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: { content: comment, postId: post?.id, userId: me?.id },
      });
    },
    [comment, me?.id]
  );

  useEffect(() => {
    if (addCommentDone) {
      setComment('');
    }
  }, [addCommentDone]);

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Textarea
        name="comment"
        rows={4}
        value={comment}
        onChange={handleComment}
        placeholder="남기고 싶은 댓글을 작성해 주세요!!"
        autoComplete="on"
      />
      <S.ButtonBox>
        <S.Button onClick={handleToggleComment}>취소</S.Button>
        <S.Button>작성</S.Button>
      </S.ButtonBox>
    </S.Container>
  );
}
