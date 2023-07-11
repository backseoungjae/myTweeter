import React from 'react';
import * as S from './ContentStyles';
import Link from 'next/link';

export default function Content({
  edit,
  retweet,
  postData,
  editContent,
  handleEditContent,
  handleEdit,
  handleEditPost,
}) {
  return (
    <>
      {edit ? (
        <S.ContentBox>
          <S.EditInner>
            <S.EditTextarea
              name="content"
              value={editContent}
              onChange={handleEditContent}
            />
            <S.ButtonBox>
              <S.Button onClick={handleEditPost(editContent)}>완료</S.Button>
              <S.Button onClick={handleEdit}>취소</S.Button>
            </S.ButtonBox>
          </S.EditInner>
        </S.ContentBox>
      ) : (
        <S.ContentBox active={retweet}>
          {retweet ? (
            <S.Content>
              {retweet?.content?.split(/(#[^\s#]+)/g).map((el, i) => {
                if (el.match(/(#[^\s#]+)/)) {
                  return (
                    <Link key={i} href={`/hashtag/${el.slice(1)}`}>
                      <S.TagLink>{el}</S.TagLink>
                    </Link>
                  );
                }
                return el;
              })}
            </S.Content>
          ) : (
            <S.Content>
              {postData?.split(/(#[^\s#]+)/g).map((el, i) => {
                if (el.match(/(#[^\s#]+)/)) {
                  return (
                    <Link key={i} href={`/hashtag/${el.slice(1)}`}>
                      <S.TagLink>{el}</S.TagLink>
                    </Link>
                  );
                }
                return el;
              })}
            </S.Content>
          )}
        </S.ContentBox>
      )}
    </>
  );
}
