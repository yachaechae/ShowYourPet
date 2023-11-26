import { ADD_MEMBER, ADD_POST, GET_POST, LOGIN_INFO, VALIDATION_ERROR } from './action';

const initialState = {
    postList: [],
    postData: { content: '', id: '', image: '', title: '', createdAt: '' },
    validationError: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_INFO:
            const { email, password } = action.payload;
            return {};
        case GET_POST: {
            return { postList: action.payload };
        }
        case ADD_POST: {
            const newPostData = action.payload;
            // 이미 작성 시간이 추가되어 있으면 기존 값을 유지하고, 없을 경우에만 추가
            newPostData.createdAt = newPostData.createdAt || new Date().toString();

            return {
                ...state,
                postList: [...state.postList, newPostData]
            };
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

export default rootReducer;
