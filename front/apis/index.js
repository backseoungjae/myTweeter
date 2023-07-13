import axios from 'axios';

const getApiurl = () => process.env.NEXT_PUBLIC_API_LOCAL_URL;
axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: getApiurl(),
  withCredentials: true,
});

//로그인
export const login = (data) => api.post(`/user/login`, { ...data });

// 회원가입
export const signup = (data) => api.post(`/user`, data);

// 로그아웃
export const logout = () => api.post(`/user/logout`);

// 내정보
export const myInfo = () => api.get(`/user`);

// 메인 게시글
export const posts = (lastId) => api.get(`/posts?lastId=${lastId || 0}`);

// 게시글 작성
export const addPost = (data) => api.post(`/post`, data);

// 게시글 삭제
export const removePost = (data) => api.delete(`/post/${data}`);

// 게시글 수정
export const updatePost = (data) => api.patch(`/post/${data.PostId}`, data);

// 이미지 업로드
export const uploadImage = (data) => api.post(`/post/images`, data);

// 좋아요
export const like = (data) => api.patch(`/post/${data}/like`);

// 좋아요 취소
export const unLike = (data) => api.delete(`/post/${data}/like`);

// 댓글
export const comment = (data) => api.post(`/post/${data.postId}/comment`, data);

// 리트윗 하기
export const retweet = (data) => api.post(`/post/${data}/retweet`);

// 해시태그 가져오기
export const hashtag = (data, lastId) =>
  api.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);

// 팔로우 하기
export const addFollowing = (data) => api.patch(`/user/${data}/follow`);

// 팔로우 취소
export const removeFollowing = (data) => api.delete(`/user/${data}/follow`);

// 팔로워 취소
export const removeFollower = (data) => api.delete(`/user/follower/${data}`);

// 팔로우 리스트
export const followingsList = (data) => api.get(`/user/followings`, data);

// 팔로워 리스트
export const followersList = (data) => api.get(`/user/followers`, data);

// 유저 정보
export const userInfo = (data) => api.get(`/user/${data}`);

// 닉네임 변경
export const nicknameEdit = (data) =>
  api.patch(`/user/nickname`, { nickname: data });

// 선택 유저 게시글
export const userPost = (data, lastId) =>
  api.get(`/user/${data}/posts?lastId=${lastId || 0}`);

// 단일 게시글
export const singlePost = (data) => api.get(`/post/${data}`);
