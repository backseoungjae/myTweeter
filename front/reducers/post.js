import produce from '../util/produce';

export const initailState = {
  mainPosts: [], // 전체 게시글
  imagePaths: [], // 이미지
  hasMorePosts: null, // 더보기
  singlePost: null, // 게시글 하나
  loadPostsLoading: false, // 전체 게시글 가져오기
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false, // 게시글 하나 가져오기
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false, // 게시글 생성
  addPostDone: false,
  addPostError: null,
  removePostLoading: false, // 게시글 삭제
  removePostDone: false,
  removePostError: null,
  updatePostLoading: false, // 게시글 수정
  updatePostDone: false,
  updatePostError: null,
  likeLoading: false, // 좋아요
  likeDone: false,
  likeError: null,
  unLikeLoading: false, // 좋아요 취소
  unLikeDone: false,
  unLikeError: null,
  addCommentLoading: false, // 댓글 추가
  addCommentDone: false,
  addCommentError: null,
  retweetLoading: false, // 리트윗
  retweetDone: false,
  retweetError: null,
  uploadImagesLoading: false, // 이미지 업로드
  uploadImagesDone: false,
  uploadImagesError: null,
};

// 게시글 가져오기
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

// 유저 게시글 가져오기
export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

// 해쉬태그 게시글 가져오기
export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

// 게시글 하나 가져오기
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

// 게시글 생성
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// 게시글 삭제
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

// 게시글 수정
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

// 이미지 업로드
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

// 이미지 삭제
export const REMOVE_IMAGES = 'REMOVE_IMAGES';

// 좋아요
export const LIKE_REQUEST = 'LIKE_REQUEST';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_FAILURE = 'LIKE_FAILURE';

// 좋아요 취소
export const UNLIKE_REQUEST = 'UNLIKE_REQUEST';
export const UNLIKE_SUCCESS = 'UNLIKE_SUCCESS';
export const UNLIKE_FAILURE = 'UNLIKE_FAILURE';

// 댓글 생성
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// 리트윗
export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

const reducer = (state = initailState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(
          (el) => el.id !== action.data.PostId
        );
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATE_POST_SUCCESS:
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        draft.mainPosts.find((el) => el.id === action.data.PostId).content =
          action.data.content;
        break;
      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS:
        draft.imagePaths = draft.imagePaths.concat(action.data);
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case REMOVE_IMAGES:
        draft.imagePaths = draft.imagePaths.filter(
          (el, i) => i !== action.data
        );
        break;
      case LIKE_REQUEST:
        draft.likeLoading = true;
        draft.likeDone = false;
        draft.likeError = null;
        break;
      case LIKE_SUCCESS:
        const like = draft.mainPosts.find((el) => el.id === action.data.PostId);
        like.Likers.push({ id: action.data.UserId });
        draft.likeLoading = false;
        draft.likeDone = true;
        break;
      case LIKE_FAILURE:
        draft.likeDone = false;
        draft.likeError = action.error;
        break;
      case UNLIKE_REQUEST:
        draft.unLikeLoading = true;
        draft.unLikeDone = false;
        draft.unLikeError = null;
        break;
      case UNLIKE_SUCCESS:
        const unLike = draft.mainPosts.find(
          (el) => el.id === action.data.PostId
        );
        unLike.Likers = unLike.Likers.filter(
          (el) => el.id !== action.data.UserId
        );
        draft.unLikeLoading = false;
        draft.unLikeDone = true;
        break;
      case UNLIKE_FAILURE:
        draft.unLikeDone = false;
        draft.unLikeError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        const comment = draft.mainPosts.find(
          (el) => el.id === action.data.PostId
        );
        comment.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        draft.addCommentError = false;
        break;
      case ADD_COMMENT_FAILURE:
        draft.addCommentDone = false;
        draft.addCommentError = action.error;
        break;
      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;
      case RETWEET_SUCCESS:
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
