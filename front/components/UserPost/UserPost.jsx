import React from 'react';
import * as S from './UserPostStyles';
import Head from 'next/head';
import PostContainer from '../../container/PostContainer';

export default function UserPost({ mainPosts, userInfo, me }) {
  return (
    <div>
      {userInfo && (
        <Head>
          <title>
            {userInfo.nickname}
            님의 글
          </title>
          <meta
            name="description"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:title"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:description"
            content={`${userInfo.nickname}님의 게시글`}
          />
        </Head>
      )}
      <S.Container>
        {userInfo && userInfo.id !== me?.id ? (
          <S.Header>
            <S.ProfileBox>
              <p>{`이메일 : ${userInfo?.email}`}</p>
              <p>{`닉네임 : ${userInfo?.nickname}`}</p>
            </S.ProfileBox>
          </S.Header>
        ) : null}
        <S.PostInner>
          {mainPosts?.length &&
            mainPosts?.map((post) => (
              <PostContainer key={post?.id} post={post} me={me} />
            ))}
        </S.PostInner>
      </S.Container>
    </div>
  );
}
