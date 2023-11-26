export const LOGIN_INFO = 'redux/action/LOGIN_INFO';
export const ADD_MEMBER = 'redux/action/ADD_MEMBER';
export const ADD_POST = 'redux/action/ADD_POST';
export const GET_POST = 'redux/action/GET_POST';
export const ADD_IMG = 'redux/action/ADD_IMG';
export const DELETE_POST = 'redux/action/DELETE_POST';
export const VALIDATION_ERROR = 'redux/action/VALIDATION_ERROR';

export const loginLinfo = (data) => ({
    type: LOGIN_INFO,
    payload: data
});

export const addMember = (data) => ({
    type: ADD_MEMBER,
    payload: data
});

export const addPost = (postData) => ({
    type: ADD_POST,
    payload: postData
});

export const getPost = (postList) => ({
    type: GET_POST,
    payload: postList
});

export const addImg = (selectedImage, imagePreview) => ({
    type: ADD_IMG,
    payload: { selectedImage, imagePreview }
});

export const validationError = (message) => ({
    type: VALIDATION_ERROR,
    payload: message
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: postId
});
