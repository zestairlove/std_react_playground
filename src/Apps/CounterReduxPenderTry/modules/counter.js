import { createAction, handleActions } from 'redux-actions';

// action type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// reducer
export default handleActions({
  [INCREMENT]: (state, action) => state + 1,
  [DECREMENT]: (state, action) => state - 1
}, 1);