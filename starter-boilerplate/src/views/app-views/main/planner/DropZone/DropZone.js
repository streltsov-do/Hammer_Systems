import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SquareDiv from "../SquareDiv/SquareDiv.js";
import { Piece } from "../Piece/Piece.js";
import { ADD, INIT, MOVE } from "redux/constants/PlannerData";
/** Styling properties applied to the board element */
const boardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "brown",
  borderStyle: "solid",
  borderWidth: "4px",
};
/** Styling properties applied to each square element */
const squareStyle = { width: "12.5%", height: "12.5%" };
/**
 * The chessboard component
 * @param props The react props
 */

const canMoveFull = (i, planner) => {
  return planner[i] === -1 ;
};
const moveElemFull = (i, start, planner, moveElem) => {
  moveElem(planner.elems, i);
};

const DropZone = (props) => {
  const { planner, addElem, moveElem } = props;
  const [ inited, setInited ] = useState(false);
  const [ trig, setTrig ] = useState(-1);
  const start_pos = planner.start_pos;


  useEffect(() => {
    if (inited) {
      if (start_pos===-1){
        const newPlane = planner.elems;
        const i = planner.next_pos;
        newPlane[i]=planner.start_val;
        moveElem(newPlane, planner.start_pos);
      } else {
        const newPlane = planner.elems;
        const i = planner.next_pos;
        const save = newPlane[i];
        newPlane[i] = newPlane[start_pos];
        newPlane[start_pos] = save;
        moveElem(newPlane, planner.start_pos);
      }
    }
    setInited(true);
  }, [planner.next_pos]);
  

  const squareMoveElem = (x, y) => {
    const i = y * 8 + x;
    setTrig(i);
  };

  useEffect(() => {
    if (trig!==-1){
      moveElemFull(trig, start_pos, planner, moveElem);
      setTrig(-1);
    }
  },[trig]);

  function renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    const squareCanMoveElem = canMoveFull(
      i,
      planner.elems,
    );

    return (
      <div key={i} style={squareStyle}>
        <SquareDiv
          x={x}
          y={y}
          canMoveElem={true}
          moveElem={squareMoveElem}
          plannerState={planner.next_pos}
        >
          <Piece img_idx={planner.elems[i]} start={i} />
        </SquareDiv>
      </div>
    );
  }
  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i));
  }
  return <div style={boardStyle}>{squares}</div>;
};

export default connect(
  (state) => ({
    planner: state.plannerData,
  }),
  (dispatch) => ({
    init: (data) => {
      dispatch({
        type: INIT,
        elems: data,
      });
    },
    addElem: (data) => {
      dispatch({
        type: ADD,
        elems: data,
      });
    },
    moveElem: (data, next) => {
      dispatch({
        type: MOVE,
        elems: data,
        next_pos: next,
      });
    },
  }),
)(DropZone);
