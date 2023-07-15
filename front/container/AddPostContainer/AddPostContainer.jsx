import React, { useCallback, useEffect, useRef } from 'react';
import AddPost from '../../components/AddPost';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import {
  ADD_POST_REQUEST,
  REMOVE_IMAGES,
  UPLOAD_IMAGES_REQUEST,
} from '../../reducers/post';

export default function AddPostContainer() {
  const dispatch = useDispatch();
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const [content, handleContent, setContent] = useInput('');
  const imageInput = useRef(null);

  // 파일 올리는 이벤트
  const imageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  // 이미지 업로드 이벤트
  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (item) => {
      imageFormData.append('image', item);
    });

    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  // 이미지 삭제
  const handleRemove = useCallback(
    (index) => () => {
      dispatch({
        type: REMOVE_IMAGES,
        data: index,
      });
    },
    []
  );

  const handleAddPost = useCallback(() => {
    if (!content || !content.trim()) {
      alert('게시글을 작성해 주세요.');
    }
    const formData = new FormData();
    imagePaths.forEach((el) => {
      formData.append('image', el);
    });

    formData.append('content', content);
    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [content]);

  useEffect(() => {
    if (addPostDone) {
      setContent('');
    }
  }, [addPostDone]);

  return (
    <AddPost
      imagePaths={imagePaths}
      imageInput={imageInput}
      content={content}
      handleContent={handleContent}
      imageUpload={imageUpload}
      onChangeImages={onChangeImages}
      handleRemove={handleRemove}
      handleAddPost={handleAddPost}
    />
  );
}
