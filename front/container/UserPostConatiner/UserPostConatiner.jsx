import React, { useEffect } from 'react';
import UserPost from '../../components/UserPost';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { LOAD_USER_POSTS_REQUEST } from '../../reducers/post';

export default function UserPostConatiner() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );
  const { userInfo, me } = useSelector((state) => state.user);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            lastId:
              mainPosts[mainPosts.length - 1] &&
              mainPosts[mainPosts.length - 1].id,
            data: id,
          });
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, id, loadPostsLoading]);

  return <UserPost mainPosts={mainPosts} userInfo={userInfo} me={me} />;
}
