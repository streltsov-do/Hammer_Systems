import { useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes/ItemTypes.js";
import { Overlay, OverlayType } from "../Overlay/Overlay.js";
import { Square } from "../Square/Square.js";

export const SquareDiv = ({ x, y, children, game, 
  // canMove, moveElem, plannerState 
}) => {
  const [{ isOver, canDrop, handlerId }, drop] = useDrop(
    () => ({
      accept: ItemTypes.ELEM,
      canDrop: () => game.canMoveElem(x, y),
      // canDrop: () => canMove,
      drop: () => {
        game.moveElem(x, y);
        // moveElem(x, y);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    [game],
    // [plannerState],
  );
  // console.log(handlerId);
  return (
    <div
      ref={drop}
      //   role="Space"
      data-testid={`(${x},${y})`}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Square>{children}</Square>
      {isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover} />}
      {!isOver && canDrop && <Overlay type={OverlayType.PossibleMove} />}
      {isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover} />}
    </div>
  );
};
