import update from 'immutability-helper';
import * as types from '../actions/ActionTypes';

// 초기 상태를 정의한다.
const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
};

function counter(state = initialState, action) {
  // 레퍼런스 생성
  const { counters } = state;

  switch (action.type) {
    case types.CREATE:
      return update(state, {
        counters: {
          $push: [
            {
              color: action.color,
              number: 0
            }
          ]
        }
      });
    case types.REMOVE:
      return update(state, {
        counters: {
          $splice: [[counters.length - 1, 1]]
        }
      });
    case types.INCREMENT:
      return update(state, {
        counters: {
          [action.index]: {
            //number: { $set: counters[action.index].number + 1 }
            number: { $apply: number => number + 1 }
          }
        }
      });
    case types.DECREMENT:
      return update(state, {
        counters: {
          [action.index]: {
            //number: { $set: counters[action.index].number - 1 }
            number: { $apply: number => number - 1 }
          }
        }
      });
    case types.SET_COLOR:
      return update(state, {
        counters: {
          [action.index]: {
            color: { $set: action.color }
          }
        }
      });
    default:
      return state;
  }
}

export default counter;
