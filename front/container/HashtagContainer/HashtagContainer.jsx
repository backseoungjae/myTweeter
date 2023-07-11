import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../../reducers/post';
import PostContainer from '../PostContainer/PostContainer';

export default function HashtagContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { tag } = router.query;

  const { mainPosts, hasMorePosts, isLoadPostsLoading } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    const onScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !isLoadPostsLoading) {
          dispatch({
            type: LOAD_HASHTAG_POSTS_REQUEST,
            lastId:
              mainPosts[mainPosts.length - 1] &&
              mainPosts[mainPosts.length - 1].id,
            data: tag,
          });
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, tag, isLoadPostsLoading]);

  return (
    <>
      {mainPosts?.length &&
        mainPosts.map((post) => <PostContainer key={post?.id} post={post} />)}
    </>
  );
}
