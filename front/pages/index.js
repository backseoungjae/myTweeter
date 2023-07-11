import Head from 'next/head';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import PostsContainer from '../container/PostsContainer';

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
      type: LOAD_POSTS_REQUEST,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyTweeter</title>
        <meta name="MyTweeter" content="MyTweeter" />
      </Head>
      <PostsContainer />
    </div>
  );
}
