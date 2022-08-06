const LEFT = "filter/LEFT";

const initialState = {
  leftbar: "id",
};

export function keepFilterData(leftbar) {
  return { type: LEFT, leftbar };
}

export default function reducer(state = initialState, action = {}) {
    //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
    //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
    switch (action.type) {
      case "filter/LEFT": {
        return { leftbar: action.leftbar };
      }
      // do reducer stuff
      default:
        return state;
    }
  }