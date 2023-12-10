export class Game {
  elemPosition = [1, 7];

  elemsPositions = [];
  inited = false;
  initElems = () => {
    for (let i = 0; i < 64; i++) {
      this.elemsPositions[i] = -1;
    }
  };

  observers = [];
  observe(o) {
    console.log("o", o);
    this.observers.push(o);
    console.log("obs", this.observers);
    this.emitChange();
    if (!this.inited) {
      this.initElems();
      this.inited = true;
    }
    return () => {
      this.observers = this.observers.filter((t) => t !== o);
    };
  }
  moveElem(toX, toY) {
    this.elemPosition = [toX, toY];
    this.emitChange();
  }
  canMoveElem(toX, toY) {
    const arr = this.elemsPositions;
    const [x, y] = this.elemPosition;
    const i = toX * 8 + toY;

    return (x !== toX || y !== toY) && arr[i] === -1;
  }
  emitChange() {
    const pos = this.elemPosition;
    console.log("obs1", this.observers);
    this.observers.forEach((o) => o && o(pos));
    console.log("obs2", this.observers);
  }
}
