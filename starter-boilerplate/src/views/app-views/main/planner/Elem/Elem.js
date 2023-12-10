import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { DropTarget } from "react-dnd";

import { ItemTypes } from "../ItemTypes/ItemTypes.js";

import chair_0 from "./assets/chair_0.png";
import chair_1 from "./assets/chair_1.png";
import chair_2 from "./assets/chair_2.png";
import chair_3 from "./assets/chair_3.png";

import table_0 from "./assets/table_0.png";
import table_1 from "./assets/table_1.png";
import table_2 from "./assets/table_2.png";

const IMG_SRC = [chair_0, chair_1, chair_2, chair_3, table_0, table_1, table_2];

const elemStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move",
};

export const Elem = (props) => {
  const { elem } = props;

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.ELEM,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        item: monitor.getItem(),
      }),
    }),
    [],
  );
  
  return (
    <>
      <DragPreviewImage connect={preview} src={IMG_SRC[elem]} />
      <div
        ref={drag}
        style={{
          ...elemStyle,
          opacity: isDragging ? 0.5 : 1,
          backgroundImage: { chair_0 },
        }}
      >
        <img src={IMG_SRC[elem]} alt="img" width="100%" height="100%"></img>
      </div>
    </>
  );
};
