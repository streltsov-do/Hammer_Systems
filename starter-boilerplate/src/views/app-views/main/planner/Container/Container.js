import React, { Component, useMemo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropZone from "../DropZone/DropZone";
import css from "./container.module.css";

export const Container = () => {
  return (
    <div className={css.container}>
      <div className={css.dropzone}>
        <DndProvider backend={HTML5Backend}>
          <DropZone />
        </DndProvider>
      </div>
    </div>
  );
};
export default Container;
