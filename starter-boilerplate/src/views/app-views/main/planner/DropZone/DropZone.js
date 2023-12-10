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

const canMoveFull = (i, planner, active) => {
  return planner[i] === -1 && active;
};
// const moveElemFull = (toX, toY, start, planner, moveElem) => {
//   const newPos = [toX, toY];
const moveElemFull = (i, start, planner, moveElem) => {
  // const newPos = i;
  // const newPlane = planner.elems;

  // newPlane[8 * toY + toX] = newPlane[str];
  // newPlane[str] = -1;
  // moveElem(planner.elems, newPos);
  moveElem(planner.elems, i);
  // setStartPos([start_pos,start_val]);
};

const DropZone = (props) => {
  const { planner, addElem, moveElem } = props;
  const [ inited, setInited ] = useState(false);

  const [elemsArr, setElems] = useState(planner.elems);
  const start_pos = planner.start_pos;


  useEffect(() => {
    if (inited) {
      const newPlane = planner.elems;
      const i = planner.elem;
      const save = newPlane[i];
      newPlane[i] = newPlane[start_pos];
      newPlane[start_pos] = save;
      moveElem(planner.elems, planner.elem);
      setElems(planner.elems);
    }
    setInited(true);
  }, [planner.elem]);

  const squareMoveElem = (x, y) => {
    const i = y * 8 + x;
    moveElemFull(i, start_pos, planner, moveElem);
  };

  function renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    const squareCanMoveElem = canMoveFull(
      i,
      planner.elems,
      planner.start_active,
    );

    return (
      <div key={i} style={squareStyle}>
        <SquareDiv
          x={x}
          y={y}
          // canMoveElem={squareCanMoveElem}
          canMoveElem={true}
          // moveElem={squareMoveElem}
          moveElem={squareMoveElem}
          plannerState={planner.elem}
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
    moveElem: (data, elem) => {
      dispatch({
        type: MOVE,
        elems: data,
        elem: elem,
      });
    },
  }),
)(DropZone);
