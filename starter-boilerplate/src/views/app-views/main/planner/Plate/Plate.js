import React from "react";
import { connect } from "react-redux";
import { Elem, ELEM_SRC } from "../Elem/Elem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Upload, Button, Icon } from "antd";
import { saveAs } from "file-saver";
import { INIT, MOVE } from "redux/constants/PlannerData";

const style = {
  maxWidth: "240px",
  maxHeight: "420px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "5px",
  borderStyle: "solid",
  borderWidth: "1px",
  padding: "5px",
};

const handlerSaveFile = (data) => {
  let txt = "";
  for (var i = 0; i < 64; i++) {
    txt += data[i] + ",";
  }
  var blob = new Blob([txt], { type: "text/plain;charset=utf-8" });

  saveAs(blob, "Planner.txt");
};

const handlerClear = (init,planner) => {
  const data=[];
  for (var i = 0; i < 64; i++) {
    data[i] = -1;
  }
  init(data,planner.start_pos);
};

const Plate1 = (props) => {
  const { planner, init, moveElem } = props;

  return (
    <div>
      <h3 style={{ width: "240px", textAlign: "center" }}>
        Перетаскиваемые объекты
      </h3>
      <DndProvider backend={HTML5Backend}>
        <div style={style}>
          {ELEM_SRC.map((elem, idx) => (
            <Elem key={idx} img_idx={idx}></Elem>
          ))}
        </div>
      </DndProvider>
      <hr></hr>
      <Upload
        accept="txt"
        showUploadList={false}
        beforeUpload={(file) => {
          const reader = new FileReader();

          reader.onload = (e) => {
            const data = e.target.result.split(",");
            for (var i = 0; i < 64; i++) {
              data[i] = Number(data[i]);
            }
            init(data);
          };
          reader.readAsText(file);

          // Prevent upload
          return false;
        }}
      >
        <Button>
          {/* <Icon type="upload" />  */}
          Загрузить файл c расстановкой
        </Button>
      </Upload>
      <hr></hr>
      <Button onClick={() => handlerSaveFile(planner.elems)}>
        Сохранить расстановку в файл
      </Button>
      <hr></hr>
      <Button onClick={() => handlerClear(init,planner)}>
        Очистить расстановку
      </Button>
    </div>
  );
};

const Plate = connect(
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
    moveElem: (data, next) => {
      dispatch({
        type: MOVE,
        elems: data,
        next_pos: next,
      });
    },
  }),
)(Plate1);

export { Plate };
