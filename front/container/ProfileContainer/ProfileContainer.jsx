import React, { useCallback, useEffect, useState } from 'react';
import Profile from '../../components/Profile';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { useRouter } from 'next/router';
import { EDIT_NICKNAME_REQUEST } from '../../reducers/user';

export default function ProfileContainer() {
  const { me, editNicknameDone } = useSelector((state) => state.user);
  const [nickname, handleNickname] = useInput(me?.nickname || '');
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  // 닉네임 폼 변경
  const handleEidt = useCallback(() => {
    setEdit((prev) => !prev);
  }, []);

  // 닉네임 변경
  const handleSubmit = useCallback(() => {
    dispatch({
      type: EDIT_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  useEffect(() => {
    if (editNicknameDone) {
      setEdit(false);
    }
  }, [editNicknameDone]);

  useEffect(() => {
    if (!(me && me?.id)) {
      router.push('/');
    }
  }, [me]);

  return (
    <Profile
      me={me}
      edit={edit}
      nickname={nickname}
      handleEidt={handleEidt}
      handleNickname={handleNickname}
      handleSubmit={handleSubmit}
    />
  );
}
