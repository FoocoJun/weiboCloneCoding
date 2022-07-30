// 잡것들.
// Actions
const SCROLL = "scroll/KEEP";

const initialState = {
    scrollPosition: 0,
};

// Action Creators

export function keepScrollPosition(scrollPosition) {
  return { type: SCROLL, scrollPosition };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "scroll/KEEP": {
      return { scrollPosition: action.scrollPosition };
    }
    // do reducer stuff
    default:
      return state;
  }
}