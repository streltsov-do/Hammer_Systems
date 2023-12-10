import { ADD, MOVE, GET, INIT } from "../constants/PlannerData";

const initElems = () => {
  const state = {
    elems: [],
    elem: [],
  };
  for (let i = 0; i < 64; i++) {
    state.elems[i] = -1;
  }
  state.elem=[1,7];
  return state;
};
const initialState = initElems();

const plannerData = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        elems: action.elems,
      };
    case MOVE:
      return {
        ...state,
        elems: action.elems,
        elem: action.elem,
      };
    case INIT:
      return {
        ...state,
        elems: action.elems,
      };
    default:
      return state;
  }
};

export default plannerData;
