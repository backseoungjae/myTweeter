import React, { useCallback } from 'react';
import * as S from './FollowListStyles';
import { UNFOLLOWER_REQUEST, UNFOLLOW_REQUEST } from '../../reducers/user';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

export default function FollowList({ header, data }) {
  const dispatch = useDispatch();

  const handleCancel = useCallback(async (id) => {
    if (header === '팔로잉') {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      });
    }
    dispatch({
      type: UNFOLLOWER_REQUEST,
      data: id,
    });
  }, []);

  return (
    <S.Container>
      <S.Title>{header}</S.Title>
      <S.Inner>
        {data?.map((item) => (
          <S.FollowItem key={item?.id}>
            <Link href={`/user/${item?.id}`}>
              <S.NicknameLink>{item?.nickname}</S.NicknameLink>
            </Link>
            <S.ItemCancelButton onClick={() => handleCancel(item?.id)}>
              취소
            </S.ItemCancelButton>
          </S.FollowItem>
        ))}
      </S.Inner>
    </S.Container>
  );
}
