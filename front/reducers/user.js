import produce from '../util/produce';

export const initailState = {
  me: null, // 내 정보
  userInfo: null, // 유저 정보
  loadMyInfoLoading: false, // 내 정보 가져오기
  loadMyInfoDone: false,
  loadMyInfoError: null,
  editNicknameLoading: false, // 닉네임 변경
  editNicknameDone: false,
  editNicknameError: null,
  followLoading: false, // 팔로우  하기
  followDone: false,
  followError: null,
  unFollowLoading: false, // 팔로우 취소
  unFollowDone: false,
  unFollowError: null,
  unFollowerLoading: false, // 팔로워 취소
  unFollowerDone: false,
  unFollowerError: null,
  loadUserLoading: false, // 유저 정보 가져오기
  loadUserDone: false,
  loadUserError: null,
};

// 내 정보 가져오기
export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

// 유저 정보 가져오기
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

// 닉네임 변경
export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';

// 팔로우 하기
export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

// 팔로우 취소
export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

// 팔로워 취소
export const UNFOLLOWER_REQUEST = 'UNFOLLOWER_REQUEST';
export const UNFOLLOWER_SUCCESS = 'UNFOLLOWER_SUCCESS';
export const UNFOLLOWER_FAILURE = 'UNFOLLOWER_FAILURE';

// 내 게시글 생성 / 삭제
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const reducer = (state = initailState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;
      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;
      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;
      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.userInfo = action.data;
        draft.loadUserDone = true;
        break;
      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;
      case EDIT_NICKNAME_REQUEST:
        draft.editNicknameLoading = true;
        draft.editNicknameDone = false;
        draft.editNicknameError = null;
        break;
      case EDIT_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.editNicknameLoading = false;
        draft.editNicknameDone = true;
        break;
      case EDIT_NICKNAME_FAILURE:
        draft.editNicknameLoading = false;
        draft.editNicknameError = action.error;
        break;
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;
      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({ id: action.data.UserId });
        break;
      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowDone = false;
        draft.unfollowError = null;
        break;
      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(
          (el) => el.id !== action.data.UserId
        );
        break;
      case UNFOLLOW_FAILURE:
        draft.unfollowDone = false;
        draft.unfollowError = action.error;
        break;
      case UNFOLLOWER_REQUEST:
        draft.unFollowerLoading = true;
        draft.unFollowerDone = false;
        draft.unFollowerError = null;
        break;
      case UNFOLLOWER_SUCCESS:
        draft.unFollowerLoading = false;
        draft.unFollowerDone = true;
        draft.me.Followers = draft.me.Followers.filter(
          (el) => el.id !== action.data.UserId
        );
        break;
      case UNFOLLOWER_FAILURE:
        draft.unFollowerDone = false;
        draft.unFollowerError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
      default:
        break;
    }
  });
};

export default reducer;
