import * as types from './ActionTypes';

// action 객체를 만드는 액션 생성 함수들을 선언한다(action creators).
export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});

export const setColor = color => ({
  type: types.SET_COLOR,
  color
});