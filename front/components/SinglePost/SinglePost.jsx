import React from 'react';
import Head from 'next/head';
import PostContainer from '../../container/PostContainer/PostContainer';

export default function SinglePost({ singlePost, me }) {
  console.log('singlePost ', singlePost);
  return (
    <>
      <Head>
        <title>{singlePost?.User?.nickname}님의 글</title>
        <meta name="description" content={singlePost?.content} />
        <meta
          property="og:title"
          content={`${singlePost?.User?.nickname}님의 게시글`}
        />
        <meta property="og:description" content={singlePost?.content} />
      </Head>
      <PostContainer post={singlePost} me={me} />
    </>
  );
}
