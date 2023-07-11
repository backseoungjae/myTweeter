import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddPostContainer from '../AddPostContainer';
import PostContainer from '../PostContainer';
import { LOAD_POSTS_REQUEST } from '../../reducers/post';

export default function PostsContainer() {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, isLoadPostsLoading } = useSelector(
    (state) => state.post
  );

  // 인피니티 스크롤
  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !isLoadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, isLoadPostsLoading, mainPosts]);

  return (
    <>
      {me && <AddPostContainer />}
      {mainPosts?.length &&
        mainPosts.map((post) => (
          <PostContainer key={post?.id} post={post} me={me} />
        ))}
    </>
  );
}
