import update from 'immutability-helper';
import { createAction, handleActions } from 'redux-actions';

/**
 * Ducks 구조 규칙
 * - export default를 이용하여 리듀서를 내보낸다.
 * - export를 이용하여 액션 생성함수를 내보낸다.
 * - 액션 타입 이름은 npm-module-or-app/reducer/ACTION_TYPE 형식으로 만든다.
 *     + 라이브러리를 만들거나 애플리케이션을 여러 프로젝트로 나눈 것이 아니라면 맨 앞은 생략해도 된다.
 *     + counter/INCREMENT
 * - 외부 리듀서에서 모듈의 액션 타입이 필요할 때는 액션 타입을 내보내도 된다.
 */

// action types
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';

// action creators
export const increment = createAction(INCREMENT, index => index );
export const decrement = createAction(DECREMENT, index => index );
export const setColor = createAction(SET_COLOR, ({ index, nextColor }) => ({
  index,
  nextColor
}));
export const create = createAction(CREATE, color => color );
export const remove = createAction(REMOVE);

const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
};

// 리듀서는 handleActions를 사용하여 만든다.
export default handleActions(
  {
    [INCREMENT]: (state, action) => {
      const { payload: index } = action;
      return update(state, {
        counters: {
          [index]: {
            number: { $apply: number => number + 1 }
          }
        }
      });
    },
    [DECREMENT]: (state, action) => {
      const { payload: index } = action;
      return update(state, {
        counters: {
          [index]: {
            number: { $apply: number => number - 1 }
          }
        }
      });
    },
    [SET_COLOR]: (state, action) => {
      const { index, nextColor } = action.payload;
      return update(state, {
        counters: {
          [index]: {
            color: { $set: nextColor }
          }
        }
      });
    },
    [CREATE]: (state, action) => {
      const { payload: color } = action;
      return update(state, {
        counters: {
          $push: [
            {
              color: color,
              number: 0
            }
          ]
        }
      });
    },
    [REMOVE]: (state, action) => {
      const { counters } = state;
      return update(state, {
        counters: {
          $splice: [ [counters.length - 1, 1] ]
        }
      });
    }
  },
  initialState
);
