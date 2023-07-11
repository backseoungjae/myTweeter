import React from 'react';
import { useSelector } from 'react-redux';
import SinglePost from '../../components/SinglePost';

export default function SinglePostContainer() {
  const { singlePost } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  return <SinglePost singlePost={singlePost} me={me} />;
}
