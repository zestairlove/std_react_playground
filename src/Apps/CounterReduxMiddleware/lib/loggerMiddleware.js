const loggerMiddleware = store => next => action => {
  /**
   * next는 store.dispatch와 비슷한 역할을 한다.
   * 차이점은 next(action)을 했을 때는 그다음 처리해야할 미들웨어로 액션을 넘겨주고,
   * 추가로 처리할 미들웨어가 없다면 바로 리듀서에 넘겨준다.
   * store.dispatch는 다음 미들웨어로 넘기는 것이 아니라 액션을 처음부터 디스패치한다.
   */

  /* 미들웨어 내용 */
  // 현재 스토어 상태 값 기록
  console.log('현재 상태', store.getState());
  // 액션 기록
  console.log('액션', action);

  // 액션을 다음 미들웨어 또는 리듀서로 넘긴다.
  const result = next(action);

  // 액션 처리 후의 스토어 상태를 기록한다.
  console.log('다음 상태', store.getState());
  console.log('\n');

  return result; // 여기서 반환하는 값은 store.dispatch(ACTION_TYPE) 했을 때 결과로 설정한다.
};

export default loggerMiddleware;
