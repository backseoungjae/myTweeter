import React from 'react';
import HashtagContainer from '../../container/HashtagContainer';
import wrapper from '../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch({
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: context.params.tag,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
  }
);

export default function Hashtag() {
  return <HashtagContainer />;
}
