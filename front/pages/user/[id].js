import React from 'react';
import UserPostConatiner from '../../container/UserPostConatiner/UserPostConatiner';
import wrapper from '../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { LOAD_USER_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from '../../reducers/user';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    store.dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: context.params.id,
    });
    store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch({
      type: LOAD_USER_REQUEST,
      data: context.params.id,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
  }
);

export default function User() {
  return <UserPostConatiner />;
}
