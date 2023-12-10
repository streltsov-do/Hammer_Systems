import { Elem } from '../Elem/Elem.js'
export const Piece = ({ elem }) => ((elem!==-1) ? <Elem elem={elem} /> : null)
