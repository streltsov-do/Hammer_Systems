import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SquareDiv from "../SquareDiv/SquareDiv.js";
import { Piece } from "../Piece/Piece.js";
import { ADD, INIT, MOVE, END_INIT } from "redux/constants/PlannerData";
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

  // const [elemsArr, setElems] = useState(planner.elems);
  const start_pos = planner.start_pos;


  useEffect(() => {
    if (inited) {
      if (start_pos===-1){
        const newPlane = planner.elems;
        console.log("newPlane 2",planner.elems);
        const i = planner.next_pos;
        newPlane[i]=planner.start_val;
        // console.log("planner.next_pos",planner.next_pos)
        // console.log("planner.next_val",planner.start_val)
        moveElem(newPlane, planner.start_pos);
      } else {
        const newPlane = planner.elems;
        console.log("newPlane 1",planner.elems);
        const i = planner.next_pos;
        const save = newPlane[i];
        newPlane[i] = newPlane[start_pos];
        newPlane[start_pos] = save;
        moveElem(newPlane, planner.start_pos);
        // setElems(newPlane);
      }
    }
    setInited(true);
  }, [planner.next_pos]);
  
  useEffect(() => {
    if (planner.initing){
      console.log("newPlane",planner.elems);
      // moveElem(planner.elems, planner.start_pos);
    } 
  }, [planner.initing,planner.elems]);

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
    finishInit: () => {
      dispatch({
        type: END_INIT,
      });
    },
  }),
)(DropZone);
