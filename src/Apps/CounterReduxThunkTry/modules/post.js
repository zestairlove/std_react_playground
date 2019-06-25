import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

function getPostAPI(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);

// thunk 생성 함수
export const getPost = postId => dispatch => {
  // 먼저 요청이 시작했다는 것을 알린다.
  dispatch(getPostPending());

  // 요청을 시작한다. 여기에서 만든 promise를 return해야 나중에 컴포넌트에서
  // 호출할 때 getPost().then(...) 을 할 수 있다.
  return getPostAPI(postId)
    .then(res => {
      // 요청이 성공했다면 서버 응답 내용을 payload로 설정하여
      // GET_POST_SUCCESS 액션을 디스패치한다.
      dispatch(getPostSuccess(res));
      // 나중에 getPostAPI.then() 을 했을 때 then에 전달하는
      // 함수에서 res에 접근할 수 있게 한다.
      return res;
    })
    .catch(err => {
      // 오류가 발생하면 오류 내용을 payload로 설정하여
      // GET_POST_FAILURE 액션을 디스패치 한다.
      dispatch(getPostFailure(err));
      throw err;
    });
};

// reducer
const initialState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: ''
  }
};

export default handleActions(
  {
    [GET_POST_PENDING]: (state, action) => ({
      ...state,
      pending: true,
      error: false
    }),
    [GET_POST_SUCCESS]: (state, action) => {
      const { title, body } = action.payload.data;
      return {
        ...state,
        pending: false,
        success: true,
        data: { title, body }
      };
    },
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      pending: false,
      error: true
    })
  },
  initialState
);
