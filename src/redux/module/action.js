export const LOGIN_INFO = 'redux/action/LOGIN_INFO';
export const ADD_MEMBER = 'redux/action/ADD_MEMBER';
export const ADD_POST = 'redux/action/ADD_POST';
export const GET_POST = 'redux/action/GET_POST';

export const loginLinfo = (data) => ({
    type: LOGIN_INFO,
    payload: data
});

export const addMember = (data) => ({
    type: ADD_MEMBER,
    payload: data
});

export const addPost = (data) => ({
    type: ADD_POST,
    payload: data
});

export const getPost = (postList) => ({
    type: GET_POST,
    payload: postList
});
