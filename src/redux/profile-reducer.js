import { API } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, post: "Hi, how are you", likesCount: 10 },
    { id: 2, post: "Its my first post", likesCount: 25 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: action.newPostBody,
        likesCount: 10,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }

  return state;
};

export const addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const putUserId = (userId) => async (dispatch) => {
  let data = await API.getUserId(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await API.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let data = await API.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let data = await API.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const data = await API.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(putUserId(userId));
  }
};

export default profileReducer;
