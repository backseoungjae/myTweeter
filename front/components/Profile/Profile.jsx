import React from "react";
import * as S from "./ProfileStyles";
import useTab from "../../hooks/useTabs";
import FollowList from "../FollowList/FollowList";
import Link from "next/link";

export default function Profile({
  me,
  edit,
  nickname,
  handleEidt,
  handleNickname,
  handleSubmit,
}) {
  const tabButtons = [
    {
      id: 1,
      name: "팔로잉",
      content: <FollowList header="팔로잉" data={me?.Followings} />,
    },
    {
      id: 2,
      name: "팔로워",
      content: <FollowList header="팔로워" data={me?.Followers} />,
    },
  ];

  const { currentItem, changeItem } = useTab(0, tabButtons);

  return (
    <S.Container>
      <S.Header>
        <S.ProfileBox>
          <p>{`이메일 : ${me?.email}`}</p>
          <div>
            {edit ? (
              <>
                <S.EditInput
                  type="text"
                  value={nickname}
                  onChange={handleNickname}
                />
                <div>
                  <button onClick={handleEidt}>취소</button>
                  <button onClick={handleSubmit}>완료</button>
                </div>
              </>
            ) : (
              <>
                <p>{`닉네임 : ${me?.nickname}`}</p>
                <button onClick={handleEidt}>수정</button>
              </>
            )}
          </div>
        </S.ProfileBox>
        <S.InfoInner>
          <Link href={`/user/${me?.id}`}>
            <S.PostLink>
              게시글 <br />
              {me?.Posts?.length}
            </S.PostLink>
          </Link>
          {tabButtons.map((tab, i) => (
            <S.TabButton
              active={currentItem?.name === tab.name}
              onClick={() => changeItem(i)}
              key={tab.id}
            >
              {`${tab.name}`}
              <br />
              {`${
                tab.name === "팔로잉"
                  ? me?.Followings?.length
                  : me?.Followers?.length
              }`}
            </S.TabButton>
          ))}
        </S.InfoInner>
      </S.Header>
      <S.FollowListContainer>{currentItem.content}</S.FollowListContainer>
    </S.Container>
  );
}
