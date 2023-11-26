import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { getCookie, setCookie, deleteCookie } from 'shared/Cookie';

// 1 .  action items

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

// 2. action creator

const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// 3.  initial State

const initalState = {
    user: null,
    is_login: false
};

// 4 reducer를 만드는 것

export default handleActions(
    {
        [LOG_IN]: (state, action) =>
            produce(state, (draft) => {
                setCookie('is_login', 'success');
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
        [GET_USER]: (state, action) => produce(state, (draft) => {})
    },
    initalState
);

// 리듀서를 export
const actionCreateors = {
    logIn,
    logOut,
    getUser
};
export { actionCreateors };
