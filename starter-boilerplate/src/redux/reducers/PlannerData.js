import { ADD, MOVE, INIT, START_POS } from "../constants/PlannerData";

const initElems = () => {
  const state = {
    elems: [],
    next_pos: 0,
    start_pos: 0,
    start_val: 0,
  };
  for (let i = 0; i < 64; i++) {
    state.elems[i] = -1;
  }
  state.elems[52] = 0;
  state.elems[0] = 1;
  // state.elem = 0;
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
        next_pos: action.next_pos,
      };
    case INIT:
      return {
        ...state,
        elems: action.elems,
      };
    case START_POS:
      return {
        ...state,
        start_pos: action.start_pos,
        start_val: action.start_val,
      };
    default:
      return state;
  }
};

export default plannerData;
