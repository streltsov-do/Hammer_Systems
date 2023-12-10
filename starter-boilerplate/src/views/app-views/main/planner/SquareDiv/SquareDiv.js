import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import { ItemTypes } from "../ItemTypes/ItemTypes.js";
import { Overlay, OverlayType } from "../Overlay/Overlay.js";
import { Square } from "../Square/Square.js";

const SquareDiv = ({
  x,
  y,
  // start_pos,
  children,
  canMoveElem,
  moveElem,
  plannerState,
  start_pos
}) => {
  const [{ isOver, canDrop, handlerId }, drop] = useDrop(
    () => ({
      accept: ItemTypes.ELEM,
      canDrop: () => canMoveElem,
      drop: () => {
        moveElem(x, y);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    [plannerState],
  );

  return (
    <div
      ref={drop}
      role="Space"
      data-testid={`(${x},${y})`}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Square>{children}</Square>
      {isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover} />}
      {/* {!isOver && canDrop && <Overlay type={OverlayType.PossibleMove} />} */}
      {isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover} />}
    </div>
  );
};

export default connect(
  // (state) => ({
  //   start_pos: state.start_pos,
  // }),null
  (state) => ({
    start_pos: state.start_pos,
  }),null
)(SquareDiv);