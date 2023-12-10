import { Elem } from '../Elem/Elem.js'
export const Piece = ({ img_idx, start=-1 }) => ((img_idx!==-1) ? <Elem img_idx={img_idx} start={start} /> : null)
