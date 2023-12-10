import {
  ADD,
  MOVE,
  GET,
  INIT,
  START_POS,
  START_POS_END,
} from "../constants/PlannerData";

const initElems = () => {
  const state = {
    elems: [],
    elem: 0,
    start_pos: 0,
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
        elem: action.elem,
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
        start_active: true,
      };
    case START_POS_END:
      return {
        ...state,
        start_active: false,
      };
    default:
      return state;
  }
};

export default plannerData;
