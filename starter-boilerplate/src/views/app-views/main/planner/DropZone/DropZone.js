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
const DropZone = (props) => {
  const { planner, addElem, moveElem, game } = props;
  console.log("STATE", planner);
  const [[elemX, elemY], setElemPos] = useState(game.elemPosition);

  // const [arr, setElems] = useState(game.elemsPositions);
  // console.log(game.elemsPositions);
  useEffect(() => game.observe(setElemPos));
  // useEffect(() => game.observe(setElemPos));
  function renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    console.log("elemX =" + elemX + " elemY=" + elemY);
    console.log("x =" + x + " y=" + y);
    console.log("planner.elems =" + planner.elems);
    const canMoveElem = canMove(elemX, elemY, x, y, planner.elems);
    console.log("CAN=" + canMoveElem);

    return (
      <div key={i} style={squareStyle}>
        <SquareDiv
          x={x}
          y={y}
          game={game}
          canMove={game.canMoveElem}
          moveElem={game.moveElem}
          // canMove={canMoveElem}
          // moveElem={moveElem}
          plannerState={planner.elems}
        >
          {/* <Piece elem={arr[i]} /> */}
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
    moveElem: (data) => {
      dispatch({
        type: MOVE,
        elems: data,
      });
    },
  }),
)(DropZone);
