import axios from 'axios';

const getApiurl = () => process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;

//로그인
export const login = (data) =>
  axios.post(`${getApiurl()}/user/login`, { ...data });

// 회원가입
export const signup = (data) => axios.post(`${getApiurl()}/user`, data);

// 로그아웃
export const logout = () => axios.post(`${getApiurl()}/user/logout`);

// 내정보
export const myInfo = () => axios.get(`${getApiurl()}/user`);

// 메인 게시글
export const posts = (lastId) =>
  axios.get(`${getApiurl()}/posts?lastId=${lastId || 0}`);

// 게시글 작성
export const addPost = (data) => axios.post(`${getApiurl()}/post`, data);

// 게시글 삭제
export const removePost = (data) => axios.delete(`${getApiurl()}/post/${data}`);

// 게시글 수정
export const updatePost = (data) =>
  axios.patch(`${getApiurl()}/post/${data.PostId}`, data);

// 이미지 업로드
export const uploadImage = (data) =>
  axios.post(`${getApiurl()}/post/images`, data);

// 좋아요
export const like = (data) => axios.patch(`${getApiurl()}/post/${data}/like`);

// 좋아요 취소
export const unLike = (data) =>
  axios.delete(`${getApiurl()}/post/${data}/like`);

// 댓글
export const comment = (data) =>
  axios.post(`${getApiurl()}/post/${data.postId}/comment`, data);

// 리트윗 하기
export const retweet = (data) =>
  axios.post(`${getApiurl()}/post/${data}/retweet`);

// 해시태그 가져오기
export const hashtag = (data, lastId) =>
  axios.get(
    `${getApiurl()}/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`
  );

// 팔로우 하기
export const addFollowing = (data) =>
  axios.patch(`${getApiurl()}/user/${data}/follow`);

// 팔로우 취소
export const removeFollowing = (data) =>
  axios.delete(`${getApiurl()}/user/${data}/follow`);

// 팔로워 취소
export const removeFollower = (data) =>
  axios.delete(`${getApiurl()}/user/follower/${data}`);

// 팔로우 리스트
export const followingsList = (data) =>
  axios.get(`${getApiurl()}/user/followings`, data);

// 팔로워 리스트
export const followersList = (data) =>
  axios.get(`${getApiurl()}/user/followers`, data);

// 유저 정보
export const userInfo = (data) => axios.get(`${getApiurl()}/user/${data}`);

// 닉네임 변경
export const nicknameEdit = (data) =>
  axios.patch(`${getApiurl()}/user/nickname`, { nickname: data });

// 선택 유저 게시글
export const userPost = (data, lastId) =>
  axios.get(`${getApiurl()}/user/${data}/posts?lastId=${lastId || 0}`);

// 단일 게시글
export const singlePost = (data) => axios.get(`${getApiurl()}/post/${data}`);
