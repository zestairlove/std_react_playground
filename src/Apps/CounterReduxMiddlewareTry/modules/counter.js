import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

/**
 * Ducks 구조 규칙
 * - export default를 이용하여 리듀서를 내보낸다.
 * - export를 이용하여 액션 생성함수를 내보낸다.
 * - 액션 타입 이름은 npm-module-or-app/reducer/ACTION_TYPE 형식으로 만든다.
 *     + 라이브러리를 만들거나 애플리케이션을 여러 프로젝트로 나눈 것이 아니라면 맨 앞은 생략해도 된다.
 *     + counter/INCREMENT
 * - 외부 리듀서에서 모듈의 액션 타입이 필요할 때는 액션 타입을 내보내도 된다.
 */

// action type
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const SET_COLOR = 'counter/SET_COLOR';

export const CREATE = 'counter/CREATE';
export const REMOVE = 'counter/REMOVE';

// action creators
// export const increment = index => ({
//   type: types.INCREMENT,
//   index
// });
//export const increment = createAction(INCREMENT);
export const increment = createAction(INCREMENT, index => index);
export const decrement = createAction(DECREMENT, index => index);
export const setColor = createAction(SET_COLOR, ({ index, nextColor }) => ({ index, nextColor }));
export const create = createAction(CREATE, color => color);
export const remove = createAction(REMOVE);

const initialState = {
  counters: [
    {
      color: 'black',
      number: 0,
    }
  ]
};

// reducer
export default handleActions({
  [INCREMENT]: (state, action) =>
    produce(state, draft => {
      draft.counters[action.payload].number += 1;
    }),
  [DECREMENT]: (state, action) =>
    produce(state, draft => {
      draft.counters[action.payload].number -= 1;
    }),
  [SET_COLOR]: (state, action) =>
    produce(state, draft => {
      draft.counters[action.payload.index].color = action.payload.nextColor;
    }),
  [CREATE]: (state, action) =>
      produce(state, draft => {
      draft.counters.push({ color: action.payload, number: 0 });
    }),
  [REMOVE]: (state, action) =>
    produce(state, draft => {
      draft.counters.splice(draft.counters.length -1, 1);
    })
}, initialState);