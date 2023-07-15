import React from 'react';
import * as S from './PostStyles';
import Link from 'next/link';
import { LapseDate } from '../../commons/LapseDate';
import PostImages from '../PostImages';
import CommentForm from '../CommentForm';
import Content from '../Content/Content';

export default function Post({
  me,
  post,
  isFollowing,
  toggleComment,
  edit,
  editContent,
  isLiked,
  handleEdit,
  handleEditContent,
  handleEditPost,
  handleRemovePost,
  handleFollow,
  handleLike,
  handleUnLike,
  handleToggleComment,
  handleRetweet,
}) {
  return (
    <>
      <S.Container>
        {me?.id === post?.UserId ? (
          <S.ButtonBox active={post?.Retweet}>
            <S.Button onClick={handleEdit}>수정</S.Button>
            <S.Button onClick={handleRemovePost}>삭제</S.Button>
          </S.ButtonBox>
        ) : (
          <S.FollowButton onClick={handleFollow}>
            {isFollowing ? '언팔로우' : '팔로우'}
          </S.FollowButton>
        )}
        <S.Header>
          <Link href={`/user/${post?.User?.id}`} prefetch={false}>
            <S.NicknameLink>
              {post?.Retweet
                ? `${post?.User?.nickname}님이 리트윗 하셨습니다.`
                : post?.User?.nickname}
            </S.NicknameLink>
          </Link>
          <p>{LapseDate(new Date(post?.createdAt))}</p>
        </S.Header>
        {post?.Retweet?.Images ? (
          <S.ImageBox>
            {post?.Retweet?.Images[0] && (
              <PostImages images={post?.Retweet?.Images} />
            )}
          </S.ImageBox>
        ) : (
          <S.ImageBox>
            {post?.Images[0] && <PostImages images={post?.Images} />}
          </S.ImageBox>
        )}
        <Content
          edit={edit}
          retweet={post?.Retweet}
          postData={post?.content}
          editContent={editContent}
          handleEditContent={handleEditContent}
          handleEdit={handleEdit}
          handleEditPost={handleEditPost}
        />
        <Link href={`/post/${post?.id}`} prefetch={false}>
          <S.SinglePostLink>자세히 보기</S.SinglePostLink>
        </Link>
        <S.IconInner>
          {isLiked ? (
            <div onClick={handleUnLike}>
              <S.LikeIcons />
            </div>
          ) : (
            <div onClick={handleLike}>
              <S.UnLikeIcons />
            </div>
          )}
          <div onClick={handleToggleComment}>
            <S.CommentIcons />
          </div>
          <div onClick={handleRetweet}>
            <S.ShareIcons />
          </div>
        </S.IconInner>
        <S.CommentNumber>
          {post?.Comments && `${post?.Comments?.length}개의 댓글`}
        </S.CommentNumber>
      </S.Container>
      {toggleComment && (
        <>
          {me && me?.id && (
            <CommentForm
              post={post}
              me={me}
              handleToggleComment={handleToggleComment}
            />
          )}
          {post?.Comments?.length ? (
            post?.Comments?.map((comment) => (
              <S.CommentsBox key={comment?.id}>
                <Link href={`/user/${comment?.User?.id}`} prefetch={false}>
                  <S.NicknameLink>{comment?.User?.nickname}</S.NicknameLink>
                </Link>
                <p>{comment?.content}</p>
              </S.CommentsBox>
            ))
          ) : (
            <div></div>
          )}
        </>
      )}
    </>
  );
}
