import React, { useEffect, useState } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import { START_POS } from "redux/constants/PlannerData.js";

import { ItemTypes } from "../ItemTypes/ItemTypes.js";

import chair_0 from "./assets/chair_0.png";
import chair_1 from "./assets/chair_1.png";
import chair_2 from "./assets/chair_2.png";

import table_0 from "./assets/table_0.png";
import table_1 from "./assets/table_1.png";
import table_2 from "./assets/table_2.png";

const ELEM_SRC = [chair_0, chair_1, chair_2, table_0, table_1, table_2];

const elemStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move",
};

const Elem1 = (props) => {
  const { img_idx, start = -1, set_start } = props;
  const [prevDragging,setPrevDragging]=useState(false);

  const [{ isDragging, item, offset0, offset1 }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.ELEM,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        item: monitor.getItem(),
        // offset0: monitor.getDifferenceFromInitialOffset(),
        // offset1: monitor.getInitialSourceClientOffset(),
      }),
    }),
    [],
  );
  // console.log("getDifferenceFromInitialOffset",offset0);
  // console.log("getInitialSourceClientOffset",offset1);

  useEffect(() => {
    if (!prevDragging && isDragging){
        console.log("start_idx:", start);
        set_start(start);
    }
    setPrevDragging(isDragging);
  }, [isDragging]);

  return (
    <>
      <DragPreviewImage connect={preview} src={ELEM_SRC[img_idx]} />
      <div
        ref={drag}
        role="elem"
        style={{
          ...elemStyle,
          opacity: isDragging ? 0.5 : 1,
          backgroundImage: { chair_0 },
        }}
      >
        <img src={ELEM_SRC[img_idx]} alt="img" width="100%" height="100%"></img>
      </div>
    </>
  );
};

const Elem = connect(null, (dispatch) => ({
  set_start: (data) => {
    dispatch({
      type: START_POS,
      start_pos: data,
    });
  },
}))(Elem1);

export { Elem, ELEM_SRC };
