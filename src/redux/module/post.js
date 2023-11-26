import { ADD_MEMBER, ADD_POST, GET_POST, LOGIN_INFO, VALIDATION_ERROR } from './action';

const initialState = {
    postList: [],
    postData: { content: '', id: '', image: '', title: '' },
    validationError: ''
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_INFO:
            const { email, password } = action.payload;
            return {};
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

export default postReducer;
