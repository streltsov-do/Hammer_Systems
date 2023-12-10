import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { SquareDiv } from "../SquareDiv/SquareDiv.js";
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

const canMove = (x, y, toX, toY, arr) => {
  const i = toX * 8 + toY;
  return (x !== toX || y !== toY) && arr[i] === -1;
};
const moveElemAll = (toX, toY, planner, moveElem) => {
  const newPos = [toX, toY];
  moveElem(planner.elems, newPos);
};

const DropZone = (props) => {
  const { planner, addElem, moveElem } = props;
  const [[elemX, elemY], setElemPos] = useState(planner.elem);
  useEffect(() => {
    setElemPos(planner.elem);
  }, [planner]);

  function renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const canMoveElem = canMove(elemX, elemY, x, y, planner.elems);

    const moveElemDiv = (x, y) => moveElemAll(x, y, planner, moveElem);

    return (
      <div key={i} style={squareStyle}>
        <SquareDiv
          x={x}
          y={y}
          canMoveElem={canMoveElem}
          moveElem={moveElemDiv}
          plannerState={planner.elem}
        >
          <Piece elem={x === elemX && y === elemY ? 0 : -1} />
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
    init: () => {
      dispatch({
        type: INIT,
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
