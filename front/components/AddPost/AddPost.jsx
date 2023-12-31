import React from 'react';
import * as S from './AddPostStyles';

export default function AddPost({
  imagePaths,
  imageInput,
  content,
  handleContent,
  imageUpload,
  onChangeImages,
  handleRemove,
  handleAddPost,
}) {
  return (
    <S.Container>
      <S.AddPostInner>
        <S.ImageInner>
          {imagePaths?.length > 0 &&
            imagePaths.map((image, i) => (
              <S.ImageBox key={image}>
                <S.RemoveButton onClick={handleRemove(i)} />
                <S.Image
                  src={image.replace(/\/thumb\//, '/original/')}
                  alt={image}
                />
              </S.ImageBox>
            ))}
        </S.ImageInner>
        <S.AddPostInput
          name="content"
          maxLength={200}
          value={content}
          onChange={handleContent}
          placeholder="게시글을 작성해 주세요."
        />
        <S.HideInput
          type="file"
          name="image"
          multiple
          ref={imageInput}
          onChange={onChangeImages}
        />
        <S.Button onClick={imageUpload}>이미지 업로드</S.Button>
        <S.ButtonBox>
          <S.Button disabled={!content} onClick={handleAddPost}>
            등록하기
          </S.Button>
        </S.ButtonBox>
      </S.AddPostInner>
    </S.Container>
  );
}
