import { ADD_TO_DIAGRAM, REMOVE_FROM_DIAGRAM } from '../constant'

export function addToDiagram ({data}) {
  return {
    type: ADD_TO_DIAGRAM,
    payload: data
  }
}

export function removeFromDiagram ({ id }) {
  return {
    type: REMOVE_FROM_DIAGRAM,
    payload: id
  }
}
