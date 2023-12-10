import React from "react";
import { Elem, ELEM_SRC } from "../Elem/Elem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const style = {
  maxWidth: "220px",
  maxHeight: "420px",
  display: "flex",
  flexWrap: "wrap",
  gap: "5px",
  borderStyle: "solid",
  borderWidth: "1px",
  padding: "5px",
};

const Plate = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={style}>
        {ELEM_SRC.map((elem, idx) => (
          <Elem key={idx} img_idx={idx}></Elem>
        ))}
      </div>
    </DndProvider>
  );
};

export { Plate };
