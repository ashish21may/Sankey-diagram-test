import { ADD_TO_DIAGRAM, REMOVE_FROM_DIAGRAM } from '../constant';
import { data } from '../../mock-data/Data';

const initialState = data;

export default function diagramReducer (state = initialState, action) {
  console.log('in Reducer, Action is: ', action)
  const diagramData = state
  switch (action.type) {
    case ADD_TO_DIAGRAM:
      const newData = action.payload;
      return Object.assign([],[...diagramData, newData]);

    case REMOVE_FROM_DIAGRAM:
      const dataId = action.payload
      return Object.assign([],diagramData.filter(item=> item.id !== dataId));

    default:
      return state
  }
}
