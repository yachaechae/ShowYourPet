export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const ADD_IMG = 'ADD_IMG';
export const VALIDATION_ERROR = 'VALIDATION_ERROR';

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

const initialState = {
    postList: [],
    postData: { content: '', id: '', image: '', title: '' },
    validationError: ''
};

const post = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST: {
            return { postList: action.payload };
        }
        case ADD_POST: {
            return { postData: action.payload };
        }
        // validationError 상태를 관리하는 리듀서 작성
        case VALIDATION_ERROR:
            return {
                ...state,
                validationError: action.payload
            };
        default:
            return state;
    }
};

export default post;
