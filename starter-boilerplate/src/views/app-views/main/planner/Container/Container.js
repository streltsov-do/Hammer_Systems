import React, { Component, useMemo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropZone from "../DropZone/DropZone";
import css from "./container.module.css";
import { Game } from "../Game/Game";

const posArr = [
  [0, 0],
  [1, 1],
];
export const Container = () => {
  const game = useMemo(() => new Game(), []);
  return (
    <div className={css.container}>
      <div className={css.dropzone}>
        <DndProvider backend={HTML5Backend}>
          <DropZone game={game} />
        </DndProvider>
      </div>
    </div>
  );
};
export default Container;
