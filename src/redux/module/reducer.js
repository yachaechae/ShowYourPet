import { ADD_MEMBER, ADD_POST, GET_POST, LOGIN_INFO } from './action';

const initialState = {
    postList: [],
    postData: { content: '', id: '', image: '', title: '' }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_INFO:
            const { email, password } = action.payload;
            return {};
        case GET_POST: {
            return { postList: action.payload };
        }

        default:
            return state;
    }
};

export default rootReducer;
